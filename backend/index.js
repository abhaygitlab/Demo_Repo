const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/hello', (req,res)=>{
  res.json({ message: 'Hello from Node.js backend!' })
})

app.get('/health', (req,res)=>res.send('ok'))

app.listen(port, ()=>console.log(`Backend listening on ${port}`))
