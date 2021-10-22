const express = require('express')
const math= require('mathjs')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.post('/numeros/sumatoria', (req, res) => { 
  const suma = math.sum(req.body.numeros)
    var result = {
      resultado: suma
    }
    res.send(result)
  })
  
  app.post('/numeros/productoria', (req, res) => { 
    const product = math.prod(req.body.numeros)
      var result = {
        resultado: product
      }
      res.send(result)
    })
  
 app.post('/numeros/extremos', (req, res) => { 
    const minimo = math.min(req.body.numeros)
    const maximo = math.max(req.body.numeros)
      var result = {
        resultado: {minimo, maximo}
      }  
      res.send(result)
     })

 app.post('/numeros/resta', (req, res) => { 
    const resta = math.subtract(req.body.numeroA, req.body.numeroB)
     var result = {
       resultado: resta
      }
      res.send(result)
      })

 app.post('/numeros/division', (req, res) => { 
    const dividir = math.divide(req.body.numeroA, req.body.numeroB)
      var result = {
        resultado: dividir
         } 
         res.send(result)
       })

  app.post('/matrices/suma', (req, res) => { 
    const suma = math.add(req.body.matrizA, req.body.matrizB)
      var result = {
        resultado: suma
    }
    res.send(result)
      })
      
  app.post('/matrices/multiplicacion', (req, res) => { 
    const multiplicação = math.multiply(req.body.matrizA, req.body.matrizB)      
       var result = {
         resultado: multiplicação
      }
      res.send(result)
      
    })

 app.post('/matrices/determinante', (req, res) => { 
     const determinante = math.det(req.body.matriz)        
        var result = {
          resultado: determinante
          }
          res.send(result)   
        })

  app.listen(port, () => {
    console.log(`Escuchando en puerto: ${port}`)
  })
  