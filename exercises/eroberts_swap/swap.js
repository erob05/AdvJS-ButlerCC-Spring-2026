// JavaScript Document
"use strict";
$(document).ready(() => {
	//preload image
    $("#image_list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click( evt => {
        //get <a> clicked
        const link = evt.currentTarget;
        //swap image
        $("#main_img").attr("src", link.href);
        //swap caption
        $("#caption").text(link.title);
        //cancel default action
        evt.preventDefault();
    });

    $("section:first-child a").focus();
}); /* Ready end */