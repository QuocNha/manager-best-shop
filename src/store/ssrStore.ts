// store/useStore.ts
import { createStore, StoreApi, useStore as useZustandStore } from "zustand";

type AppState = {
  count: number;
  increase: () => void;
};

let store: StoreApi<AppState> | undefined;

const defaultInitialState: AppState = {
  count: 0,
  increase: () => {},
};

const createAppStore = (preloadedState: Partial<AppState> = {}) => {
  const initialState: AppState = {
    ...defaultInitialState,
    ...preloadedState,
  };

  return createStore<AppState>((set) => ({
    ...initialState,
    increase: () => set((state) => ({ count: state.count + 1 })),
  }));
};

export const initializeStore = (preloadedState: Partial<AppState> = {}) => {
  const _store = store ?? createAppStore(preloadedState);

  // Always create a new store on the server
  if (typeof window === "undefined") return _store;

  // Create the store once on the client
  if (!store) store = _store;

  return _store;
};

export const useStore = <T>(selector: (state: AppState) => T): T => {
  const zustandStore = initializeStore();
  return useZustandStore(zustandStore, selector);
};
