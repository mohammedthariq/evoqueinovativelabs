
import axios from 'axios';
import { Navbar, Banner, Sidebar, Mainbar, Footer } from './components';
import { useEffect, useState } from 'react';





const App = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(4);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/products.json'); 
        setProducts(response.data);
       
        
      } catch (error) {
        console.error('Error fetching local JSON file:', error);
      }
    };
 
    fetchData();
  }, []);



  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.applicationType === category : true)
    )
    .sort((a, b) => {
      if (sort === 'newly-added') return new Date(b.addedDate) - new Date(a.addedDate);
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    })
    ;
 
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='header p-0'>
            <Navbar />
            <Banner />
          </div>
          <div className="main mt-34">
            <div className="wrapper">
              <div className='row'>
                <div className="col-md-4">
                <Sidebar search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
                </div>
                <div className="col-md-8">
                    <Mainbar
                        products={filteredProducts}
                        page={page}
                        setPage={setPage}
                        perPage={perPage}
                        sort={sort}
                        setSort={setSort}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />


    </>
  );
};

export default App;
