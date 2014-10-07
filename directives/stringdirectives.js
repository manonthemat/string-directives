angular.module('stringdirectives', [])
.directive('sdReverse', function() {
  return {
    restrict: 'EA',
    link: function(scope, e, attr) {
      var result = e.html().split('').reverse().join('');
      e.text(result);
    }
  };
})
;
