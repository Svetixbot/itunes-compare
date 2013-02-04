'use strict';

/* Controllers */


function ListCtrl($scope, $http){
    $scope.query = "Shrek";
    $scope.searchMovies = function()
    {
	$http.jsonp('https://itunes.apple.com/search?term='+$scope.query+'&country=us&media=movie&entity=movie&callback=JSON_CALLBACK').
    		then( function(moviesRes) {
        	var movies =   moviesRes.data.results;
         	$scope.auPrice = new Object();
        	for(var i=0; i< movies.length; i++){
            	var movie = movies[i]
            $http.jsonp('https://itunes.apple.com/lookup?id='+movie.trackId+'&country=au&callback=JSON_CALLBACK').
        then(function(ausResponse){
          
          if (ausResponse.data.resultCount > 0)
              $scope.auPrice[ausResponse.data.results[0].trackId] =  ausResponse.data.results[0].trackPrice;
        })
              $scope.usaMovies= movies;    
              
        }
    });
    }
    $scope.searchMovies();
}
