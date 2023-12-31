import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {
    //Check whether the email exists
    const checkUserByEmail = await UserModel.findOne({email});
    //Check whether the phoneNumber exists
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exists");
    }
    return false;
};


// For signin
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    //Check whether the email exists
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User does not exist");

    //Compare the passwords
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if(!doesPasswordMatch) {
        throw new Error("Invalid Paassword");
    }
    return user;
};


UserSchema.pre("save", function(next){
    const user = this;
    //Password is not modified
    if(!user.isModified("password")) return next();
    //generating bycrypt salt
    bcrypt.genSalt(8,(error,salt) => {
        if(error) return next(error);
        //hashing the password
        bcrypt.hash(user.password, salt, (error,hash) => {
            if(error) return next(error);
            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);