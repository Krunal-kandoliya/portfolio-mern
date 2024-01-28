const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path')
const portfoliorouter=require('./routes/portfolioRoute')

dotenv.config()

const app=express()


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'./portfolio')))

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'./portfolio/index.html'))
})

app.use('/api/v1/portfolio',portfoliorouter)

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server Listening On Port ${PORT}`)
})