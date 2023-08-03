const {FlightRepository,AirplaneRepository}=require('../repository/index')
const {compareTime}=require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
        async createFlight(data){
            try{
                if(!compareTime(data.arrivalTime,data.departure)){
                    throw {error:'Arrival time cannot be less than departure time'}
                }
              const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
              
              const flight= await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            })
            return flight;
            }catch(error){
                console.log("Something went wrong in the service layer")
                throw(error)
            }
        }
        async getAllFlightData(data){
               try{
            const flights=this.flightRepository.getAllFlights(data);
            return flights;
               }catch(error){
                throw(error);
                console.log("SOmething went wrong in the service layer")
               }
        }
}
module.exports=FlightService


//flight no.
//airplaneId
//departureAirport
//arrivalAirportId
//arrivalTime
//deaprtureTime
//Price
//totalSeats -> airplane
