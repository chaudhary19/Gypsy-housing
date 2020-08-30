import React from 'react';
import * as FIcons from 'react-icons/fc';
import * as AIcons from 'react-icons/ai';
import { useStore } from '../../Store/StoreContext';
import { IconContext } from 'react-icons/lib';

interface Props{
    isSuggestion:boolean;
    isFavourite:boolean;
    isRejected:boolean;
    obj:{id:string,name:string,photoUrl:string}
}

const Card:React.FunctionComponent<Props> = ({obj,...props})=>{
    let buttonFav=null,buttonRej=null;
    const store =  useStore();
    if(props.isSuggestion || props.isRejected)
        buttonFav=(
            <div className='bg-blue-500 h-10 w-32 p-2 rounded-lg' onClick={event => ((props.isSuggestion)?store.suggestionToFavourite(obj.id):store.rejectedToFavourite(obj.id))}>
                <button>
                <div className='flex items-center'>
                    <IconContext.Provider value={{color:'white'}}>
                        <AIcons.AiFillStar className='ml-3'/>
                    </IconContext.Provider>
                    <span className='text-white text-base ml-1'>Favourite</span>
                </div>
                </button>
            </div>
        );
    if(props.isSuggestion || props.isFavourite)
            buttonRej=(
                <div className='ml-2 bg-gray-200 h-10 p-2 w-32 rounded-lg'
                onClick={event => ((props.isSuggestion)?store.suggestionToRejected(obj.id):store.favouriteToRejected(obj.id))}>
                    <button >
                        <div className='flex items-center '>
                            <FIcons.FcCancel className='ml-4'/>
                            <span className='text-red-600 text-lg font-semibold ml-1'>Reject</span>
                        </div>
                    </button>
                </div>
            );

    const style ={
        height : '18rem',
        width  : '20rem',
        borderRadius : '1rem'
    }
    return (
        <div className='bg-orange-100 border border-gray-400' style={style}>
            <div className='ml-6 mt-4'>
                <div className='flex items-center'>
                    <img src={obj.photoUrl} alt="images" className='h-20 w-20 rounded-full'/>
                    <p className='font-bold text-lg ml-4'>{obj.name}</p>
                </div>
                <div className='text-left mt-3 font-medium pr-8 text-base'>
                    <p>A<span className='text-orange-600 ml-1'>non-smoker</span>, looking for<span className='text-orange-600 ml-1'>2 roommates</span> in <span className='text-orange-600 ml-1'>Seatle downtown</span>, with a move in of <span className='text-orange-600 ml-1'>9/1/20</span> and a monthly rent of <span className='text-orange-600 ml-1 text-base'>$1000-$1,200</span></p>
                </div>
                <div className='mt-6 flex'>
                    {buttonFav}
                    {buttonRej}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Card);