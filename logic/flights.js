function Flights() {

    function calculateNumberOfFlights(numOfPassengers, flightCapacity) {
        if (numOfPassengers <= 0 || numOfPassengers % 1 !== 0){
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (flightCapacity <= 0 || flightCapacity % 1 !== 0){
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        if (numOfPassengers % flightCapacity === 0){
            return numOfPassengers / flightCapacity;
        }else {
            return Math.floor(numOfPassengers / flightCapacity) + 1
        }
    }
    
    function checkAircraftRevision(distanceLimit, distances) {
        let totalDistance = 0;
        for (let key in distances){
            totalDistance += distances[key];
        }
        if (totalDistance <= (distanceLimit / 2)){
            return "The revision needs to be done within the next 3 months"
        } else if (totalDistance <= (distanceLimit * .75)){
            return "The revision needs to be done within the next 2 months"
        } else if (totalDistance <= distanceLimit){
            return "The revision needs to be done within the next month"
        } else if (totalDistance > distanceLimit){
            throw new Error("The maximum allowed flight distance should be exceeded")
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}
module.exports = Flights();
