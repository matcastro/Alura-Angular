angular.module('alurapic').controller('FotosController', function($scope,recursoFoto){
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
		console.log("Fotos buscadas com sucesso!");
	}, function(erro){
		console.log("Fudeu");
	})

	$scope.remover = function(foto){
		recursoFoto.delete({fotoId : foto._id}, function(){
			$scope.fotos.splice($scope.fotos.indexOf(foto),1);
			$scope.mensagem = "Foto "+foto.titulo+ " removida com sucesso!";
		}, function(erro){
			$scope.mensagem= erro;
		})
	}
});