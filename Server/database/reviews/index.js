import mongoose, { Types } from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref: "Foods"},
    restraunt: {type: mongoose.Types.ObjectId, ref: "Restraunts"},
    user: {type: mongoose.Types.ObjectId, ref: "Users"},
    rating: {type: Number, required: true},
    reviewText: {type: String, required: true},
    isRestrauntReview: Boolean,
    isFoodReview: Boolean,
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Images"
        }
    ]
},
{
    timestamps: true
});

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);