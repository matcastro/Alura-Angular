angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', function($resource){
		return $resource('/v1/fotos/:fotoId', null, {
			'update': {
				method: 'PUT'
			}
		});
	})
	.factory('cadastroDeFoto', function(recursoFoto, $q, $rootScope){
		var service = {};
		service.cadastrar = function(foto){
			return $q(function(resolve, reject){
				if(foto._id){
					recursoFoto.update({fotoId : foto._id}, foto, function(){
						$rootScope.$broadcast('fotoCadastrada');
						resolve({
							mensagem: 'Foto alterada com sucesso',
							inclusao: false
						});
					}, function(erro){
						reject({
							mensagem : 'Não foi possível alterar a foto'
						})
					});
				} else {
					recursoFoto.save(foto, function(){
						$rootScope.$broadcast('fotoCadastrada');
						resolve({
							mensagem: 'Foto cadastrada com sucesso',
							inclusao: true
						});
					}, function(erro){
						reject({
							mensagem: 'Não foi possível cadastrar a foto'
						});
					});
				}

			});
		};
		return service;	

	});