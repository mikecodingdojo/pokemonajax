$(document).ready(function(){
    $.get("http://pokeapi.co/api/v2/pokemon/1/", function(res){
        console.log(res.abilities[1].ability.name);
        var html_str=""; 
        html_str +="<p>Types</p>"; 
        html_str += "<ul>"; 
        for(var i = 0; i<res.abilities.length; i++){
            html_str += "<li>" + res.abilities[i].ability.name + "</li>"; 


        }
        html_str += "</ul>"; 
        $('#info').click(function () {  
            $('#info p').html(html_str); 
        })


    





    }, "json");

})