"use strict"
function Prices() {

    function calculateFinalPrice(basePrice, passengerType, flightType) {
        let passengerPercentage = basePrice * (passengerType/100)
        let passengerVaritation = basePrice + passengerPercentage
        let calculatedPrice = passengerVaritation + (passengerVaritation * (flightType/100))
        return parseFloat(calculatedPrice).toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
      basePrice = parseInt(basePrice)
      let regularPassenger = -5
      let vipPassenger = 5
      let economyFlight = -3
      let businessFlight = 10
      let passengerPercentage = 0;
      let flightPercentage = 0;
      if (passengerType.toUpperCase() === "REGULAR".toUpperCase()) {
        passengerPercentage = basePrice * (regularPassenger/100);
      } else if (passengerType.toUpperCase() === "VIP".toUpperCase()) {
        passengerPercentage = basePrice * (vipPassenger/100);
      };
      let passengerAdjusted = basePrice + passengerPercentage
      if (flightType.toUpperCase() === "economy".toUpperCase()) {
        flightPercentage = passengerAdjusted * (economyFlight/100);
      } else if (flightType.toUpperCase() === "business".toUpperCase()) {
        flightPercentage = passengerAdjusted * (businessFlight/100);
      };
      let calculatedPrice = passengerAdjusted + flightPercentage
      return parseFloat(calculatedPrice).toFixed(2);
    }

    function calculateTotalFinalPrice(numSeats, passengerType, flightType, basePrice) {
      return numSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }
    
    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();