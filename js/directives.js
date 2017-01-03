angular.module('TodoDirective', []).directive('todoTable', function() {
	return {
		restrict: 'EA',	// E -> element/attribute
		templateUrl: 'templates/directives/todo-table.html'
	};
});