function Passengers() {

    function checkFlightCapacity(flightCapacity, passengerNums) {
        let totalPassengers = 0;
        for (let key in passengerNums){
            totalPassengers += passengerNums[key];
        }
        if (totalPassengers <= flightCapacity){
            return totalPassengers;
        }else if (totalPassengers > flightCapacity){
            throw new Error("The capacity of the flight is exceeded")
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers , numberOfFlights , businessSeatsPerFlight , economySeatsPerFlight) {
        let distributedPassengers = new Object();
        distributedPassengers.vipPassengersWithBusinessSeats = 0;
        distributedPassengers.vipPassengersWithEconomySeats = 0;
        distributedPassengers.regularPassengersWithBusinessSeats = 0;
        distributedPassengers.regularPassengersWithEconomySeats = 0;
        let remainingVIPSeats = businessSeatsPerFlight * numberOfFlights;
        let remainingVIPPassengers = vipPassengers;
        let remainingEconomySeats = economySeatsPerFlight * numberOfFlights;
        let remainingRegularPassengers = regularPassengers;
        for (let index = remainingVIPSeats; index > 0; index--) {
            if (remainingVIPPassengers > 0){
                distributedPassengers.vipPassengersWithBusinessSeats++
                remainingVIPSeats--
                remainingVIPPassengers--
            } else{
                break
            }
        }
        for (let index = remainingVIPPassengers; index > 0; index--) {
            if (remainingEconomySeats > 0) {
                distributedPassengers.vipPassengersWithEconomySeats++
                remainingVIPPassengers--
                remainingEconomySeats--
            } else {
                break
            }
        }
        for (let index = remainingVIPSeats; index > 0 ; index--) {
            if (remainingRegularPassengers > 0){
                distributedPassengers.regularPassengersWithBusinessSeats++
                remainingVIPSeats--
                remainingRegularPassengers--
            } else{
                break
            }
        }
        for (let index = remainingEconomySeats; index > 0; index--) {
            if (remainingRegularPassengers > 0){
                distributedPassengers.regularPassengersWithEconomySeats++
                remainingEconomySeats--
                remainingRegularPassengers--
            } else{
                break
            }
        }
        return distributedPassengers;
    }
    
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();