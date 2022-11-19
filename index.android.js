import { Device } from '@nativescript/core';

export function getUUID() {
  return Device ? Device.uuid : null;
}
