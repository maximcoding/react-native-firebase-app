import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";

// my uid  yQ7neelfT8QAUE9iteZttRbtBsq2


interface IStore extends IAuthStore, IThemeState {
}

export interface IAuthUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoUrl: string | null;
  uid: string;
}

export interface Credentials {
  email: string,
  password: string
}

export interface IAuthStore {
  isAuthenticated: boolean;
  authUser: IAuthUser | null;
  accessToken: string;
  refreshToken: string;
  expirationTime: number | null;
  login: (credentials: Credentials) => void;
  logout: () => void;
  error?: any;
}


export const withAuthState: StateCreator<IAuthStore> = set => ({
  isAuthenticated: false,
  authUser: null,
  error: null,
  accessToken: "",
  refreshToken: "",
  expirationTime: null,
  login: async ({ email, password }: Credentials) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      const user = response.user;
      console.log('user',user);
      if (user) {
        const authUser: IAuthUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
          uid: user.uid
        };
        set({ authUser, isAuthenticated: true });
      }
    } catch ({ message }) {
      set({ error: message });
    }
  },
  logout: async () => {
    try {
      await auth().signOut();
      set({ authUser: null, isAuthenticated: false });
    } catch (error) {
      set({ error });
    }
  }
});


export interface IThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const withThemeState: StateCreator<IThemeState> = set => ({
  isDarkMode: true,
  toggleTheme: (): void => {
    set(state => ({ isDarkMode: !state.isDarkMode }));
  }
});

export const withDevicesState: StateCreator<any> = set => ({
  isLoaded: false,
  devices: [],
  setDevices: (devices: any[]) => {
    set({ devices });
  },
  setLoaded: (isLoaded: boolean) => {
    set({ isLoaded });
  },
  clear: () => {
    set({ isLoaded: false });
  }
});

export const useStore = create<IStore>()(
  persist((set, get, api) => ({
      ...withAuthState(set, get, api),
      ...withThemeState(set, get, api),
      ...withDevicesState(set, get, api)
    }), {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        // if (isFunction(state?.setLoaded)) {
        //   state?.setLoaded(true)
        // }
      }
    }
  )
);


