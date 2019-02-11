$(document).ready(function() {

	var id = 1;
	$(".wheel").hide();
	$("#"+id).show();

	function showChord(id) {
		$(".wheel").hide();
		$(".gif").show();

		setTimeout(
		  function() 
		  {
				$("#"+id).show();
		  }, 100);
	}

	$("#plus").click(function() {
		if (id == 12) {
			id = 0;
		}
		showChord(++id);
	});

	$("#minus").click(function() {
		if (id == 1) {
			id = 13;
		}
		showChord(--id);
	});


	$('map').imageMapResize();


});

function PlaySound() {
    var sound = document.getElementById("audio");
    audio.currentTime = 0; // rewind to start to rapidly play sound
    sound.play()
}


