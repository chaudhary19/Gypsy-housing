import React, { useState } from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Auth from '../../Authentication';
interface Props extends RouteComponentProps{}

const LoginForm:React.FunctionComponent<Props> = (props)=>{
   const [name,setName] = useState('');

   const submitHandler = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const id = Math.ceil(Math.random()*100000);
        const currentUser={
            name,
            id:id,
            photoUrl:"https://th.bing.com/th/id/OIP.Ihd0QDdX79nPHjCBit-iwgAAAA?w=135&h=190&c=7&o=5&dpr=1.25&pid=1.7"
        }
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        Auth.login(()=>props.history.push("/"));
     }

     const nameChangeHandler = (text:string) =>{
          setName(text);
     }
     const style={
          width : '30rem'
     }
     const bstyle={
          width : '24rem'
     }
     return (
     <div className='h-64 mx-48 mt-24' style={style}>
          <img className='h-24 w-24 mx-auto' 
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="face"/>


          <div className='mt-10 border border-gray-200 rounded-md'>
               <form onSubmit={(event) => (submitHandler(event))}>
                    <div className='flex flex-col shadow-lg p-4'>
                         <div className='border-2 border-gray-200 p-3 text-lg ml-2 rounded-md'>
                         <input className='outline-none' 
                         type="text" required placeholder='Enter your Name' onChange={event=>nameChangeHandler(event.target.value)}/>
                    </div>
                    <div className='border-2 border-gray-200 p-3 text-lg ml-2 rounded-md mt-2 outline-none'>
                         <input className='outline-none' 
                         type="password" required placeholder='Password' />
                    </div>
                         <button type='submit' className='bg-blue-600 mx-auto mt-2 text-white text-lg font-semibold ml-3 p-2 rounded-md' style={bstyle}>
                         <p>Log In</p>
                         </button>
                    </div>
               </form>
          </div>
   </div>);
}

export default LoginForm;