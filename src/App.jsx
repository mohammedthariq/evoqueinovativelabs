import React, { useEffect, useState } from 'react'
import {Navbar,Banner,Sidebar,Mainbar,Footer} from './components';
import axios from 'axios';




const App = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter",
        {}, // Body can be an empty object if no data is required in the POST request.
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(response.data); // Assuming the products data is in response.data
    } catch (error) {
      console.error("There was an error fetching the products!", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
 <div className='container'>
 <div className='row'>
     <div className='header p-0'>
       <Navbar/>
       <Banner/>
     </div>
   
      <div className="main mt-34">
       
          <div className="wrapper  ">
       
            <div className='row'>
               <div className="col-md-4  ">
                   <Sidebar/>
               </div>
               <div className="col-md-8  ">
                   <Mainbar products={products}/>
               </div>
              
            </div>
          </div>
   
      </div>
 </div>
 </div>
    
  
   
    <Footer/>
    </>
  ) 
}

export default App
