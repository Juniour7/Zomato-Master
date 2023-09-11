import { response } from "express";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, rquired: true},
    password: {type: String},
    address: [{detail: {type: String}, for:{type: String}}],
    phoneNumber: [{type: Number}]
},
{
    timestamps: true
}); 

UserSchema.statics.findEmailAndPhone = async (email, phoneNumber) => {
    //Check whether the email exists
    const checkUserByEmail = await UserModel.findOne({email});
    //Check whether the phoneNumber exists
    const chechUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail || chechUserByPhone) {
        throw new Error("User already exists");
    }
    return false;
};

UserSchema.pre("save", function(next){
    const user = this;
    //Password is not modified
    if(!user.isModified("password")) reututn next();
    //generating bycrypt salt
    bycrypt.genSalt(8,(error,salt) => {
        if(error) rturn next(error);
        //hashing the password
        bycrypt.hash(user.password, salt, (error,hash) => {
            if(error) return next(error);
        })
    })
})

export const UserModel = mongoose.model("Users", UserSchema);