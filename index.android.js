const { device } = require('tns-core-modules/platform');

function getUUID() {
  return device ? device.uuid : null;
}

exports.getUUID = getUUID;