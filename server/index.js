const express=require("express")
const mongoose=require("mongoose")
const path = require('path')
const dotenv = require('dotenv').config()


const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "banking","build")))

try {
    // console.log("ENtered try")
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // console.log("verified")
  } catch(err) {
    console.log("hi")
    console.log('ERROR')
    
  }

app.use('/api/customers', require('./routes/customer'))
app.use('/api/transaction', require('./routes/Transaction'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../banking', 'public', 'index.html'))
  })
  
  const PORT = 3001
  app.listen(PORT, () => console.log(`Server started at port ${PORT}`))