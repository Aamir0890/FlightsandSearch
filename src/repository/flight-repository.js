const {flights}=require('../models/index');
const {Op}=require('sequelize')

class FlightRepository{
     
   #createFilter(data){
    let filter={}
    if(data.arrivalAirport){
        filter.arrivalAirport=data.arrivalAirport
    }
    if(data.departureAirport){
        filter.departureAirport=data.departureAirport
    }
    let priceFilter=[]
    if(data.minPrice){
       priceFilter.push( {price:{[Op.gte]:data.minPrice}})
    }
    if(data.maxPrice){
       priceFilter.push( {price:{[Op.lte]:data.maxPrice}});
    }
   // Object.assign(filter,{[Op.and]:[{price:{[Op.lte]:data.maxPrice}},{price:{[Op.gte]:data.minPrice}}]})
    Object.assign(filter,{[Op.and]:priceFilter});
      return filter;
   }

    async createFlight(data){
        try{
           const flight=await flights.create(data);
           return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async getFlight(flightId){
        try{
            const flight=await flights.findByPk(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
        
    }

async getAllFlights(filters){
    try{
        const filterObject=this.#createFilter(filters);

       const flight=await flights.findAll({
               where:filterObject
       });
       return flight;
    }catch(error){
        console.log("Something went wrong in the repository layer");
        throw{error};
    }
}
async updateFlight(flightId,data){
    try{
        await flights.update(data,{
            where:{
                id:flightId
            }
        })
        return true;
    }catch(error){
        console.log("Something went wrong in the repository layer");
        throw{error};
    }
   
}

}


module.exports=FlightRepository