var gal =document.querySelector(".gallery")
var img=gal.querySelectorAll("img")
console.log(img)

var cover=document.querySelector(".coverup")
var close=document.querySelector(".close")
var container=document.querySelector(".image_container")
var images=container.querySelectorAll("img")
console.log(images)
var count=null
for(var i=0;i<img.length;i++){
  img[i].addEventListener("click",function(){
    cover.style.display="block"
    close.style.display="block"  
  })
}
close.addEventListener("click",function(){
  cover.style.display="none"
  close.style.display="none"
   images[count].style.display="none"
   count=null
})

img[0].addEventListener("click",function(){
  images[0].style.display="block"
  count=0
})

img[1].addEventListener("click",function(){
  images[1].style.display="block"
  count=1
})

img[2].addEventListener("click",function(){
  images[2].style.display="block"
  count=2
})