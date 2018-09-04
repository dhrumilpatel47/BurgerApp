$(function(){
    $(".create").on("submit",function(event){
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#new").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("create new burger");
                location.reload();
            }
        )
    });

    $(".devour").on("click",function(){
        var id = $(this).data("id");
        var devouredBurger= {
            devoured: true
        }

        $.ajax("/api/burgers/"+id,{
            type:"PUT",
            data:devouredBurger
        }).then(
            function(){
                console.log("devour a burger");
                location.reload();
            }
        )
    });

    $(".delete").on("click",function(){
        var id = $(this).data("id");
        $.ajax("/api/burgers/"+id,{
            type:"DELETE"
        }).then(
            function(){
                console.log("delete burger" + id);
                location.reload();
            }
        )
    })
})