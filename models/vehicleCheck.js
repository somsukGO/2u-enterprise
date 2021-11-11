const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleCheckSchema = Schema(
  {
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employees',
      required: true,
    },
    currentMileage: {
      type: Number,
    },
    // ລະບົບເຄື່ອງລົດ
    engineSystem: {
      // ໄສ້ກ່ອງອາກາດ
      airBoxShield: {
        regular: Boolean,
        crashCauses: String,
      },
      // ສາຍພານຫນ້າລົດ
      engineFrontLine: {
        regular: Boolean,
        crashCauses: String,
      },
      // ນໍ້າມັນເຄື່ອງ
      engineOil: {
        regular: Boolean,
        crashCauses: String,
      },
      // ນໍ້າມັນພວງມະໄລ
      garlandOil: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຫົວທຽນແລະສາຍຫົວທຽນ
      headCandleLine: {
        regular: Boolean,
        crashCauses: String,
      },
      // ພັດລົມລະບາຍອາກາດ
      ventilationFan: {
        regular: Boolean,
        crashCauses: String,
      },
      // ໝໍ້ນໍ້າ ແລະ ທໍ່ຢາງ
      waterPipesAndHoses: {
        regular: Boolean,
        crashCauses: String,
      },
      // ລະບົບນໍ້າລໍເຢັນ
      coldWaterSystem: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຄອຍຈຸດລະເບີດ
      explosionPoint: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ລະບົບທໍາຄວາມເຢັນ
    coolingSystem: {
      // ແອ
      air: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ລະບົບໄຟຟ້າ
    electricalSystem: {
      // ແບັດເຕີຣີແລະ ນໍ້າກັ້ນ
      batteryAndWaterBarrier: {
        regular: Boolean,
        crashCauses: String,
      },
      // ໄຟສ່ອງສະຫວ່າງແລະໄຟສັນຍານ
      lightsAndSignalLights: {
        regular: Boolean,
        crashCauses: String,
      },
      // ໄດຊາສ
      chargeMotor: {
        regular: Boolean,
        crashCauses: String,
      },
      // ແກ໊ລົດ
      horn: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ລະບົບສົ່ງກໍາລັງແລະຊ່ວງລ້າງ
    transmissionAndWashIntervals: {
      // ນໍ້າມັນເກ່ຍ
      gearOil: {
        regular: Boolean,
        crashCauses: String,
      },
      // ນໍ້າມັນເຟື້ອງທ້າຍ
      backGearOil: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຫຸ້ມເພົາຂັບ
      axleCover: {
        regular: Boolean,
        crashCauses: String,
      },
      // ລູກໝາກ
      ballRoll: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຊົກອັບ ແລະ ແນບ
      punchAndAttach: {
        regular: Boolean,
        crashCauses: String,
      },
      // ລູກປຶນລໍ້
      ballWheels: {
        regular: Boolean,
        crashCauses: String,
      },
      // ບູສແລະລູກຢາງຊ່ວງລ້າງ
      boostAndBottomRubberBall: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ລະບົບເບກ
    brakeSystem: {
      // ຈານເບກ
      discBrake: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຜ້າເບກ ແລະ ຄາສລິບເປ
      brakePadsAndCaps: {
        regular: Boolean,
        crashCauses: String,
      },
      // ນໍ້າມັນເບກ
      brakeFluid: {
        regular: Boolean,
        crashCauses: String,
      },
      // ສາຍອ່ອນເບກ
      softBrakeCable: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ຢາງລົດ
    tires: {
      // ແຮງດັນ
      voltage: {
        regular: Boolean,
        crashCauses: String,
      },
      // ສະພາບຢາງ
      tireCondition: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຄວາມເລິກດອກຢາງ
      flowerDepth: {
        regular: Boolean,
        crashCauses: String,
      },
      // ຢາງສໍາຮອງ
      spareRubber: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ອື່ນໆ
    others: {
      // ໃບປັດນໍ້າຝົນ
      raindrops: {
        regular: Boolean,
        crashCauses: String,
      },
      // ແວ່ນລົດ
      windshield: {
        regular: Boolean,
        crashCauses: String,
      },
    },
    // ປະເພດຂອງນໍ້າມັນເຊື້ອເພີງ
    fuelType: {
      type: String,
    },
    // ລະດັບນໍ້າມັນ
    fuelLevel: {
      required: true,
      type: String,
    },
    //  ສົ່່ງສ້ອມແປງອູ່ໃນ
    checkStation: {
      type: String,
      required: true,
    },
    // ຫມາຍເຫດ
    remark: {
      type: String,
    },
    checkDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const VehicleCheck = mongoose.model('vehicle_check', vehicleCheckSchema);

module.exports = VehicleCheck;
