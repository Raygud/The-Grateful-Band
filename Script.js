let Dropped = 0
let Scroller = window.pageYOffset

function DropDownSide(){

    switch(Dropped) {
        case 0:
            document.getElementById("SideDrop").style.left = "0"
            document.getElementById("SideDropIcon").style.transform = "rotate(-90deg)";
            console.log("Opened")
            Dropped = 1;
          break;
        case 1:
            document.getElementById("SideDrop").style.left = "101%"
            document.getElementById("SideDropIcon").style.transform = "rotate(90deg)";
            console.log("Closed")
            Dropped = 0;
          break;
        default:
      }

}

function DropDownSideClose(){

            document.getElementById("SideDrop").style.left = "101%"
            document.getElementById("SideDropIcon").style.transform = "rotate(90deg)";
            console.log("Closed")
            Dropped = 0;
      

}

function scrolled() {
    let Scroller = window.pageYOffset
    console.log(Scroller)


    
    if (Scroller <= 46){}
}


