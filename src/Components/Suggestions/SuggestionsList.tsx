import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../Store/StoreContext';
import Card from '../Card/Card';


const SuggestionsList:React.FunctionComponent=()=>{
    const store=useStore();
    return (
        <div className='mt-4 grid grid-cols-3 grid-rows-2 gap-8'>
            {store.suggestionList.map(cur=>(
                <Card isRejected={false} isFavourite={false} isSuggestion={true} obj={cur} key={cur.id} 
                />
            ))}
        </div>
    );
}

export default observer(SuggestionsList);