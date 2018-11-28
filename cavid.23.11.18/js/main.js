let tibor = document.querySelector('#buton');
let win = document.getElementById("dialog");
let klosbut = document.getElementById("cok");
tibor.addEventListener("click", function(){
   win.style.display="block";
   tibor.style.display="none";
   
});
klosbut.addEventListener("click", function(){
    win.style.display="none";
    tibor.style.display="block";
})


