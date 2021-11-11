const Vehicles = require('../models/vehicles');
const asyncHandler = require('../middlewares/async_handler');
const Employees = require('../models/employees');
const ErrorModel = require('../middlewares/error_model');
const VehicleCheck = require('../models/vehicleCheck');

const findAll = asyncHandler(async (req, res, next) => {
  const data = await Vehicles.find().select(['id', 'VehicleLicensePlate']);

  return res.status(200).json(data);
});

const checkVehicle = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  const employee = await Employees.findById(req.body.employee);
  if (!employee) throw new ErrorModel('Employee not exists id: ' + req.body.employee);

  const vehicle = await Vehicles.findById(req.body.vehicle);
  if (!vehicle) throw new ErrorModel('Vehicle not exists id: ' + req.body.vehicle);

  const vehicleCheck = new VehicleCheck(req.body);
  const savedVehicleCheck = await vehicleCheck.save();

  return res.status(200).json(savedVehicleCheck);
});

module.exports = { findAll, checkVehicle };
