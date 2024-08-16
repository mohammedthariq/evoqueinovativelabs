import React, { useState } from "react";
import "./Mainbar.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";


const Mainbar = ({products}) => {
  
  // console.log(products);
  
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4; // Adjust this based on your preference
    const totalCards = 20; // Total number of cards (should be dynamic based on your data)
  
    // Mock data for Cards
    const cards = Array.from({ length: totalCards }, (_, index) => <Cards key={index} />);
  
    // Get current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>

     <div className="row justify-content-end main-search">

         <div class="dropdown ">

           <button
             class="btn  dropdown-toggle"
             type="button"
             id="dropdownMenuButton1"
             data-bs-toggle="dropdown"
             aria-expanded="false"
           >
            Newly added
           </button>
           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li>
               <a class="dropdown-item" href="#">
                 Action
               </a>
             </li>
             <li>
               <a class="dropdown-item" href="#">
                 Another action
               </a>
             </li>
             <li>
               <a class="dropdown-item" href="#">
                 Something else here
               </a>
             </li>
           </ul>
         </div>
     {/* <span className="dd-span">Sort by:</span> */}

     </div>


      <div className="row main-section ">
        {products?.filter_data?.map((product) => (
          <div className="col-md-6 " key={product.id} >
            <Cards product={product} />
          </div>
        ))}
         
       

      </div>

      <Pagination
        totalCards={totalCards}
        cardsPerPage={cardsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />


    </>
  );
};

export default Mainbar;
