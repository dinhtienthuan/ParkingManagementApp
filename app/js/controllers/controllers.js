app.controller("HomeController", ["$scope", "parkingVehicleService", function($scope, parkingVehicleService) {

}]);

app.controller("ParkingVehiclesController", [
  "$scope", "$routeParams", "parkingVehicleService", "orderStatisticsDataFilter", "replaceCharacterFilter", "truncateFilter", "constants" ,
  function($scope, $routeParams, parkingVehicleService, orderStatisticsDataFilter, replaceCharacterFilter, truncate, constants) {
    var allVehicles = parkingVehicleService.getVehicles();
    $scope.vehicleStatistics = parkingVehicleService.statisticsVehicles(allVehicles);

    $scope.vehicles = [];
    $scope.vehicleType = $routeParams.vehicleType || '';
    if ($scope.vehicleType && $scope.vehicleType != '') {
      $scope.vehicleType = replaceCharacterFilter($scope.vehicleType, "-", " ");
      $scope.parkingVehicles = parkingVehicleService.getVehiclesByType($scope.vehicleType);
    } else {
      $scope.parkingVehicles = parkingVehicleService.getVehicles();
    }

    $scope.sortBy = "type";
    $scope.sortDirection = "+";
    $scope.sortDirections = {
      type: "+",
      quantity: "+"
    };
    $scope.updateSortBy = function(sortBy) {
      var sortDirection = $scope.sortDirections[sortBy];
      if (sortDirection === constants.ASC) {
        $scope.sortDirections[sortBy] = constants.DESC;
      } else {
        $scope.sortDirections[sortBy] = constants.ASC;
      }
      $scope.sortDirection = $scope.sortDirections[sortBy];
      $scope.sortBy = sortBy;
    };


    $scope.vehicleTypesData = {
      availableOptions: parkingVehicleService.getVehicleTypes(),
      selectedOption: parkingVehicleService.getVehicleTypes()[0]
    };

    $scope.parkingVehicle = {
      type: $scope.vehicleTypesData.selectedOption
    };


}]);

app.controller("ParkingLotsController", ["$scope", "parkingLotService", function($scope, parkingLotService) {
  $scope.parkingLotStatistics = parkingLotService.getParkingLotStatistics();
}]);