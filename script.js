function openFunction(x) {
    x.classList.toggle("change");
    openMenu();
}

function openMenu(x) {
    document.querySelector(".menu").classList.toggle("open")
    document.querySelector(".links").classList.toggle("hide")

    setTimeout(hideLinks(), 1000);
}

function hideLinks() {
    document.querySelector(".links").classList.toggle("fade")
}

//function randomColor() {
//    console.log("randomColor");
//    let colorNumber = Math.floor((Math.random() * 5) + 1);
//    console.log(colorNumber);
//    document.querySelector(".welcome").classList.add("color" + colorNumber);
//
//
//}
//
//function colorTimeFc() {
//    console.log("Farveskift");
//    if (colorTime > 0) {
//        colorTime --;
//        let colorNumber = Math.floor((Math.random() * 5) + 1);
//        console.log(colorNumber);
//        removeClass();
//        document.querySelector(".headtext").classList.add("text" + colorNumber);
//        setTimeout(colorTimeFc, 100);
//            console.log(colorTime);
//
//
//    }
//}
//
//function removeClass(){
//     document.querySelector(".headtext").removeAttribute("class");
//}
