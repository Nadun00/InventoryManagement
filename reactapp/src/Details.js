import { Box } from "@mui/material";
import DetailsForm from "./DetailsForm";
import DetailsTable from "./DetailsTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
    const [details, setDetails] = useState([]);
 //   const [submitted, setSubmitted] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState({});
    const[isEdit, setIsEdit] = useState(false);

    useEffect(() => {
      getDetails();
    }, []);
    
    const getDetails = () => {
      Axios.get('http://localhost:3002/api/details')
            .then(response  => {
              setDetails(response?.data?.response || []);
            })
            .catch(error => {
              console.error("Axios Error :", error);
            });
    }

    const addDetails = (data) => {
     // setSubmitted(true);

      const payload= {
        id: data.id,
        productname: data.productname,
        dose: data.dose,
        purpose: data.purpose,
        instruction: data.instruction,
      }
      console.log("11", payload)
      Axios.post('http://localhost:3002/api/createdetail', payload)
      .then((response) => {
        console.log("22", response)
        getDetails();
    //    setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error :", error);
      });

    }

    const updateDetails = (data) => {
   //   setSubmitted(true);

      const payload= {
        id: data.id,
        productname: data.productname,
        dose: data.dose,
        purpose: data.purpose,
        instructions: data.instructions,
      }

      Axios.post('http://localhost:3002/api/updatedetail', payload)
      .then((response) => {
        console.log("33", response)
        getDetails();
      //  setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error :", error);
      });
    }

    const deleteDetail = (data) => {
  
      Axios.post('http://localhost:3002/api/deletedetail', data)
      .then((response) => {
        console.log("33", response)
        getDetails();
        
      })
      .catch(error => {
        console.error("Axios Error :", error);
      });
    }

    return(
    <Box
      sx={{
        width: 'calc(100% - 100px)',
        margin: 'auto',
        marginTop: '100px',
      }}     
    >
      <DetailsForm
          addDetails={addDetails}
          updateDetails={updateDetails}
          data={selectedDetail}
          isEdit={isEdit}
      />
      <DetailsTable 
      rows={details} 
      selectedDetail={data => {
      setSelectedDetail(data);
      setIsEdit(true);
      }}
      deleteDetail={data => window.confirm('Are you sure?') && deleteDetail(data)}
      />
    </Box>
    );
  }

export default Details;