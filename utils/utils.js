var fs = require('fs');
const path = require('../utils/app_constant').filePath;

const createFolder = () => {
  if (!fs.existsSync(path.refuel)) {
    fs.mkdirSync(path.refuel, { recursive: true });
  }
};

module.exports = { createFolder };
