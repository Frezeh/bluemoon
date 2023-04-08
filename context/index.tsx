import {createContext, ReactNode, useState, useEffect} from 'react';
import {
  InventoryActions,
  InventoryData,
  InventoryState,
  StorageData,
  UserData,
} from './types';
import {randomId, retrieveData, storeData} from './utils';

const initialData = {
  isAuthenticated: false,
  token: '',
  user: [],
};

const signedInUserInitialData = {
  email: '',
  password: '',
  userId: '',
  inventory: [],
};

export const InventoryContext = createContext<InventoryState>(
  {} as InventoryState,
);

export const InventoryActionsContext = createContext<InventoryActions>(
  {} as InventoryActions,
);

export function InventoryProvider({children}: {children: ReactNode}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<StorageData>(initialData);
  const [signedInUserData, setSignedInUserData] = useState<UserData>(
    signedInUserInitialData,
  );
  const [authenticated, setAuthenticated] = useState<boolean>(
    data.isAuthenticated,
  );

  const userId = data.token ?? signedInUserData.userId;

  function getStorage() {
    // Retrieve data from the database
    return retrieveData<StorageData>('data').then(value => {
      if (value !== null && value !== undefined) {
        setData(value);
        setAuthenticated(value?.isAuthenticated ? true : false);
      }
    });
  }

  function addToStorage(inputData: InventoryData) {
    let userData = data.user;

    userData.forEach(user => {
      if (user.userId === userId) {
        user.inventory.push(inputData);
      }
    });

    return userData;
  }

  function updateStorage(inputData: InventoryData) {
    let userData = data.user;

    userData.forEach(user => {
      if (user.userId === userId) {
        // Get the array index that matches the specified id
        const currentItemIndex = user.inventory.findIndex(
          i => i.id === inputData.id,
        );
        // Updates the value for that index
        user.inventory[currentItemIndex] = inputData;
      }
    });

    return userData;
  }

  function deleteStorage(inputData: InventoryData) {
    let userData = data.user;

    userData.forEach(user => {
      if (user.userId === userId) {
        user.inventory.filter((v, index, arr) => {
          // If the value at the current array index matches the specified id
          if (v.id === inputData.id) {
            // Removes the value from the original array
            arr.splice(index, 1);
          }
        });
      }
    });

    return userData;
  }

  function updateOnFirstLogin(i: UserData) {
    // On first time login update the database with the user details
    let newData = {
      ...data,
      isAuthenticated: true,
      user: [...data.user, i],
      token: i.userId,
    };

    setData(newData);
    storeData<StorageData>('data', newData);
  }

  function updateAuthentication(state: boolean) {
    // Updates the database authentication state
    let newData = {...data, isAuthenticated: state};

    storeData<StorageData>('data', newData);
  }

  function updateToken() {
    // Updates the session token in the database
    let newData = {...data, isAuthenticated: false, token: ''};

    storeData<StorageData>('data', newData);
  }

  useEffect(() => {
    getStorage();
  }, []);

  const logIn = (inputData: {email: string; password: string}) => {
    setIsLoading(true);

    let userId = randomId();
    let email = inputData.email;
    let password = inputData.password;

    try {
      const availableUserData = data.user.find(
        u => u.email === inputData.email && u.password === inputData.password,
      );

      // If user credentials exists in the database log the user in and retrieve user data
      // Else create new user in the database and log user in
      if (!!availableUserData) {
        setSignedInUserData(availableUserData);
        setAuthenticated(true);
        updateAuthentication(true);
      } else {
        setSignedInUserData({
          email,
          password,
          userId,
          inventory: [],
        });
        setAuthenticated(true);
        updateOnFirstLogin({email, password, userId, inventory: []});
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    setAuthenticated(false);
    updateToken();
  };

  const createInventory = (inputData: InventoryData) => {
    setSignedInUserData({
      ...signedInUserData,
      inventory: [...signedInUserData.inventory, inputData],
    });

    const newData = {...data, user: addToStorage(inputData)};

    storeData<StorageData>('data', newData);
  };

  const updateInventory = (inputData: InventoryData) => {
    let inventory = signedInUserData.inventory;

    const currentItemIndex = inventory.findIndex(i => i.id === inputData.id);
    const updatedItem = {
      ...inventory[currentItemIndex],
      id: inputData.id,
      description: inputData.description,
      name: inputData.name,
      price: inputData.price,
      stock: inputData.stock,
    };
    const newItem = [
      ...inventory.slice(0, currentItemIndex),
      updatedItem,
      ...inventory.slice(currentItemIndex + 1),
    ];
    setSignedInUserData({
      ...signedInUserData,
      inventory: newItem,
    });
    const newData = {...data, user: updateStorage(inputData)};
    storeData<StorageData>('data', newData);
  };

  const deleteInventory = (inputData: InventoryData) => {
    let inventory = signedInUserData.inventory;

    let newItem = inventory.filter(i => i.id !== inputData.id);

    setSignedInUserData({
      ...signedInUserData,
      inventory: newItem,
    });

    const newData = {...data, user: deleteStorage(inputData)};

    storeData<StorageData>('data', newData);
  };

  return (
    <InventoryActionsContext.Provider
      value={{
        logIn,
        logOut,
        createInventory,
        updateInventory,
        deleteInventory,
      }}>
      <InventoryContext.Provider
        value={{
          isLoading,
          signedInUserData,
          authenticated,
        }}>
        {children}
      </InventoryContext.Provider>
    </InventoryActionsContext.Provider>
  );
}
