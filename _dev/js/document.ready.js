var increaseCount = function(){
<<<<<<< HEAD
	console.log( "has clicao una carta y esto es increaseCount  ");
=======
	console.log( "has clicao una carta y esto es increaseCount ");
>>>>>>> e8c9188cdbc502684d08088adc3cf929f83e9062
	
}

// this is the document.ready code
$(document).ready( function(){

	// store all cards displayed in a var
	var tile =  $('.card');

		// the number of tiles that can be flipped
		var tilesFliped = 2;

		// Do something for each card
		$(tile).each( function(){

			// on click on each
			$(this).on( "click", function(){
<<<<<<< HEAD
				$(this).toggleClass("js-hover");

				// do the function add +1 to counter
				increaseCount();
			});
		});
=======
				// do the function add +1 to counter
				increaseCount();

			});
		});
	

>>>>>>> e8c9188cdbc502684d08088adc3cf929f83e9062
	console.log("Ehh, What's Up Doc? I see you're ready. (-‿‿-)");
});