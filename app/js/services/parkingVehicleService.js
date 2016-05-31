app.service("parkingVehicleService", ["$http", function($http){
  function isNewVehicleType(statisticsData, vehicleType) {
    var statisticsDatum = $.grep(statisticsData, function(datum){ return datum.type === vehicleType; });
    return statisticsDatum.length === 0;
  }

  function addNewVehicleTypeStatistics(statisticsData, vehicleType) {
    var newStatisticsDatum = createNewStatisticsDatum(vehicleType);
    statisticsData.push(newStatisticsDatum);
  }

  function createNewStatisticsDatum(vehicleType) {
    newStatisticsDatum = {
      type: vehicleType,
      quantity: 1
    };
    return newStatisticsDatum;
  }

  function updateVehicleTypeStatistics(statisticsData, vehicleType) {
    var statisticsDatum = $.grep(statisticsData, function(datum){ return datum.type === vehicleType; });
    statisticsDatum[0].quantity += 1;
  }

  function updateTotalStatistics(statisticsData) {
    statisticsData[0].quantity += 1;
  }

  var parkingVehicleService = {

    getVehicles : function() {
      return vehicles;
    },

    getVehiclesByType : function(vehicleType) {
      return vehicles.slice(1, 3);
    },

    statisticsVehicles : function(vehicles) {
      var statisticsData = [{
        type: "Total",
        quantity: 0
      }];

      for (var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];
        if (isNewVehicleType(statisticsData, vehicle.type)) {
          addNewVehicleTypeStatistics(statisticsData, vehicle.type);
        } else {
          updateVehicleTypeStatistics(statisticsData, vehicle.type);
        }
        updateTotalStatistics(statisticsData);
      }

      return statisticsData;
    },

    getVehicleTypes : function() {
      return vehicleTypes;
    }
  }

  return parkingVehicleService;
}]);

var vehicles = [
{
  parkingLot: "G-123",
  numberPlate: "43B1 - 045.44",
  checkinTime: new Date(),
  type: "Motorbike"
},
{
  parkingLot: "G-245",
  numberPlate: "",
  checkinTime: new Date(),
  type: "Bike"
},
{ 
  parkingLot: "2-465",
  numberPlate: "43MD - 003.65",
  checkinTime: new Date(),
  type: "Electric Motorbike"
},
{
  parkingLot: "1-334",
  numberPlate: "43A - 013.03",
  checkinTime: new Date(),
  type: "Car"
},
{ 
  parkingLot: "G-379",
  numberPlate: "43MD - 000.26",
  checkinTime: new Date(),
  type: "Electric Motorbike"
},
{ 
  parkingLot: "G-156",
  numberPlate: "43MD - 000.28",
  checkinTime: new Date(),
  type: "Electric Motorbike"
},
{
  parkingLot: "G-021",
  numberPlate: "",
  checkinTime: new Date(),
  type: "Bike"
},
{ 
  parkingLot: "G-456",
  numberPlate: "43MD - 000.06",
  checkinTime: new Date(),
  type: "Electric Motorbike"
},
{
  parkingLot: "G-756",
  numberPlate: "",
  checkinTime: new Date(),
  type: "Bike"
},
{
  parkingLot: "G-462",
  numberPlate: "",
  checkinTime: new Date(),
  type: "Bike"
}];

var vehicleTypes = [
  "Bike",
  "Electric Motorbike",
  "Motorbike",
  "Car"
];