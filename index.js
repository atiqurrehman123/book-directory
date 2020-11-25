const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const Address=require('./model/model')
const app=express()
mongoose.connect('mongodb://localhost:27017/AddressBook',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Databas connected")
}).catch((error)=>{
    console.log("error")
})
app.use(bodyparser.urlencoded({extended:true}))
// adding user into address book for posting data
app.post('/register',(req,res)=>{
    name=req.body.name,
    email=req.body.email,
    phone=req.body.phone,
    place=req.body.place

let newAddress=new Address({
    name: name,
    email: email,
    phone: phone,
    place: place
})
newAddress.save().then((address)=>{
    res.send(address)
}).catch((error)=>{
    console.log(error)
})
})
// getting data
app.get('/:id',(req,res)=>{
    Address.findById(req.params.id,(err,user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log(err)
    })
})
// updating data
app.put('/update/:id',(req,res)=>{
    let address={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        place:req.body.email,

    }
    Address.updateOne({_id:req.params.id},address).then(()=>{
        res.send(address)
    }).catch((error)=>{
        console.log(error)
    })
})
// deleting data 
app.delete('/delete/:id',(req,res)=>{
    Address.deleteOne({_id:req.params.id}).then(()=>{
        res.send("deleted")
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(3000,()=>{
    console.log("server listing on 3000 ")

})
