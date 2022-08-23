let Myname = prompt("Adınız:")
Myname= `${Myname[0].toUpperCase()}${Myname.slice(1).toLowerCase()}`
document.querySelector("#myName").innerHTML = Myname




function showTime(){
    const date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds();
    let month = date.getMonth() + 1;
    let day = date.getDate()
    let year = date.getFullYear();
    
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    month = checkTime(month);
    day = checkTime(day);
    
    let time =`${day} / ${month} / ${year}
    ${h} : ${m} : ${s}`;
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000);    
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function background() {
    const date = new Date();
    let h = date.getHours();

    if (h>=12) {
        let element = document.querySelector("#body");
        element.classList.remove("bg-dark");
        element.classList.add("bg-light");
    }
}
showTime();
background();


