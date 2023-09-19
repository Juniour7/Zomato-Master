import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    descprition: {type: String, required: true},
    isVeg: {type: Boolean, reqired: true},
    isContainEgg: {type: Boolean, required: true},
    category: {type: String, required: true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    price: {type: Number, default: 150, required: true},
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        }
    ],
    restraunt: {
        type: mongoose.Types.ObjectId,
        ref: "Restraunts",
        required: true
    }
},
{
    timestamps: true
});

export const FoodModel = mongoose.model("Foods", FoodSchema);