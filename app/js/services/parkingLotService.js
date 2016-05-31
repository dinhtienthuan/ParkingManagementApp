app.service("parkingLotService", [function() {
  var parkingLotService = {
    getParkingLotStatistics : function() {
      return parkingLotStatistics;
    }
  }

  return parkingLotService;
}]);

var parkingLotStatistics = [
  {
    type: "Micro",
    description: "For bike only",
    available: 10,
    occupied: 25
  },
  {
    type: "Mini",
    description: "For motorbike and bike only",
    available: 95,
    occupied: 135
  },
  {
    type: "Small",
    description: "For car has up to 9 seats",
    available: 25,
    occupied: 5
  }
];