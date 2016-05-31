app.config(["$routeProvider",function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/partials/home.html",
      controller: "HomeController"
    })
    .when("/parking-vehicles", {
      templateUrl: "app/partials/parking-vehicles.html",
      controller: "ParkingVehiclesController"
    })
    .when("/parking-vehicles/:vehicleType", {
      templateUrl: "app/partials/parking-vehicles.html",
      controller: "ParkingVehiclesController"
    })
    .when("/parking-lots", {
      templateUrl: "app/partials/parking-lots.html",
      controller: "ParkingLotsController"
    })
    .when("/parking-lots/:parkingLotType", {
      templateUrl: "app/partials/parking-lots.html",
      controller: "ParkingLotsController"
    })
    .otherwise({redirectTo: "/"});
}]);