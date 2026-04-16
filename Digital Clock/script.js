function updateClock () {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    
    hstring = h.toString().padStart(2, "0") + ":";
    mstring = m.toString().padStart(2, "0") + ":";
    sstring = s.toString().padStart(2, "0") + ":"; 

    document.getElementById("hours").textContent = hstring;
    document.getElementById("mins").textContent = mstring;
    document.getElementById("sec").textContent = sstring;
    document.getElementById("ampm").textContent = ampm;
    

    animateChange("hours");
    animateChange("mins");
    animateChange("sec");
}

function animateChange (id) {
    let element = document.getElementById(id);
    if (element) {
        element.classList.add("change");
        setTimeout(() => {
            element.classList.remove("change");
        }, 300);
    }
}
setInterval(updateClock , 1000);

updateClock ();