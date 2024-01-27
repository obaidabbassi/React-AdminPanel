
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faHome, faUser, faUsers, faChartBar,faCog, faEnvelope, faBell, faPlus  } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import User from "./Pages/User";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sales from "./Pages/Sales";
import Messages from "./Pages/Messages";
import Notifi from "./Pages/Notifi";
import Products from './Pages/Products';


const Menue = () => {

    const [show, setShow] = useState(false);
    const [menue, setMenue] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
      setDarkMode(!darkMode);
      const naviElement = document.querySelector('#navi');
    
      console.log(naviElement+"i m done");
      document.body.classList.toggle('dark-mode', !darkMode);
    
          naviElement.classList.toggle('dark-mode', !darkMode);
        }









  return (

<>

<div className='container-fluid hea'>
<div className='card navi mt-2'id='navi'>
<div className='wrapper'>
  <div className='name'>
  <FontAwesomeIcon icon={faBars}  style={{fontSize:'30px',padding:'20px'}} onClick={()=>setMenue(!menue)}/>
    </div>
    <div className='img'>
      
<img src='user.jpg' className='img-fluid rounded-circle' style={{width:'50px', height:'50px',outline:'none'}} onClick={()=>setShow(!show)}/>

    </div>



</div>
</div>

</div>

<div className={`user ${show?'':'d-none'}`} >

<div className='card m-auto u-f' style={{width:'18rem'}}>


<div className='user-wrapper'>

<div className='img-left'>
<img src='user.jpg' className='img-fluid' style={{width:'50px', outline:'none'}}/>
</div>

<div className='content-right'>
  
<h5>obaidabbassi</h5>
<h6>obaid@gmail.com</h6>

</div>


</div>

<div className='btn-user text-center'>

  <button className='btn btn-outline-dark w-75 m-2 '>Switch to buying</button>

</div>
<div className='jst-border'></div>


<ul className='ul-nav'>

    

    <li>Profile</li>
    
    
   
<li>Refer a Friend</li>
<li>Setttings</li>
<li>Billing and Payments</li>
<div className='jst-border '></div>
<li>English</li>
<li>US$ USD</li>
<div className='jst-border '></div>
<li>Logout</li>
</ul>




 
</div>




</div>

     {/* Left-side menu */}

     <Router>

     <div className={`menue ${menue?'':'d-none'}`} >
      <div className='card cbd' style={{width:'10rem',height:'100vh'}}>
          <ul className='left-menue'>


            <li><FontAwesomeIcon icon={faHome} />    <Link to="/">Home</Link></li>


            <li><FontAwesomeIcon icon={faUser} /> 

            <Link to="/Profile">Profile</Link>
            </li>
            <li><FontAwesomeIcon icon={faUsers} /> 
            
            <Link to="/User">Users</Link>
            
            </li>
            <li><FontAwesomeIcon icon={faChartBar} />
            
            <Link to="/Sales">Sales</Link>
            
            </li>
           
            <li> <FontAwesomeIcon icon={faPlus} />
            
            <Link to="/Products">Products</Link>
            
            </li>

    <li><FontAwesomeIcon icon={faEnvelope} /> 
    
    <Link to="/Messages">Messages</Link>
    
    </li>
    <li><FontAwesomeIcon icon={faBell} />
    <Link to="/Notifi">Notifications</Link>
    </li>

    <li><FontAwesomeIcon icon={faCog} />
            
            <div class="btn-group dropend ">
  <button type="button" class="btn btn-outline-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
     Settings
  </button>
  <ul class="dropdown-menu">


  <div class="form-check form-switch m-2 text-center">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkMode}
        onChange={handleToggle}/>
  <p class="form-check-label p-2" for="flexSwitchCheckDefault">Dark mode</p>
</div>
  </ul>
</div>
            
            </li>






          </ul>
        </div>
        </div>


        <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/Profile"
                            element={<Profile />}
                        ></Route>
                        <Route
                            exact
                            path="/User"
                            element={<User />}
                        ></Route>

                            <Route
                            exact
                            path="/Messages"
                            element={<Messages/>}
                        ></Route>
       <Route
                            exact
                            path="/Products"
                            element={<Products/>}
                        ></Route>




                            <Route
                            exact
                            path="/Sales"
                            element={<Sales/>}
                        ></Route>
      <Route
                            exact
                            path="/Notifi"
                            element={<Notifi/>}
                        ></Route>


                    </Routes>











</Router>




        </>









  );
};

export default Menue;
