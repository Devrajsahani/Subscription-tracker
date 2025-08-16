import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Subscription name is required'],
        trim: true,
        minLength:2,
        maxLenght:100,
    },
    price:{
        type:Number,
        required:[true,'Subscription price is required'],
        min:[0,'Price must be greater than 0']
    },
    currency:{
        type:String,
        enum:['USD','EUR','GBP'],
        defualt:'RUP'
    },
    Frequency:{
        type:'String',
        enum:['daily','weekly','monthly','yearly']
    },
    Category:{
        type:String,
        enum:['sports','news','entertainment','lifestyle','technology','finance','politics'],
        required:true,
    },
    payementMethod:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        defualt:'active'
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value)=>value<= new Date(),
        message:'Start date must be in the past'
        }
    },
    renewalDate:{
        type:Date,
        required:true,
        validate:{
            validator:function (value){
                return value> this.startDate;
        },
        message:'Renewal date must be after the start date',
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true,
    }
}, {timestamps : true});

// auto calculate renewal date if missing.
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPreiods ={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };

        // calculate renewal date based on the start date and frequency
        this.renewalDate= new Date(this.startDate);
        this.renewalDate= setDate(this.renewalDate.getDate() + renewalPeriods[this.Frequency]);
    }

    // auto-update the status if renewal date has passed
    if(this.renewalDate< new Date()){
        this.status = 'expired';
    }

    next();

})