import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import InputLabel from '@mui/material/InputLabel';
import '../App.css'


function TransactionForm(props){
    const {froms} = props
    const [formData, setFormData] = useState({
      to: null,
      amount: 0,
    })

    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([])
    const [tos, setTos] = useState('');
    const [amt, setAmt] = useState(0)
    const handleReceiver = (e)=>{
      setTos(e.target.value)
      console.log(tos)
    }
    const handleAmt = (e) =>{
        setAmt(e.target.value)
        // console.log(amt)
     
    }
    useEffect(() => {
      axios.get('/customers').then(res=>{
          setUsers(res.data)
      })
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    setAmt(0)
    setTos('')
    setOpen(true)
    if(typeof tos!='object' || amt<=0){
    
      alert("Invalid user or amount")
    }
    // d=new Date()
    else{
   
      axios.post('/transaction',{
        from: froms._id,
        to:tos._id,
        amount: amt,
        date: Date.now()

      }).then(res=> {
        console.log(res);
      })
      .catch(err=> {
        console.log(err);
      });
    }
    
  }  
    
    return(
      <>
      <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Transaction was successful!
        </Alert>
      </Collapse>
      </Box>
      
        <form onSubmit={handleSubmit} className='forms' style={{display:'flex', justifyContent:'center',flexFlow: 'column wrap',alignContent:'space-around'}}>
        <Typography variant="h5">{froms.name} </Typography>
        <Typography variant="subtitle1">Email: {froms.email} </Typography>
        <Typography variant="subtitle1">Balance: {froms.balance} </Typography>
        <Typography variant="h6">Transaction: </Typography>

        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 182 }}>
        <InputLabel id="demo-simple-select-standard-label">To</InputLabel>
        <Select
          labelId="tos"
          id="tos"
          value={tos}
          onChange={handleReceiver}
          label="tos"
        >
         { users?.map(ele =>{
           if(ele.email!=froms.email){
             return(
              <MenuItem value={ele}>{ele.email}</MenuItem>
             )
           }
         } )}
        </Select>
        </FormControl>
        </Box>
           
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <CurrencyRupeeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
          id="amt"
          label="Amount"
          onChange={handleAmt}
          variant="standard"
          type="number"
        />
        
        </Box>

        <Button variant="contained" type="submit" color="success" style={{marginTop:'20px'}}>
        Proceed
      </Button>


           
        </form>
        
     </>
    )
    
}

export default TransactionForm  
