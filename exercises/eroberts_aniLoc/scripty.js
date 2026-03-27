"use strict";
$(document).ready(() => {
	$('nav a').click(evt => {
		evt.preventDefault();
		const target = evt.currentTarget;
		let href = $(target).attr('href');
		$('main').addClass('slide-out-top');
		setTimeout(() => {
			window.location = href;
		}, 500);
	});
	
	$('.myCard .card-body').click(evt => {
		const check = evt.currentTarget;
		let $job = $(check).attr('data-job');

		$(check).parent().addClass('jello-horizontal');

		setTimeout(() => {
			$('main').addClass('slide-out-top');
		}, 200);

		setTimeout(() => {
			window.location = $job;
		}, 1000);
	});
});