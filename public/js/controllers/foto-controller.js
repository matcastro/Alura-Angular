angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFoto, $routeParams) {
	$scope.foto = {};

	if($routeParams.fotoId){
		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
		})
	}

	$scope.submeter = function() {
		if($scope.formulario.$valid){
			cadastroDeFoto.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao){
					$scope.foto = {};
					$scope.formulario.$setPristine();
				}
			})
			.catch(function(erro){
				$scope.mensagem = erro.mensagem;
				console.log(erro);
			})
		}
		console.log($scope.foto);
	}
	
})