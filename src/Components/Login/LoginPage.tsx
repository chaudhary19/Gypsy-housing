import React, { useState } from 'react';
import LoginForm from './LoginForm';
import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps{}

const LoginPage:React.FunctionComponent<Props> = (props)=>{
    const [visibility,setVisibility] = useState(false);
    const visHandler=()=>{
        setVisibility(prevState=>!prevState);
    }
    const forStyle={
        lineHeight : "40px"
    }
    const forgStyle={
        width : "20rem"
    }
    const style={
        background : "url('data:image/jpeg;base64,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')",
        backgroundSize: "cover"
    }
    // const textStyle ={
    //     letterSpacing: '3px'
    // }
    let forground=null;
    if(!visibility)
    {
        forground=(
            <div className='mx-56' style={forgStyle}>
                <h1 className='text-4xl font-extrabold h-12 text-center mx-auto my-24' style={forStyle}>Welcome To Gypsy Housing</h1>

                <img className='h-12 w-12 mx-auto'
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook"/>

                <p className='mt-4 text-center text-gray-600 text-lg font-medium'>Login with your Facebook account to preview the best available suggestions for your roommate</p>

                <button className='ml-8 w-64 bg-blue-600 mt-16 pl-4 pr-4 pt-2 pb-2 text-white text-xl font-semibold rounded-lg flex items-center'
                onClick={visHandler}>
                
                    <img className='h-6 w-6 ml-2' 
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="fi"/>    
                    <p className='ml-2'>Login to Facebook</p>

                </button>
            </div>
        );
    }
    let background=(visibility)?<LoginForm {...props} />:null;
    return (
    <div className='flex'>
        <div className='w-1/2 h-screen' style={style}>
            <div className='ml-8 my-auto h-screen flex flex-col justify-center'>
                <p className='font-extrabold text-black text-6xl'>GYPSY</p>
                <p className='font-extrabold text-black text-6xl'>HOUSING</p>
            </div>
        </div>
        <div>
            {forground}
            {background}
        </div>
    </div>);
}

export default LoginPage;