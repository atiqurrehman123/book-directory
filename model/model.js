const mongoose=require('mongoose')
// Schema for Addressbook
const addressSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    place:{
        type:String,
        require:true
    }
})
// creating coll3ection address
const Address=mongoose.model('Address',addressSchema)
module.exports=Address;