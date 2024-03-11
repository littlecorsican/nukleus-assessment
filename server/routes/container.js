const express=require('express')
const router=express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// router.use(bodyParser.raw());
const models = require('../models/index')
const jwt = require('jsonwebtoken');
require('dotenv').config()

// router.use((req, res, next) => {
//     //console.log("req", req)
//     console.log("authenticating!!")
//     if (!req.headers.authentication) {
//         return res.status(401).send({ success: 0, message: "authentication failed" });
//     }
//     const access_token = req.headers.authentication.split(' ')[1];
//     console.log("access_token", access_token, process.env.JWTSECRET)
//     jwt.verify(access_token, process.env.JWTSECRET, (err, user) => {
       
//        console.log("err", err)
//        if (err) return res.status(401).send({ success: 0, message: "authentication failed" });
//        console.log("user", user)
   
//        next()
//     })
 
// })

router.get('/', function (req, res) {
    console.log(models)
    try {
        models.Container.findAll().then((response)=>res.send({  
            success: 1,
            data: response
        }))
    }
    catch(err) {
        res.send({  
            success: 0,
            message: err.toString()
        });
    }
})

router.get('/:id', function (req, res) {
    const id = req.params
    console.log("id",id)
    models.Container.findOne({ where: { id } }).then((response)=>console.log(response))
})

router.get('/', function (req, res) {
    models.Container.findAll().then((response)=>console.log(response))
})

router.put('/:id', async function (req, res) {
    const id = req.params
    console.log(req.body)
    console.log({ ...req.body })
    const result = await models.Container.update({ id, ...req.body })
    console.log(result)
    res.send(result);
})

router.post('/', async function (req, res) {
    
    console.log("1111", req.body)
    console.log("2222", { ...req.body })
    try {
        const result = await models.Container.create({ ...req.body })
        console.log("result", result)
        res.send({  
            success: 1,
            message: "Container created"
        });
    }
    catch(err) {
        res.send({  
            success: 0,
            message: err.toString()
        });
    }
})

module.exports = router