const asyncHandler = require('../middlewares/async_handler');
const Employees = require('../models/employees');
const Jobs = require('../models/jobs');
const JobIns = require('../models/job_ins');
const ErrorModel = require('../middlewares/error_model');
const Plans = require('../models/plans');
const Vehicle = require('../models/vehicles');
require('../models/master_routes');

const reportDriverWave = asyncHandler(async (req, res, next) => {
  const { employeeId, startDate, endDate } = req.query;

  if (!employeeId) throw new ErrorModel('Parameter missing, employeeId not exists');
  if (!startDate) throw new ErrorModel('Parameter missing, startDate not exists');
  if (!endDate) throw new ErrorModel('Parameter missing, endDate not exists');

  if (Date.parse(startDate) > Date.parse(endDate))
    throw new ErrorModel('Invalid parameter value, startDate should less than endDate');

  const employee = await Employees.findById(employeeId);

  const jobIns = await JobIns.find({ $or: [{ employee: employeeId }, { employee2: employeeId }] });
  const jobInsIds = [];
  jobIns.forEach((id) => jobInsIds.push(id.id));

  const jobs = await Jobs.find({
    $and: [
      {
        status: '6',
        isActive: true,
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      },
      { job_in: { $in: jobInsIds } },
    ],
  })
    .populate({
      path: 'master_route',
      select: ['name', 'cost'],
    })
    .select(['date']);

  const jobsDTO = [];

  jobs.forEach((job) => {
    const date = job.date.toISOString().substring(0, 10);
    const index = jobsDTO.findIndex((jobDto) => jobDto.date == date);

    // if date not exists push new date and route
    if (index == -1) {
      jobsDTO.push({
        date: date,
        route: [{ id: job.master_route.id, name: job.master_route.name, cost: job.master_route.cost || 0, count: 1 }],
      });

      // else push new route to existing date
    } else {
      const routeIndex = jobsDTO.findIndex((jobDto) => jobDto.master_route == job.master_route.id);

      // push new route
      if (routeIndex == -1) {
        jobsDTO[index].route.push({
          id: job.master_route.id,
          name: job.master_route.name,
          cost: job.master_route.cost || 0,
          count: 1,
        });
        // else increase tripsAmount
      } else {
        jobsDTO[index][routeIndex].count++;
      }
    }
  });

  var routesCosts = [];
  var totalRoute = 0;
  var totalCost = 0;

  jobsDTO.forEach((jobDto) => {
    var dateRoute = 0;
    var dateCost = 0;
    jobDto.route.forEach((route) => {
      dateRoute += route.count;
      dateCost += route.cost;

      // add route amount to routesCount
      const index = routesCosts.findIndex((routeCount) => routeCount == route.count);
      if (index == -1) {
        routesCosts.push({ id: route.id, count: route.count, cost: route.cost });
      } else {
        routesCosts[index].count += route.count;
        routesCosts[index].cost += route.cost;
      }
    });
    jobDto.totalRoute = dateRoute;
    jobDto.totalCost = dateCost;

    totalRoute += dateRoute;
    totalCost += dateCost;
  });

  // remove id from master route
  // jobsDTO.forEach((job) => job.route.forEach((route) => (route.id = undefined)));

  // response data
  const data = {
    employeeName: employee.name,
    jobs: jobsDTO,
    report: { routesCosts: routesCosts, totalRoute: totalRoute, totalCost: totalCost },
  };

  res.status(200).json(data);
});

const findByEmployee = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const jobsId = await Plans.find({ $or: [{ employee: id }, { employee2: id }] }).select('id');

  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
    sort: { createdAt: -1 },
    populate: [
      {
        path: 'master_route',
        select: ['id', 'name'],
        populate: { path: 'stations', select: ['name', 'tel', 'contact'] },
      },
      { path: 'plan', populate: { path: 'vehicle', select: ['VehicleLicensePlate'] }, select: ['vehicle'] },
    ],
    select: ['id', 'date'],
  };

  const jobs = await Jobs.paginate(
    { $and: [{ plan: { $in: jobsId } }, { $or: [{ status: '2' }, { status: '3' }] }, { isActive: true }] },
    options
  );

  res.status(200).json(jobs);
});

module.exports = { reportDriverWave, findByEmployee };
