
// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';



// const Buttons = () => {



//   const [value, setValue] = React.useState('female');
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };




//   return (
//     <>
      
//       <FormControl>
//       <FormLabel  id="demo-controlled-radio-buttons-group">Select Products</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="All" />
//         <FormControlLabel value="Bangles" control={<Radio />} label="Bangles" />
//         <FormControlLabel value="Earrings" control={<Radio />} label="Earrings" />
//         <FormControlLabel value="Rings" control={<Radio />} label="Rings" />
//         <FormControlLabel value="Necklaces" control={<Radio />} label="Necklaces" />
//         <FormControlLabel value="Chains" control={<Radio />} label="Chains" />
//         <FormControlLabel value="Bracelets" control={<Radio />} label="Bracelets" />
//         <FormControlLabel value="Bands" control={<Radio />} label="Bands" />
//         <FormControlLabel value="Pendants" control={<Radio />} label="Pendants" />
//         <FormControlLabel value="Anklet" control={<Radio />} label="Anklet" />






//       </RadioGroup>
//     </FormControl>


//     </>
//   );
// }

// export default Buttons;




import * as React from 'react';
import { collection } from 'firebase/firestore';
import { db } from '../Firebaseconfg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Buttons = () => {
  const [value, setValue] = React.useState('All');

  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Define categories for radio buttons
  const categories = [
    'All',
    'Bangles',
    'Earrings',
    'Rings',
    'Necklaces',
    'Chains',
    'Bracelets',
    'Bands',
    'Pendants',
    'Anklet',
  ];

  const buttons = categories.map((cat, index) => (
    <FormControlLabel key={index} value={cat} control={<Radio />} label={cat} />
  ));

  return (
    <>
      <FormControl>
        <FormLabel>Select Products</FormLabel>
        <RadioGroup
          aria-label="category-radio-buttons-group"
          name="category-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {buttons}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Buttons;