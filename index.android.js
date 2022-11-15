import { Device } from '@nativescript/core';

function getUUID() {
  return Device ? Device.uuid : null;
}

exports.getUUID = getUUID;
