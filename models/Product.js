import { Schema, model, models } from "mongoose";

const ProductSchema=new Schema({
    title:String,
    description:String,
    price:{type:Number,required:true},

})



export const Product = models.Product || model('Product', ProductSchema);

