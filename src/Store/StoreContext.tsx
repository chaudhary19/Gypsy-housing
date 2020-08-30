import React, { useContext } from 'react';
import Store from './Store';
import {useLocalStore} from 'mobx-react';
const storeContext = React.createContext(Store());
export const StoreContext = ({children}:any)=>{
    const observableStoreContext = useLocalStore(Store);
return <storeContext.Provider value={observableStoreContext}>{children}</storeContext.Provider>
}

export const useStore = ()=>useContext(storeContext); 