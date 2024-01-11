import React from 'react';
import { Room, Email, Phone } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className='bg-gray-200 h-full object-cover pt-16 md:pt-36 sm:pt-10 '>
      <h1 className='mt-3 mb-7 font-bold text-3xl flex text-center justify-center md:pt-6'><u>Contact US</u></h1>

      <section className='flex flex-col md:flex-row md:space-x-4 mt-16'>
        <div className='md:pr-3 md:w-1/3 pl-10 mt-7'>
          <h3 className='font-extrabold mb-3'><u>BAWANY GADGETS</u></h3>
          <p className='font-bold mt-1'>
            <u>
              <Room /> :{' '}
              <span className='text-indigo-700 gap-4'>R2GM+V7R, Block 5 Clifton, Karachi, Pakistan</span>
            </u>
          </p>
          <p className='font-bold mt-2'>
            <u>
              <Email />  :{' '}
              <span className='text-indigo-700'>umairdigi@gmail.com</span>
            </u>
          </p>
          <p className='font-bold mt-2'>
            <u>
              <Phone /> :{' '}
              <span className='text-indigo-700'>+92 310 8227222</span>
            </u>
          </p>
        </div>

        <div className='md:w-2/3'>
          <iframe
            className='h-96 mb-11 pr-10 w-full object-cover'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3621.072328784445!2d67.0331!3d24.8272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dbc0e467e81%3A0x42275d24d415e92c!2sR2GM%2BV7R%2C%20Block%205%20Clifton%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075600!5e0!3m2!1sen!2s!4v1704536671437!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
