$(document).ready(function(){
    $(".dropbtn").click(function(){
      $(".dropdown-content").toggleClass( "dropdown-content-ja");
    });
});

$(document).on("click", function(event){
        var $trigger = $(".dropbtn");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-content").toggle("1s");
        }
    });
