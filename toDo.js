

//This code will make the list text gray and strike it off as soon as you click on the
//text in the list.
//using event delegation to ensure that this event is attached to any future li elements
//that are added to the ul.This is advantageous as we don't  have to add /remove event
//listeners everytime we include a new li.This process of event delegation attaches
//the click event to the parent ul and whenever a new li is added it just bubbles up
//to its parent element to find this event.
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
  
});

//this code will delete an li as soon as you click on the X or delete button
//this also uses event delegation
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500);
   event.stopPropagation();
         
});


//this code will add a list when the user adds a new to do and presses and enter

$("input").keypress(function(event){
      var item=$("input").val();
         if(event.which===13 && item!==""){
             event.preventDefault();

             
              $("ul").append("<li><span><i class='fa fa-trash'></i></span>   "+item+" </li>");
              $("input").val("");

           }

});//end of keypress event


//this code toggles the input up and down on clicking the plus icon 
$(".fa-plus").on("click",function(){
    $("input").toggle();
})