describe("String Directive Tests", function() {
  var element,
      $scope;
  beforeEach(module("stringapp"));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element("<sd-reverse>You can't push on a string.</sd-reverse>");
    $compile(element)($rootScope);
  }));

  it("should reverse the element's content", function() {
    expect(element.html()).toBe(".gnirts a no hsup t'nac uoY");
  });
});
