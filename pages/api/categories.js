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
        
        const {name,parentCategory}=req.body;
        console.log("Parent");
        console.log(parentCategory);

        console.log("name",name);

        const categoryDoc=await Category.create({
            name,
            parent:parentCategory ,
        });
        console.log(categoryDoc);
        res.json(categoryDoc);
    }   
}