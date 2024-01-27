import React from "react";
import '../Pages/Products.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle , faEye} from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  return <>
  <div className="container "style={{position:'absolute',top:'100px', left:'200px'}}>

<div className="row text-center m-3">


    
  <div className="col-6">  <div className="card "><FontAwesomeIcon icon={faPlusCircle} style={{fontSize:'25px'}} />Add Products</div></div>


  <div className="col-6">  <div className="card"><FontAwesomeIcon icon={ faEye} style={{fontSize:'25px'}} />View Products</div></div>

</div>


  </div>
  
  
  </>;
};

export default Products;
