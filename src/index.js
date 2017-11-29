import angular from 'angular';
import mpqPlot from './mpqPlot';

angular.module('mpqPlot.reactDirective', [])
.directive('mpqPlot', ['reactDirective', (reactDirective) => {
  return reactDirective(mpqPlot)
}]);