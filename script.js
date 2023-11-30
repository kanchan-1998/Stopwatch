let startBtn=document.querySelector("#start");
let resetBtn=document.querySelector("#reset");
let interval=document.querySelector("#interval");
let hr=document.querySelector("#hours");
let min=document.querySelector("#minutes");
let sec=document.querySelector("#seconds");
let milisec=document.querySelector("#milisec");

let ms=0;
let s=0;
let m=0;
let h=0;
let startWatch;
let check="stop";
startBtn.addEventListener("click",()=>{
    if(check=="stop"){
        startBtn.innerHTML="STOP";
        check="start";
        startBtn.style.cssText="border:2px solid #2d383a; color:#2d383a";
        startWatch=setInterval(()=>{
            ms++;
            if(ms==100){
                ms=0;
                s++;
                if(s==60){
                    s=0;
                    m++;
                    if(m==60){
                        m=0;
                        h++;

                        if(h<=9){
                            hr.innerHTML="0"+h;
                        }else{
                            hr.innerHTML=h;
                        }    
                    }
                    if(m<=9){
                        min.innerHTML="0"+m;
                    }else{
                        min.innerHTML=m;
                    }                    
                }
                if(s<=9){
                    sec.innerHTML="0"+s;
                }else{
                    sec.innerHTML=s;
                }
            }
            if(ms<=9){
                milisec.innerHTML="0"+ms;
            }else{
                milisec.innerHTML=ms;
            }
            
        },10);
    }
    // stop
    else if(check=="start"){
        startBtn.innerHTML="START";
        check="stop";
        clearInterval(startWatch);
        startBtn.style.cssText="border:2px solid #1a66ff; color:#1a66ff";
        li=interval.querySelectorAll("li");
        console.log(li.length);
        if(li.length>2){
            interval.removeChild(interval.firstElementChild);
        }
        interval.innerHTML+=`<li>${h}:${m}:${s}:${ms}</li>`;
    }
});

resetBtn.addEventListener("click",()=>{
    startBtn.style.cssText="border:2px solid #1a66ff; color:#1a66ff";
    startBtn.innerHTML="START";
    check="stop"
    clearInterval(startWatch);
    ms=0;
    s=0;
    m=0;
    h=0;
    hr.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    milisec.innerHTML="00";
    interval.innerHTML="";
});
