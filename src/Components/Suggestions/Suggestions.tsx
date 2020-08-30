import React from 'react';
import SuggestionsList from './SuggestionsList';


const Suggestions:React.FunctionComponent = ()=>{
    const style={
        marginLeft:'18rem'
    }
    return (
        <div style={style}>
            <p className ='text-6xl font-bold mt-3'>Suggestions</p>
            <SuggestionsList/>
        </div>
    );
}

export default Suggestions;