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
.directive('sdMarkMostUsedWord', function() {
  function makeHash(str) {
    var o = {};
    for(var i=0; i<str.length; i++) {
      o[str[i]] = o[str[i]]+1 || 1;
    }
    return o;
  }
  return {
    restrict: 'EA',
    link: function(scope, e, attr) {
      var origtext = e.text().split(' '),
          theWord = '';
      var result = makeHash(origtext);
      // this is going to look stupid, but I'll refactor later
      // TODO: refactor this
      var keys = Object.keys(result);
      for(var i=0, n=0, amountOfKeys=keys.length; i<amountOfKeys; i++) {
        if(result[keys[i]] > n) {
          n = result[keys[i]];
          theWord = keys[i];
        }
      }
      // TODO: add words that are to be ignored as an attribute
      // the word 'bird' can not be ignored, in fact, there's going to be some great things happening if the bird is the word...
      // maybe on mouseover over the word you gotta play a specific media file, especially when the word is the bird
      // all kinds of craziness is going on and this directive might replace my very own creation of sticky cat on my most famous creations...
      // and everybody shall know the word
      e.html(origtext.map(function(word) {
        if (word === theWord) {
          return "<span style='background-color:pink;color:white'>"+word+"</span>";
        } else {
          return word;
        }
      }).join(' '));
    },
  };
})
;
