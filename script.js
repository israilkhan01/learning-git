var navmenuselector=document.querySelectorAll(".nav-menu a");
function scrollfun(event){
     event.preventDefault();
     var targetSectionID=this.textContent.trim().toLowerCase();
     var targetsection=document.getElementById(targetSectionID);
     var interval=setInterval(function(){
          var targetsectioncoordinates=targetsection.getBoundingClientRect();
          // console.log(targetsectioncoordinates);
          if(targetsectioncoordinates.top<=0){
               clearInterval(interval);
               return;
          }

          else if((window.innerHeight + window.scrollY+10)>=document.body.offsetHeight){
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

//menu button
$(document).ready(function(){
     
     $(".Menu").click(function(){
         $(".menu-button").toggle("fast");
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
 
});



//skill bars animation
var skills=document.getElementById("skills");
var skillcontainer=document.getElementById("skill-container");
var skillbars=document.querySelectorAll('.skill-progress>div');
var probars=document.querySelectorAll("#skill-container>div");
window.addEventListener('scroll',scrollcheck);

var animationDone=[false,false,false,false,false,false,false,false];
function initialise(bar){

    bar.style.width=0+'%';

}

// initialise();
function fillbars(bar){
  
    let targetwidth=bar.getAttribute('data-bar-width');
    // console.log(targetwidth);
    let currentWidth=0;
    let interval=setInterval(function(){
      if(currentWidth>targetwidth){
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width=currentWidth+'%';
    },10)
   
  }

function scrollcheck(){
  
  for(let i=0;i<skillbars.length;i++){

    var barcord=probars[i].getBoundingClientRect();
   
    if(!animationDone[i]&&barcord.top<=window.innerHeight){
      animationDone[i]=true;
       // console.log(barcord);
       fillbars(skillbars[i]);
     // console.log(skillcord.top,window.innerHeight)
       // console.log('reached the skill skill-container')
    }
    else if(barcord.top>window.innerHeight){
      initialise(skillbars[i]);
      animationDone[i]=false;
  }
  }
}
