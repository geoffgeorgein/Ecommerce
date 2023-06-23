import { Category } from "@/models/Category";

export default async function handle(req,res){

    const {method}=req;
    console.log("API Cat")

    if(method==='POST'){
        const {name}=req.body;
        const CategoryDoc=await Category.create({name});
        res.json(CategoryDoc);
    }
}