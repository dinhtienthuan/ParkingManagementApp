app.filter("orderStatisticsData", ["constants", function(constants) {
  function getTotalStatisticsDatum(statisticsData) {
    return statisticsData.slice(0, 1);
  }

  function sortSubStatisticsDatum(statisticsData, sortBy) {
    if (!sortBy) {
      sortBy = "type";
    }
    var sortDirection = (sortBy.match(/[+-]/g) || "+").toString();
    sortBy = (sortBy.match(/[^+-](.*)/g)).toString();
    var subStatisticsData = statisticsData.slice(1);
    var sortedSubStatisticsData = subStatisticsData.sort(function(datum1, datum2) {
      if (sortDirection === constants.ASC) {
        return (datum1[sortBy] > datum2[sortBy]);
      } else {
        return (datum1[sortBy] < datum2[sortBy]);
      }
    });
    return sortedSubStatisticsData;
  }
  
  var orderStatisticsData = function(statisticsData, sortBy) {
    var output = getTotalStatisticsDatum(statisticsData);
    var sortedSubStatisticsData = sortSubStatisticsDatum(statisticsData, sortBy);
    output = output.concat(sortedSubStatisticsData);
    return output;
  };

  return orderStatisticsData;
}]);

app.filter("replaceCharacter", [function() {
  var replaceByHyphen = function(input, fromCharacter, toCharacter) {
    if (!toCharacter) {
      toCharacter = " ";
    }

    if (!fromCharacter) {
      fromCharacter = " ";
    }

    return input.replace(fromCharacter, toCharacter);
  };
  return replaceByHyphen;
}]);

app.filter("truncate", [function() {
  var truncate = function(input, limit) {
    var output = input;
    if (limit && limit > 0) {
      output = input.substring(0, limit);
    }
    return output;
  };
  return truncate;
}]);