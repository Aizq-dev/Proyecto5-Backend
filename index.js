const express =require('express')
require('./config/db')
const mainRouter= require('./routes')


const app = express()
app.use(express.json())

app.use('/api',mainRouter)
// Controlador de rutas no encontradas
app.use('*', (req, res,next)=>{

    res.status(404).json({data: 'Route Not Found'})
  })
  //Controlador de errores generales de servidor, se activa cuando se ponen 4 argumentos( solo se usa en este caso , si pongo 4 arg en otro middlewere la lio)
  app.use((error,req,res,next)=>{
   console.log('>>>> Server error:',error)
    res.status(500).json({data: 'Internal Server Error'})
  })
  
const PORT = 4001

app.listen(PORT,()=>{
    console.log(`La App corriento en puerto: http://localhost:${PORT}`)
})