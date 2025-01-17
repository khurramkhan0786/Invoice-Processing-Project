import { useState } from "react";
import { Box, TextField, Typography,Button ,styled} from "@mui/material";
import { saveInvoice } from '../services/api';

const Component = styled(Box)({
  marginTop: 20,
  '& > p':{
    fontSize:26,
    marginBottom:10
  },
  '& > div > div':{
    marginRight:20,
    minWidth:200    
  }
})

const defaultobj = {
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action: 'pending'
}
const AddInvoice = ({setAddInvoice}) => {
    const [invoice , setInvoice] = useState(defaultobj);

    const onValueChange = (e) =>{
        setInvoice({...invoice,[e.target.name]: e.target.value});
    }
    const addNewInvoice = async() =>{
    await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
     setAddInvoice(false);
    
    }
    return(
      
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
              
            <TextField
                variant="standard"
                placeholder="Enter Vendor Name"
                onChange={(e) => onValueChange(e)}
                name="vendor"
                />
                  <TextField
                variant="standard"
                placeholder="Enter Product Name"
                onChange={(e) => onValueChange(e)}
                name="product"
                />

                  <TextField
                variant="standard"
                placeholder="Enter Amount(in Rs)"
                type="number"
                onChange={(e) => onValueChange(e)}
                name="amount"
                />
                  <TextField
                variant="standard"
                placeholder="Enter Date"
                type="date"
                onChange={(e) => onValueChange(e)}
                name="date"
                />
                <Button variant="contained"
                onClick={() => addNewInvoice()}
                >Add Invoice</Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;