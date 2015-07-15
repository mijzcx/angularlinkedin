
// DIRECTIVES HERE
linkedInLoginApp.directive(
  "mijzcxOnFirst",
  function ($rootScope) {

    var uuid = 0;

    function compile(tElement, tAttributes) {

      var id = ++uuid;

      tElement.attr("mijzcx-on-first-id", id);
      tElement.removeAttr("mijzcx-on-first");

      var completeExpression = tAttributes.mijzcxOnFirst;

      var parent = tElement.parent();
      var parentScope = (parent.scope() || $rootScope);

      var unbindWatcher = parentScope.$watch(
        function () {

          var firstItem = parent.children("*[ mijzcx-on-first-id = '" + id + "' ]:first");

          if (!firstItem.length) {

            return;
          }

          var itemScope = firstItem.scope();

          if (itemScope.$first) {
            
            unbindWatcher();
            itemScope.$eval(completeExpression);

          }

        }
      );

    }

    return({
      compile: compile,
      priority: 1001,
      restrict: "A"
    });

  }
);