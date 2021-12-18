import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../App.css'
import TransactionForm from './TransactionForm';



function Row(props){
    const {one} =props
    const [open, setOpen] = React.useState(false);
    return(
    <>
    <TableRow>
    <TableCell>
    <IconButton
        aria-label="expand row"
        size="small"
        onClick={() => setOpen(!open)}
    >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
    </TableCell>

    <TableCell>
    {one.name}
    </TableCell>
    <TableCell align="right">{one.email}</TableCell>
    <TableCell align="right">{one.balance}</TableCell>
    </TableRow>
    <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography variant="h5" gutterBottom component="div">
          Do a Transaction:
        </Typography>
        <Typography variant="body1">
        <TransactionForm froms={one} />
        </Typography>
        
      </Box>
    </Collapse>
  </TableCell>
</TableRow>
 </>
    )
}

function Customer() {
    const [user, setUser] = useState([])
    

    useEffect(() => {
        axios.get('/customers').then(res=>{
            setUser(res.data)
        })
    }, [])
    return (
        <div style={{backgroundColor:"#F2F2F2",color:"#2E038C"}}>
            <TableContainer style={{maxWidth:'70%',margin:'auto'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell />
            {/* <TableCell >Customers</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        
        {user?.map(one => 
                <Row key={one.name} one={one}/>
                )}
        
        </TableBody>
        </Table>
        </TableContainer>
            
            
        </div>
    )
}

export default Customer

