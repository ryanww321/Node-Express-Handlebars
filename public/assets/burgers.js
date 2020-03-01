$(".devour-button").on("click", function(event){
    var id = $(this).data("id");

    $.ajax({
        url: "/api/burgers/" + id,
        type: "PATCH",
    })
    .then(() => {
        console.log("Burger moved to devoured");
        location.reload();
    });
});

$(".delete-button").on("click", function(event){
    var id = $(this).data("id");

    $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE"
    })
    .then(() => {
        console.log("Burger deleted");
        location.reload();
    });
});

$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        name: $("#burger").val().trim()
    }

    .ajax({
        url: "/api/burgers",
        type: "POST",
        data: newBurger
    })
    .then(() => {
        console.log("New burger added");
        location.reload();
    });
});