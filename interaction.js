let clickCount = 1;
let clickCheck = false;

function mouseReleased(){
  clickCount += 1;
}

function clickCheck(){
  if (clickCount%2 == 0){
    clickCheck = true;
  } else if (clickCount%2 == 1) {
    clickCheck = false;
  }
}