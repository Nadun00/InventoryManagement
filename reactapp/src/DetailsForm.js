import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./header";


const DetailsForm = ({addDetails, updateDetails, data, isEdit}) => {

const[id,setId] = useState(0);
const[productname,setProductName] = useState('');
const[purpose,setPurpose] = useState('');
const[dose,setDose] = useState('');
const[instruction,setInstruction] = useState('');

const [searchId, setSearchId] = useState('');

//validation
const [errors, setErrors] = useState({
  id: '',
  productname: '',
  purpose: '',
  dose: '',
  instruction: ''
});

   useEffect(() => {
    if (data?.id && data.id !== 0 ) {
      setId(data.id);
      setProductName(data.productname)
      setPurpose(data.purpose);
      setDose(data.dose);
      setInstruction(data.instruction);
    }
   }, [data]);

   //validation
   const validate = () => {
    const newErrors = {};
    if (!id) newErrors.id = 'ID is required';
    if (!productname) newErrors.productname = 'Product Name is required';
    if (!dose) newErrors.dose = 'Dose is required';
    if (!purpose) newErrors.purpose = 'Purpose is required';
    if (!instruction) newErrors.instruction = 'Instruction is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      if (isEdit) {
        updateDetails({ id, productname, dose, purpose, instruction });
      } else {
        addDetails({ id, productname, dose, purpose, instruction });
      }
    }
  };
  //search
  const handleSearch = async () => {
    try {
      //new
      console.log('Searching for details with ID:', searchId);
      const response = await axios.get(`http://localhost:3002/api/details/${searchId}`);
      const data = response.data;
      //new
      console.log('Received data:', data);
      setId(data.id);
      setProductName(data.productname);
      setPurpose(data.purpose);
      setDose(data.dose);
      setInstruction(data.instruction);
    } catch (error) {
      console.error('Error fetching details', error);
      setErrors({ ...errors, id: 'Detail not found' });
    }
  };


   return(
<div>
      <Header /> {/* Include the Header component */}
      

     <Grid
       container
       spacing={3}
       sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display: 'block',
       }}
     >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{ color: '#000000', fontSize: '2rem', fontWeight: 'bold'}}>Details From </Typography>
        </Grid>

      
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
          <Typography
            component={'label'}
            htmlFor="searchId"
            sx={{
              color: '#000000',
              marginRight: '20px',
              fontSize: '16px',
              width: '100px',
              display: 'block',
            }}
          >
            Search by ID
          </Typography>
          <Input
            type="text"
            id="searchId"
            name="searchId"
            sx={{ width: '400px' }}
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
          />
          <Button onClick={handleSearch} sx={{ marginLeft: '10px' }}>
            Search
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
            <Typography
              component={'lebal'}
              htmlFor= "id"
              sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
              }}
            >
                ID
            </Typography>
            
            <div>
                <Input 
                  type="number"
                  id="id"
                  name="id"
                  sx={{ width: '400px'}}
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
                {errors.id && <Typography color="error">{errors.id}</Typography>}
            </div>    
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
            <Typography
              component={'lebal'}
              htmlFor= "id"
              sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
              }}
            >
                Product Name
            </Typography>
            
            <div>
                <Input 
                  type="text"
                  id="productname"
                  name="productname"
                  sx={{ width: '400px'}}
                  value={productname}
                  onChange={e => setProductName(e.target.value)}
                />
                {errors.productname && <Typography color="error">{errors.productname}</Typography>}
            </div>    
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
            <Typography
              component={'lebal'}
              htmlFor= "id"
              sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
              }}
            >
                Dose
            </Typography>
            <div>
                <Input 
                  type="text"
                  id="dose"
                  name="dose"
                  sx={{ width: '400px'}}
                  value={dose}
                  onChange={e => setDose(e.target.value)}
                />
                {errors.dose && <Typography color="error">{errors.dose}</Typography>}
            </div>    
        </Grid>


        <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
            <Typography
              component={'lebal'}
              htmlFor= "id"
              sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
              }}
            >
                Purpose
            </Typography>
            <div>
                <Input 
                  type="text"
                  id="purpose"
                  name="purpose"
                  sx={{ width: '400px'}}
                  value={purpose}
                  onChange={e => setPurpose(e.target.value)}
                />
                {errors.purpose && <Typography color="error">{errors.purpose}</Typography>}
           </div>     
        </Grid>


        <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
            <Typography
              component={'lebal'}
              htmlFor= "id"
              sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
              }}
            >
                Instruction
            </Typography>
            <div>
                <Input 
                  type="text"
                  id="instruction"
                  name="instruction"
                  sx={{ width: '400px'}}
                  value={instruction}
                  onChange={e => setInstruction(e.target.value)}
                />
                {errors.instruction && <Typography color="error">{errors.instruction}</Typography>}
            </div>    
        </Grid>

        <Button
          sx={{
            margin:'auto',
            marginBottom: '20px',
            backgroundColor: '#00c6e6',
            color: '#000000',
            marginLeft: '15px',
            marginTop: '20px',
            '&:hover': {
                opacity: '0.7',
                backgroundColor: '#00c6e6'
            }
          }} 
          onClick={handleSubmit}
         // onClick={() => isEdit ? updateDetails({id, productname, dose, purpose, instruction}) : addDetails({id, productname, dose, purpose, instruction})}
        >
            {
              isEdit ? 'Update' : 'Submit'
            }
        </Button>
     </Grid>
    
     </div>
   );
}

export default DetailsForm;
