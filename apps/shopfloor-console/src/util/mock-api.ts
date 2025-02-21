import type { Device } from "../types";

export const fetchDataSheet = async (): Promise<Device[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const text = await res.text();

  if (res.status !== 200) {
    throw Error("Could not load data");
  }

  return JSON.parse(text);
};
