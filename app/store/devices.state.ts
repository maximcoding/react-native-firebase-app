import { StateCreator } from "zustand"
import { Devices } from "../types/user"

export const withDevicesState: StateCreator<any> = set => ({
  isLoaded: false,
  devices: [],
  setDevices: (devices: Devices[]) => {
    set({ devices })
  },
  setLoaded: (isLoaded: boolean) => {
    set({ isLoaded })
  },
  clear: () => {
    set({ isLoaded: false })
  },
})
