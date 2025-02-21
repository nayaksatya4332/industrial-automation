export type DeviceState = "Online" | "Offline" | "Maintenance" | "Error";

export type Device = {
  id: string;
  deviceName: string;
  vendor: string;
  description?: string;
  status: DeviceState;
  articleNumber?: string;
  macAddress: string;
  ipAddress: string;
  firmwareVersion?: string;
  serialNumber?: string;
};
