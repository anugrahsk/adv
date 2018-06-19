$(document).ready(function(){
	$("#level").click(function(e){
		 e.preventDefault();
		var req1=$('#select1').val();
		var req2=$('#ip').val();
		var r=$("#one").val();
		if( req1 == r && req2=='' || req2=='' || req1 == r)
		{
			alert("enter the details correctly");
			
		}
		else if(req1 == "IMDB-ID")
		{
			console.log(req2)
			getalldata(req1,req2);
		}
		else if(req1 == "MOVIE-TITLE")
		{
			getalldata(req1,req2);
		}
		else if(req1 == "MOVIE-YEAR")
		{
			getalldata(req1,req2);
		}	
		else
		{
			alert("enter the details correctly");
					
		}			
	});
	
});
function getalldata(one,two){
	$.ajax
	({
		type:'GET',
		datatype:'JSON',
		async: true,
		url: 'https://www.omdbapi.com/?i=tt3896198&apikey=72b7321f',
		method:'GET',
		success:(data)=>
		{	
			$('.sec').css('display', 'block');
			console.log(data)
	
			if(data.imdbID == two && one == "IMDB-ID" )
			{
	
				$('#photo').html('<img src="' + data.Poster + '" class="img-fluid"/>');
				$('#c1').append(data.Title);
				$('#c2').append(data.Released);
				$('#c3').append(data.Runtime);
				$('#c4').append(data.Director);
				$('#c5').append(data.Actors);
				$('#c6').append(data.Plot);
				$('#c7').append(data.Language);
				$('#c8').append(data.Country);
				$('#c9').append(data.Awards);
				$('#c11').append(data.Ratings[1].Value);
				$('#c12').append(data.Production);
				$('#c13').append(data.imdbRating);
				$('#c14').append(data.imdbID);
				$('#c15').append(data.BoxOffice);	
				$('.item').show("fast",function(){});
			}
			else if(data.Title == two && one == "MOVIE-TITLE" )
			{
				$('#photo').html('<img src="' + data.Poster + '" class="img-fluid"/>');
				$('#c1').append(data.Title);
				$('#c2').append(data.Released);
				$('#c3').append(data.Runtime);
				$('#c4').append(data.Director);
				$('#c5').append(data.Actors);
				$('#c6').append(data.Plot);
				$('#c7').append(data.Language);
				$('#c8').append(data.Country);
				$('#c9').append(data.Awards);
				$('#c11').append(data.Ratings[1].Value);
				$('#c12').append(data.Production);
				$('#c13').append(data.imdbRating);
				$('#c14').append(data.imdbID);
				$('#c15').append(data.BoxOffice);	
				$('.item').show("fast",function(){});
			}
			else if(data.Year == two && one == "MOVIE-YEAR")
			{
				$('#photo').html('<img src="' + data.Poster + '" class="img-fluid"/>');
				$('#c1').append(data.Title);
				$('#c2').append(data.Released);
				$('#c3').append(data.Runtime);
				$('#c4').append(data.Director);
				$('#c5').append(data.Actors);
				$('#c6').append(data.Plot);
				$('#c7').append(data.Language);
				$('#c8').append(data.Country);
				$('#c9').append(data.Awards);
				$('#c11').append(data.Ratings[1].Value);
				$('#c12').append(data.Production);
				$('#c13').append(data.imdbRating);
				$('#c14').append(data.imdbID);
				$('#c15').append(data.BoxOffice);	
				$('.item').show("fast",function(){});
			}
			else{
				alert("enter the details correctly");
					
			}
			
		},
		error:(err) => {

            console.log(err.dataJSON.error.message);
            alert(err.dataJSON.error.message)

        },
		timeout:3000 
	});

}