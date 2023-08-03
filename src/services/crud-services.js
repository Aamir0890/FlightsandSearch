const CrudRepository = require("../repository/crud-repository");

class CrudService{
    constructor(repository){
        this.repository=repository
    }
      async create(data){
        try{
         const response=await this.repository.create(data)
         return response;
        }catch(error){
               console.log("Something went wrong on crud service")
        }
      }
      async destroy(id){
        try{
            const response= await this.repository.destroy(id);
            return response
        }catch(error){
            console.log("Something went wrong on crud service")
        }
      }
      async get(id){
        try{
            const response=await this.repository.get(id);
            return response;
        }catch(error){
            console.log("Something went wrong on crud service")
        }
      }
      async getAll(){
        try{
          const response=await this.repository.getAll();
          
        }catch(error){
            console.log("Something went wrong on crud service")
        }
      }
      async update(id,data){
        try{
     const response=await this.repository.update(id,data);
     return response;
        }catch(error){
            console.log("Something went wrong on crud service")
        }
      }
}

module.exports=CrudService