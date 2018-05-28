angular.module('alurapic').controller('GruposController', function($scope, $http){
	$scope.grupo = [];

	$http.get('v1/grupos')
	.success(function(grupos){
		$scope.grupos = grupos;
		console.log("Grupos buscados com sucesso!");
	})
	.error(function(erro){
		console.log(erro);
	})
})