$(function () {
    $(".devour-button").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
                console.log("Burger moved to devoured");
                location.reload();
            });
    });

    $(".delete-button").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
                console.log("Burger deleted");
                location.reload();
            });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        }

            .ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(() => {
                console.log("New burger added");
                location.reload();
            });
    });
});
