$(document).ready(function() {

	var id = 1;
	$(".wheel").hide();
	$("#"+id).show();

	function showChord(id) {
		$(".wheel").hide();
		$("#"+id).show();
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

});