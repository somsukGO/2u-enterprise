const Refuels = require('../models/refuel');
const Employees = require('../models/employees');
const Vehicles = require('../models/vehicles');
const asyncHandler = require('../middlewares/async_handler');
const fs = require('fs');
const path = require('../utils/app_constant').filePath;
const ErrorModel = require('../middlewares/error_model');

const findAll = asyncHandler(async (req, res, next) => {
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 20,
    sort: { createdAt: -1 },
    populate: ['employee', 'vehicle'],
  };

  const filter = {};

  if (req.query.startDate && req.query.endDate) {
    const startDate = req.query.startDate + 'T00:00:00';
    const endDate = req.query.endDate + 'T23:59:59';

    filter.createdAt = { $gte: startDate, $lt: endDate };
  }

  const employeeId = req.query.employee;
  if (employeeId) {
    filter.employee = employeeId;
  }

  const refuels = await Refuels.paginate(filter, options);
  return res.status(200).json(refuels);
});

const findById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  if (!id) throw new ErrorModel('Id param exists');

  const refuel = await Refuels.findById(id).populate(['employee', 'vehicle']);
  if (!refuel) throw new ErrorModel('Refuel not exists id: ' + id);

  return res.status(200).json(refuel);
});

const add = asyncHandler(async (req, res, next) => {
  if (!req.files['billImage']) throw new ErrorModel('Bill image not exists');
  if (!req.files['mileageImage']) throw new ErrorModel('Mileage image not exists');
  if (!req.files['priceImage']) throw new ErrorModel('Price image not exists');

  const billImage = req.files['billImage'][0];
  const mileageImage = req.files['mileageImage'][0];
  const priceImage = req.files['priceImage'][0];

  if (billImage.mimetype.split('/')[0] != 'image') throw new ErrorModel('Bill file is not an image');
  if (mileageImage.mimetype.split('/')[0] != 'image') throw new ErrorModel('Mileage file is not an image');
  if (priceImage.mimetype.split('/')[0] != 'image') throw new ErrorModel('Price file is not an image');

  const billImageName = billImage.fieldname + '-' + Date.now() + '.' + billImage.mimetype.split('/')[1];
  const mileageImageName = mileageImage.fieldname + '-' + Date.now() + '.' + mileageImage.mimetype.split('/')[1];
  const priceImageName = priceImage.fieldname + '-' + Date.now() + '.' + priceImage.mimetype.split('/')[1];

  const billFilePath = path.refuel + billImageName;
  const mileagePath = path.refuel + mileageImageName;
  const pricePath = path.refuel + priceImageName;

  const employee = await Employees.findById(req.body.employee);
  if (!employee) throw new ErrorModel('Employee not exists id: ' + req.body.employee);

  const vehicle = await Vehicles.findById(req.body.vehicle);
  if (!vehicle) throw new ErrorModel('Vehicle not exists id: ' + req.body.vehicle);

  const refuel = new Refuels({
    vehicle: req.body.vehicle,
    employee: req.body.employee,
    petroleumType: req.body.petroleumType,
    amount: req.body.amount,
    price: req.body.price,
    totalPrice: req.body.totalPrice,
    currentMileage: req.body.currentMileage,
    billImage: billImageName,
    mileageImage: mileageImageName,
    priceImage: priceImageName,
    vehicleLicensePlate: vehicle.VehicleLicensePlate,
  });

  console.log(refuel);

  const savedRefuel = await refuel.save();
  savedRefuel.vehicle = vehicle;
  savedRefuel.employee = employee;

  try {
    fs.writeFileSync(billFilePath, billImage.buffer, function (_) {});
    fs.writeFileSync(mileagePath, mileageImage.buffer, function (_) {});
    fs.writeFileSync(pricePath, priceImage.buffer, function (_) {});
  } catch (err) {
    fs.unlinkSync(billFilePath);
    fs.unlinkSync(mileagePath);
    fs.unlinkSync(pricePath);

    throw new ErrorModel(err.message);
  }

  return res.status(200).json(savedRefuel);
});

const update = asyncHandler(async (req, res, next) => {
  const id = req.body.id;

  const refuel = await Refuels.findById(id);
  if (!refuel) throw new ErrorModel('Refuel id not exists');

  const employee = await Employees.findById(req.body.employee);
  if (!employee) throw new ErrorModel('Employee not exists id: ' + req.body.employee);

  const vehicle = await Vehicles.findById(req.body.vehicle);
  if (!vehicle) throw new ErrorModel('Vehicle not exists id: ' + req.body.vehicle);

  const refuelDto = {
    vehicle: req.body.vehicle,
    employee: req.body.employee,
    petroleumType: req.body.petroleumType,
    amount: req.body.amount,
    price: req.body.price,
    totalPrice: req.body.totalPrice,
    currentMileage: req.body.currentMileage,
    vehicleLicensePlate: vehicle.VehicleLicensePlate,
  };

  await refuel.updateOne(refuelDto);
  const updatedRefuel = await Refuels.findOne();

  return res.status(200).json(updatedRefuel);
});

const remove = asyncHandler(async (req, res, next) => {
  const id = req.query.id;

  const refuel = await Refuels.findById(id);
  if (!refuel) throw new ErrorModel('Refuel id not exists');

  await refuel.remove();

  const billFilePath = path.refuel + refuel.billImage;
  const mileagePath = path.refuel + refuel.mileageImage;
  const pricePath = path.refuel + refuel.priceImage;

  try {
    fs.unlinkSync(billFilePath);
    fs.unlinkSync(mileagePath);
    fs.unlinkSync(pricePath);
  } catch (err) {
    throw new ErrorModel(err.message);
  }

  return res.status(200).json({ message: 'Delete refuel successful' });
});

const networkImage = asyncHandler(async (req, res, next) => {
  const imageName = req.params.imageName;

  const imagePath = path.refuel + imageName;
  if (!fs.existsSync(imagePath)) {
    throw new ErrorModel('Image not exists', 404);
  }

  const file = fs.createReadStream(imagePath);

  file.pipe(res);
});

module.exports = { findAll, add, networkImage, update, remove, findById };
