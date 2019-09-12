angularApp.controller('MainCtrl', [
  '$scope',
  'SwapiService',
  function ($scope, SwapiService) {
    $scope.heading = "Hello World";
    $scope.message = "This is me";
    $scope.search = "";
    $scope.diff = "";
    $scope.averageHeight = "";

    $scope.eyecolorArr = [];

    $scope.films = {};

    SwapiService.people()
      .then(function (data) {
        $scope.data = data.data.results;

        angular.forEach($scope.data, function (person) {
          // creating a list of all possible films
          angular.forEach(person.films, function (film) {
            $scope.films[film] = '';
          });
        });
      });

    $scope.ageDiff = function (dataArray) {
      console.log(dataArray);
      var ageArray = dataArray.map(function (item) { return parseInt(item.birth_year.replace('BBY', '')) });
      ageArray = ageArray.filter(function (item) { if (!isNaN(item)) { return item } });
      ageArray = ageArray.sort(function (x, y) { return x - y });
      var min = Math.min(...ageArray);
      var max = Math.max(...ageArray);
      $scope.diff = max - min;
      console.log($scope.diff);
      return $scope.diff;
    }

    $scope.avgHeight = function (dataArray) {
      var heightArray = dataArray.map(function (item) { return item.height });
      console.log(heightArray);
      var sum = heightArray.reduce(function (x, y) { return parseInt(x) + parseInt(y) });
      var len = heightArray.length - 1;
      $scope.averageHeight = sum / len;
      console.log($scope.averageHeight);
      return $scope.averageHeight;
    }

    $scope.eyeColor = function (dataArray) {
      var eyeColorArray = dataArray.map(function (item) { return item.eye_color });
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      $scope.eyecolorArr = eyeColorArray.filter(onlyUnique);
      return $scope.eyecolorArr;
    }


  }
]);