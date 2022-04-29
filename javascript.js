let hr=0;
let seco=0;
let min=0;
let count=0;
let timer=false;

function start(){
   timer=true;
   stopwatch();
}
function stop(){
  timer=false;
}
function reset(){
     timer =false;
    
         hr=0;
         seco=0;
         min=0;
         count=0;
         document.getElementById('hour').innerHTML ="00";
         document.getElementById('minute').innerHTML ="00";
         document.getElementById('second').innerHTML ="00";
         document.getElementById('count').innerHTML ="00";

}

function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            seco = seco + 1;
            count = 0;
        }
        if (seco == 60) {
            min = min + 1;
            seco = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            seco = 0;
        }
        let hrstring = hr;
        let minstring = min;
        let secsting = seco;
        let counstring = count;
        if (seco < 10) {
            secsting = "0" + secsting;
        }
        if (min < 10) {
            minstring = "0" + minstring;
        }
       
        if (count < 10) {
            counstring = "0" + counstring;
        }
        if (hr < 10) {
            hrstring = "0" + hrstring;
        }
        document.getElementById("hour").innerHTML = hrstring;
        document.getElementById("minute").innerHTML = minstring;

        document.getElementById("second").innerHTML = secsting;
        document.getElementById("count").innerHTML = counstring;

        setTimeout("stopwatch()", 10);
    }
}