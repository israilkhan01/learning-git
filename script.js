var navmenuselector=document.querySelectorAll(".nav-menu a");
function scrollfun(event){
     event.preventDefault();
     var targetSectionID=this.textContent.trim().toLowerCase();
     var targetsection=document.getElementById(targetSectionID);
     var interval=setInterval(function(){
          var targetsectioncoordinates=targetsection.getBoundingClientRect();
          if(targetsectioncoordinates.top<=0){
               clearInterval(interval);
               return;
          }

          else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
               clearInterval(interval);
               return;
               };
          window.scrollBy(0,50);
     },25);
}
for(var i=0;i<navmenuselector.length;i++){
     navmenuselector[i].addEventListener('click',scrollfun);
}

var buttons=document.getElementById('mesg-button');
buttons.addEventListener('click',function(event){
     window.open('message.html')
})

$(document).ready(function(){
     
     $(".Menu").click(function(){
         $(".menu-button").slideToggle("fast");
     });
 });
document.addEventListener('click',function(event){
 if($(document).width()<750){
     $(document).on("click", function(event){
          var trigger = $(".Menu");
          var wid=$(document).width();
          if(trigger !== event.target && !trigger.has(event.target).length){
              $(".menu-button").slideUp("fast");
              console.log(trigger.has(event.target).length);
          } 
     
          
      });
 }
 
})
