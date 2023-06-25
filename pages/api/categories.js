import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";


export default async function handle(req,res){

    const {method}=req;

    await mongooseConnect();
    console.log("API Cat")

    if (method === 'GET') {
        res.json(await Category.find());
      }
    

    if(method==='POST'){
        const {name}=req.body;
        const CategoryDoc=await Category.create({name});
        res.json(CategoryDoc);
    }
}