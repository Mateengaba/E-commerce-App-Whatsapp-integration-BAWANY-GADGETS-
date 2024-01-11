import { Button, Rating } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../Firebaseconfg';
import { IconButton } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const Productsdetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const navigate = useNavigate();

  // const handleWhatsAppClick = () => {
  //   if (!product) {
  //     console.error('Product data is not available.');
  //     return;
  //   }

  //   const phoneNumber = '+923108227222'; // Replace with your actual phone number
  //   const message = `Check out this product:\n${product.title} - Rs.${product.productPrice}/-\n${product.productDesc}`;

  //   // WhatsApp URL with the phone number and encoded message
  //   const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

  //   console.log(whatsappUrl); // Log the URL to the console for debugging

  //   // Open the WhatsApp URL in a new tab
  //   window.open(whatsappUrl, '_blank');
  // };

  const handleWhatsAppClick = () => {
    if (!product) {
      console.error('Product data is not available.');
      return;
    }

    const phoneNumber = '+923108227222'; // Apne asal phone number se replace karen
    const message = `Check out this product:\n${product.title} - Rs.${product.productPrice}/-\n${product.productDesc}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

    // Device type check
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

     // Redirect accordingly
  if (isMobile) {
    // For mobile devices, redirect to WhatsApp URL
    window.location.href = whatsappUrl;
  } else {
    // For desktop, use window.open
    window.open(whatsappUrl, '_blank');
  }
};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <div className="bg-white mt-16">
          <div className="pt-4 ">
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 '>
              {/* Image gallery */}
              <div className="flex flex-col items-center">
                <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] mt-10">
                  <img
                    src={product.imageUrl}
                    alt={product.imageUrl}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap space-x-5 justify-center">
                  {Array.isArray(product.images) && product.images.map((item, index) => (
                    <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-60 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                <div className="lg:col-span-2">
                  <h1 className="text-lg lg:text-xl font-semibold text-gray-900 pt-6">{product.title}</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>

                  <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                    <p className='font-semibold'>Rs:{product.productPrice}/=</p>
                    <p className='opacity-50 line-through'></p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-6">
                    <div className='flex items-center space-x-3'>
                      <Rating name="read-only" value={4.5} readOnly />
                      <p className='opacity-50 text-sm'>5555 Rating</p>
                      <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-600'>3870 Review</p>
                    </div>
                  </div>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-black">{product.productDesc}</p>
                    </div>
                  </div>

                  {/* Product Code */}

                  <div>
                    <div className='mt-5'>
                      <p className="text-black font-semibold">Product Code:<span className='text-gray-600'> {product.number}</span></p>
                    </div>
                  </div>




                  <div className="mt-5">
                    <h3 className="text-sm font-semibold text-gray-600">For Order & Details: <span className=' text-indigo-600'> Click WhatsApp</span></h3>

                    <Link to={'/'} onClick={scrollToTop}>
                      <Button variant='contained' sx={{ px: "2rem", py: "1rem", bgcolor: "#f47920", '&:hover': { bgcolor: "orange" }, mt: "1rem", marginRight: "1rem" }}>
                        Back to Home
                      </Button></Link>


                    <IconButton variant='Outlined' sx={{
                      px: "1rem", py: "1rem",
                      bgcolor: "#25D366", '&:hover': { bgcolor: "#075E54" }, mt: "1rem",
                    }} onClick={handleWhatsAppClick}>
                      <WhatsApp />
                    </IconButton>

                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      )}
    </>
  );
}

export default Productsdetail;
