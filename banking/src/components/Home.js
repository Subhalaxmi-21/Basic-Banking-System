import * as React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

function Home() {

    return (
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:'center',backgroundColor:'#F2F0EB'}}>
         <Card sx={{ maxWidth: '38%', paddingLeft: '2rem' , boxShadow: '15px 8px 15px 5px #BFBDB8', margin:'2rem'}}>
      <CardHeader
        title="TSF Bank"
        subheader="Our Foundation"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="TSF bank"
      />
      <CardContent>
        <Typography paragraph>
        A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans. Lending activities can be directly performed by the bank or indirectly through capital markets.
        </Typography>
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: '38%', paddingLeft: '2rem' , boxShadow: '15px 8px 15px 5px #BFBDB8', margin:'2rem'}}>
      <CardHeader
        title="TSF Bank"
        subheader="Glimpse"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1609429019995-8c40f49535a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="TSF bank"
      />
      <CardContent>
      <Typography paragraph>
          Banks range in size based on where they're located and who they serve—from small, community-based institutions to large commercial banks. According to the FDIC there were just over 4,500 FDIC-insured commercial banks in the United States as of 2019.2﻿ This number includes national banks, state-chartered banks, commercial banks, and other financial institutions. While traditional banks offer both a brick-and-mortar location and an online presence, a new trend in online-only banks emerged in the early 2010s. These banks often offer consumers higher interest rates and lower fees. Convenience, interest rates, and fees are some of the factors that help consumers decide their preferred banks.
          </Typography>
          
          
      </CardContent>
            
    </Card>

    <Card sx={{ maxWidth: '38%', paddingLeft: '2rem' , boxShadow: '15px 8px 15px 5px #BFBDB8', margin:'2rem'}}>
      <CardHeader
        title="Customer Satisfaction"
        subheader="Our Motto"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="TSF bank"
      />
      <CardContent>
          <Typography paragraph>
          Banks also provide credit opportunities for people and corporations. The money you deposit at the bank—short-term cash—is used to lend to others for long-term debt such as car loans, credit cards, mortgages, and other debt vehicles. This process helps create liquidity in the market—which creates money and keeps the supply going.
          Just like any other business, the goal of a bank is to earn a profit for its owners. For most banks, the owners are their shareholders. Banks do this by charging more interest on the loans and other debt they issue to borrowers than what they pay to people who use their savings vehicles. Using a simple example, a bank that pays 1% interest on savings accounts and charges 6% interest for loans earns a gross profit of 5% for its owners.
          </Typography>
          <Typography>
           Hope to satisfy our family!!
          </Typography>
      </CardContent>
            
    </Card>
    </div>
    
    )
}

export default Home
