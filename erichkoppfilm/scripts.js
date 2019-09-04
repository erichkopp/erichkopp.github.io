$(document).ready(function() {

	$('.photo').click(function() {

		$('#modal').attr('style', 'display: block');
		$('#modal-img').attr('src', $(this).find('img').attr('src'))


		$('#close').click(function() {
			$('#modal').attr('style', 'display: none')
		});

		$('#modal').click(function() {
			$('#modal').attr('style', 'display: none')
		});

	});

});
