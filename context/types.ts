export type InventoryState = {
  signedInUserData: UserData;
  authenticated: boolean;
  isLoading: boolean;
};

export type InventoryActions = {
  logIn: (inputData: {email: string; password: string}) => void;
  logOut: () => void;
  createInventory: (inputData: InventoryData) => void;
  updateInventory: (inputData: InventoryData) => void;
  deleteInventory: (inputData: InventoryData) => void;
  removeData?:  () => void
};

export type InventoryData = {
  id: string;
  name: string;
  price: string;
  stock: string;
  description: string;
};

export type UserData = {
  email: string;
  password: string;
  userId: string;
  inventory: InventoryData[];
};

export type StorageData = {
  isAuthenticated: boolean;
  user: UserData[];
  token: string
};
