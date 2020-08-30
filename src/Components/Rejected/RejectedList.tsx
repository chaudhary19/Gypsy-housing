import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../Store/StoreContext';
import Card from '../Card/Card';


const RejectedList:React.FunctionComponent = ()=>{
    const store=useStore();
    return (
        <div className=' mt-4 grid grid-cols-3 grid-rows-2 gap-4'>
            {store.rejectedList.map(cur=>(
                <Card isRejected={true} isFavourite={false} isSuggestion={false} obj={cur} key={cur.id} 
                />
            ))}
        </div>
    );
}

export default observer(RejectedList);