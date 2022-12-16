var flag = true;
function sidebarDisplay() {
    flag = !flag;
    const display = document.getElementsByClassName("display");
    if(!flag) {
        for(let i = 0; i < display.length; i++) {
            display[i].style.display = "none";
        }
    }
    else {
        for(let i = 0; i < display.length; i++) {
            display[i].style.display = "block";
        }
    }
}