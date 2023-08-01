const  {CityService}=require("../services/index")


const cityService= new CityService();


//POST
//data->req.body
 
const create=async(req,res)=>{
    try{
         const city=await cityService.createCity(req.body) 
         return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            error:{}
         })
    } catch(error){
        console.log(error);


        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error
        })
    }
}
//DELETE -> 
const destroy=async(req,res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id) 
        return res.status(200).json({
           data:response,
           success:true,
           message:"Successfully deleted a city",
           error:{}
        })  
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:error
        })
    }
}

const getAll=async (req,res)=>{
    try{
           const cities=await cityService.getAllCities();
           return res.status(200).json({
            data:cities,
            success:true,
            message:"Successfully fetched all the city",
            error:{}
         })   

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
        })  
    }
}

const get= async (req,res)=>{
    try{
        const response=await cityService.getCity(req.params.id) 
        return res.status(200).json({
           data:response,
           success:true,
           message:"Successfully got the city",
           error:{}
        })   

    }catch(error){
        
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the city",
            err:error
        })
    }
}

//PATCH REQUEST


const update=async(req,res)=>{
    try{
        const response=await cityService.updateCity(req.params.id,req.body) 
        return res.status(200).json({
           data:response,
           success:true,
           message:"Successfully updated the city",
           error:{}
        })   
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
        })
    }

   
  
}

module.exports={
    create,destroy,get,update,getAll

}