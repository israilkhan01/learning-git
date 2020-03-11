var navmenuselector=document.querySelectorAll(".nav-menu a");
console.log(navmenuselector);
for(var i=0;i<navmenuselector.length;i++){
     navmenuselector[i].addEventListener('click',function(event){
          event.preventDefault();
          var targetSectionID=this.textContent.trim().toLowerCase();
          console.log(targetSectionID);
          var targetsection=document.getElementById(targetSectionID);
          console.log(targetsection);
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
     });
}
var buttons=document.getElementById('mesg-button');
buttons.addEventListener('click',function(event){
     window.open('message.html')
})