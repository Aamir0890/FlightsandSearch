const {City}= require("../models/index")


class CityRepository{

    async creatCity({name}){
            try{
            const city=await City.create({name});
            return city;
            }catch(error){
                   console.log("Something went wrong in the repository layer");
                     throw(error)
            }
    }

    async deleteCity(cityId){
              try{
             await City.destroy({
                where:{
                    id:cityId
                }
             })
             return true;
              }catch(error){
                console.log("Something went wrong in the repository layer");
                throw(error)
              }
    }
    
    async updateCity(cityId,data){
           try{
           const city=await City.update(data,{
            where:{
                id:cityId
            }
           })
           //for getting the updated data we can use the below approach
          // const city=await City.findByPk(cityId);
          // city.name=data.name;
          // await city.save();
           return city;
           }catch(error){
            console.log("Something went wrong in the repository layer");
                throw(error);
           }
    }
    
    async getCity(cityId){
             try{
               const city= await City.findOne(cityId);
               return city;
             }catch(error){
                console.log("Something went wrong in the repository layer for get request");
                throw(error);
             }
    }    
}
      

module.exports=CityRepository;


