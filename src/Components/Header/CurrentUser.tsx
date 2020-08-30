import React from 'react';
import Auth from '../../Authentication';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps{}
const CurrentUser:React.FunctionComponent<Props> =(props)=>{
    const curUser=localStorage.getItem("currentUser");
    let user:{
        name: string;
        id: number;
        photoUrl: string;
    }={
        name:'',
        id:-1,
        photoUrl:''
    };
    if(curUser)
      user=JSON.parse(curUser);
    return (
        <div className ='ml-6 flex'>
            <img className="h-16 w-16 rounded-full" src={user.photoUrl} alt=""/>
            <div className='ml-2'>
                <p className='text-blue-700 font-semibold text-lg'>{user.name}</p>
                <button className=' text-red-600 mt-2 text-sm font-medium' 
                onClick={()=>Auth.logout(()=>props.history.push("/login"))}>Logout</button>
            </div>
        </div>
    );
}

export default React.memo(CurrentUser);
