"use strict"
function Util() {

    function calculateTotalDistributedPassengers(distributedPassengers) {
        let totalPassengers = 0;
        for (let value in distributedPassengers){
            totalPassengers += distributedPassengers[value];
        }
        return totalPassengers
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
        let totalPassengers = 0;
        for (let key in passengersArray){
            totalPassengers += passengersArray[key];
        }
        return totalPassengers
    }

    function checkInput(input) {
        if (input === ""){
            throw new Error("The input should not be empty")
        } else if (isNaN(input)){
            throw new Error("The input should be a number")
        } 
    }

    function calculateTotalDistance(distances) {
      let distanceArray = Array.from(distances)
      let totalDistance =0;
      for (let index = 0; index < distanceArray.length; index++) {
        const element = distanceArray[index];
        if (element > 0) {
          totalDistance += element
        }
      }
      return totalDistance
    }

    function calculateBonusPoints(businessSeatDistances, economySeatDistances, businessBonusPercent, economyBonusPercent) {
      let businessPoints = calculateTotalDistance(businessSeatDistances) * (businessBonusPercent/100)
      let economyPoints = calculateTotalDistance(economySeatDistances) * (economyBonusPercent/100)
      let totalBonusPoints = businessPoints + economyPoints
      return totalBonusPoints
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}
module.exports = Util();
