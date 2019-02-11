$(document).ready(function() {

	var id = 1;
	$(".wheel").hide();
	$(".animation").hide();
	$("#"+id).show();

	function showChordPlus(id) {
		$(".wheel").hide();
		$(".plus_gif").show();

		setTimeout(
		  function() 
		  {
				$("#"+id).show();
				$(".animation").hide();
		  }, 200);
	}

	function showChordMinus(id) {
		$(".wheel").hide();
		$(".minus_gif").show();

		setTimeout(
		  function() 
		  {
				$("#"+id).show();
				$(".animation").hide();
		  }, 200);
	}

	$("#plus").click(function() {
		if (id == 12) {
			id = 0;
		}
		showChordPlus(++id);
	});

	$("#minus").click(function() {
		if (id == 1) {
			id = 13;
		}
		showChordMinus(--id);
	});


	$('map').imageMapResize();


});

function PlaySound() {
    var sound = document.getElementById("audio");
    audio.currentTime = 0; // rewind to start to rapidly play sound
    sound.play()
}


