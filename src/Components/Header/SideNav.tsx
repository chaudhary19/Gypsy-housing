import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import CurrentUser from './CurrentUser';
import './SideNavStyles.css';
import Navigations from './Navigations';

interface Props extends RouteComponentProps{}


const SideNav:React.FunctionComponent<Props> =(props)=>{
    const [sideBar,setSideBar]=useState(true);
    const handleSideBar=()=>{
        setSideBar(prev=>!prev);
    }
   return( 
       <div>
             <div className='fixed'>
                <div className='navbar bg-orange-100 static'>
                    <NavLink to='#'>
                    <FaIcons.FaBars onClick={handleSideBar} className='ml-6'/>
                    </NavLink>
                    <div className='ml-10 mt-4 flex flex-col justify-center'>
                        <p className='text-4xl font-extrabold text-blue-400'>Gypsy</p>
                        <p className="font-mono text-blue-300 font-bold transform -translate-y-2 translate-x-1">Housing</p>
                    </div>
                </div>
                <div className={!sideBar ?'nav-menu':'nav-menu active'}>
                <Navigations/>
                <div className='mt-56'>
                    <CurrentUser {...props}/>
                </div>
                </div>
            </div>
       </div>
   );
}

export default SideNav;