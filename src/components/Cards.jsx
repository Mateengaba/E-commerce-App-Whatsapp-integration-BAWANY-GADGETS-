


import React, { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './Cards.css';
import { db } from '../Firebaseconfg';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from '@mui/material';

const Cards = () => {
  const [allProducts, setAllProducts] = useState([]);  // State jo Firebase se aane wale products ko store karega.
  const [selectedCategory, setSelectedCategory] = useState('All');  //State jo currently selected category ko store karega.
  const [value, setValue] = useState('all');  //State jo radio buttons ke values ko store karega.
  const [limit, setLimit] = useState(9); //State jo initially 9 hai aur View More button ke click par badhta hai.

  // Firebase se data
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {     //onSnapshot Firebase Firestore method ka istemal karte hue, 'products' collection se data fetch kiya jata hai.
      const tempArr = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));  //tempArr mein har document ki data aur uska id ek object mein store hota hai.
      setAllProducts(tempArr); //setAllProducts se state ko update kiya jata hai.
    });

    return () => unsub();
  }, []);


  //AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


//Jab radio button change hota hai toh ye function call hota hai, aur selected category state ko update karta hai.
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setValue(selectedCategory);
    setSelectedCategory(selectedCategory);
  };

//ViewMore button function/ View More button par click hone par limit state ko 6 se badha diya jata hai.
  const handleViewMore = () => {
    setLimit(limit + 6);
  };


  return (
    <section className="text-gray-600 body-font grandparent">


      <h1 className="sm:text-3xl mt-24 flex justify-center text-2xl font-bold title-font mb-2 text-gray-900">Let's Shop</h1> <hr />

      <div className='parent'>
        <div className='child'>
          <div className='btnmain'>
            {/* Radio button start */}
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Select Products</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="All" control={<Radio />} onClick={() => setSelectedCategory('All')} label="All" />
                <FormControlLabel value="Headphone" control={<Radio />} onClick={() => setSelectedCategory('Headphone')} label="Headphone" />
                <FormControlLabel value="Earbuds" control={<Radio />} onClick={() => setSelectedCategory('Earbuds')} label="Earbuds" />
                <FormControlLabel value="Handfree" control={<Radio />} onClick={() => setSelectedCategory('Handfree')} label="Handfree" />
                <FormControlLabel value="Power Bank" control={<Radio />} onClick={() => setSelectedCategory('Power Bank')} label="Power Bank" />
                <FormControlLabel value="Fast Charger" control={<Radio />} onClick={() => setSelectedCategory('Fast Charger')} label="Fast Charger" />
                <FormControlLabel value="Cables" control={<Radio />} onClick={() => setSelectedCategory('Cables')} label="Cables" />
                <FormControlLabel value="Speaker" control={<Radio />} onClick={() => setSelectedCategory('Speaker')} label="Speaker" />                
                <FormControlLabel value="Battery" control={<Radio />} onClick={() => setSelectedCategory('Battery')} label="Battery" />
                <FormControlLabel value="Smart watch" control={<Radio />} onClick={() => setSelectedCategory('Smart watch')} label="Smart Watches" />
                <FormControlLabel value="LCDs" control={<Radio />} onClick={() => setSelectedCategory('LCDs')} label="LCDs" />
                <FormControlLabel value="Accessories" control={<Radio />} onClick={() => setSelectedCategory('Accessories')} label="Accessories" />
              </RadioGroup>
            </FormControl>
            {/* Radio button End */}
          </div>

          {/* Product card start */}
          <div className="productsCard text-center">
            {allProducts
              .filter(product => selectedCategory === 'All' || product.Category === selectedCategory)
              .slice(0, limit) // Sirf pehle 'limit' number of cards dikhai jayen
              .map((product) => (
                <div data-aos="flip-left" key={product.id} className="productCard">
                  <img src={product.imageUrl} width='250px' height='250px' alt="pic" />
                  <h2 className="productTitle">{product.title.length > 19 ? product.title.slice(0, 19) + '...' : product.title}</h2>
                  <h4 className="productPrice">Rs:{product.productPrice}/=</h4>
                  <p className="productDescription">
                    Description: {product.productDesc.length > 50 ? product.productDesc.slice(0, 50) + '...' : product.productDesc}
                  </p>
                  {/* Link to the product detail page */}
                  <Link onClick={scrollToTop} to={`/Productsdetail/${product.id}`} className='viewBtn'>View Details</Link>
                </div>
              ))}
          </div>
          {/* Product card End */}



        </div>

        {/* View More Button */}
        {limit >= allProducts.length ? (
          ""
        ) : (
          <div >
            <Button
              onClick={handleViewMore}
              variant='contained'
              sx={{
                
                px: "1.5rem",
                py: ".5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: " #555",
                '&:hover': { bgcolor: "#f47920" },
                mt: "3rem",

                mx: "auto", // Set both left and right margins to "auto"
              }}
            >                View More
            </Button>
          </div>
        )}
      </div>
    </section >
  );
}

export default Cards;
