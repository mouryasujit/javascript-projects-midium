let flag =0;

function controller(x){
    flag=flag+x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName('img');
    if(num == slides.length || num<0){
        flag=0;
        num=0;
    }
    for(let y of slides){
        
        y.style.display="none";
    }
    slides[num].style.display ='block';
}
 
 