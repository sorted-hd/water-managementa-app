const config = require('../config');

const inputDataCheck = (inputData) => {
  let dataLen = inputData.length;
  if (inputData.length === 0) {
    return false;
  }
  for (let idx = 0; idx < dataLen; idx++) {
    let inputCommand = inputData[idx].split(' ');
    if (!checkCommands(inputCommand, idx, dataLen)) {
      return false;
    }
  }

  return true;
};

const checkCommands = (inputCommand, idx, dataLen) => {
  if (idx === 0 && inputCommand[0] !== config.constants.ALLOT_WATER) {
    return false;
  }

  if (idx === 0 && inputCommand.length !== 3) {
    return false;
  }

  if (idx === 0 && inputCommand[2].split(':').length !== 2) {
    return false;
  }

  if (idx === dataLen - 1 && inputCommand[0] !== config.constants.BILL) {
    return false;
  }

  if (idx !== 0 && idx !== dataLen - 1) {
    if (inputCommand.length !== 2) {
      return false;
    }
  }
  return true;
};

module.exports = inputDataCheck;
