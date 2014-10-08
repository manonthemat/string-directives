angular.module('stringdirectives', [])
.directive('sdReverse', function() {
  return {
    restrict: 'EA',
    link: function(scope, e, attr) {
      var result = e.text().split('').reverse().join('');
      e.text(result);
    }
  };
})
.directive('sdVowelsToUpperCase', function() {
  return {
    restrict: 'EA',
    link: function(scope, e, attr) {
      var orig = e.text(),
          re = /[aeiou]/,
          result = "";
      for(var i=0, l=orig.length; i<l; i++) {
        if (orig[i].match(re)) {
          result += orig[i].toUpperCase();
        } else {
          result += orig[i];
        }
      }
      e.text(result);
    }
  };
})
;
