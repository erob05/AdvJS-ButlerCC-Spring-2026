$(document).ready(function () {

    $("#toggleBtn").on("click", function () {
        $("#explanation").slideToggle();

        $(this).toggleClass("active").text(function (index, text) {
                return text === "Show Explanation"
                    ? "Hide Explanation"
                    : "Show Explanation";
            })
            .blur();
    })
})