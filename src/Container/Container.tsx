import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import SideNav from '../Components/Header/SideNav';
import Favourites from '../Components/Favourites/Favourites';
import Rejected from '../Components/Rejected/Rejected';
import Suggestions from '../Components/Suggestions/Suggestions';
interface Props extends RouteComponentProps{}
const Container:React.FunctionComponent<Props> = (props)=>{
    return (
        <BrowserRouter>
           <div className='flex bg-orange-100'>
            <SideNav {...props}/>
                <Switch>
                    <Route path='/' exact strict component={Suggestions}/>
                    <Route path='/favourites' exact strict component={Favourites}/>
                    <Route path='/rejected' exact strict component={Rejected}/>
                </Switch>
           </div>
        </BrowserRouter>
    );
}

export default React.memo(Container);