import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css"

function Footer() {
    const getYr=()=>{
        return new Date().getFullYear()
    }
    return (
        <div style={{display:"flex", justifyContent:"space-around", color:'#DCEEF2',backgroundColor:'black', alignItems:"center", bottom:'0',left:'0',right:'0'}}>
      <p>
        <h4>Contact us</h4>
        <p>Telephone: 123-123-1234</p>
        <p>Email: email@tsfbank.com</p>
        <p className='copyright'>TSF Bank Copyright &copy; {getYr()}</p>
      </p>
      <p>
        <h4>Follow us on:</h4>
        <Link href="https://www.instagram.com/payaldas217/" target="_blank" style={{color: '#bc2a8d'}} className="icons"><InstagramIcon/></Link>
        &nbsp;&nbsp;
        <Link href="https://www.linkedin.com/in/subhalaxmi-das/" target="_blank" style={{color: '#0e76a8'}} className="icons"><LinkedInIcon/></Link>
        <p></p>
      </p>
      <p>
        <h4>Address</h4>
        <p>21, XYZ complex</p>
        <p>Near JN Road,</p>
        <p>Mumbai, India</p>
      </p>

        </div>
    )
}

export default Footer
