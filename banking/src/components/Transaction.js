import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Row(props){
    const {one} =props
    const handleDate = (dates)=>{
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
            
          }
        return new Date(dates).toLocaleString('en-US', options)
    }
    return(
    <>
    <TableRow>

    <TableCell>
    {one._id}
    </TableCell>
    <TableCell align="right">{one.from.email}</TableCell>
    <TableCell align="right">{one.to.email}</TableCell>
    <TableCell align="right">{one.amount}</TableCell>
    <TableCell align="right">{handleDate(one.date)}</TableCell>
    </TableRow>
 </>
    )
}


function Transaction() {
   const [transaction, setTransaction] = useState(null)
    

    useEffect(() => {
        axios.get('/transaction').then(res=>{
            setTransaction(res.data)
        })
    }, [])
    return (
        
    
        <div style={{backgroundColor:"#F2F2F2",color:"#2E038C"}}>
            <TableContainer style={{maxWidth:'70%',margin:'auto'}}>
      <Table >
        <TableHead>
          <TableRow>

            {/* <TableCell >Customers</TableCell> */}
            <TableCell>Transaction Id</TableCell>
            <TableCell align="right">Sender</TableCell>
            <TableCell align="right">Receiver</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        
        {transaction?.map(one => 
                <Row key={one._id} one={one}/>
                )}
        
        </TableBody>
        </Table>
        </TableContainer>
            
            
        </div>
    )
}

export default Transaction
