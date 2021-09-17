/**
 * @type {HTMLDivElement}
 */

let close = document.querySelector(".window .close");
if (close){
    /**
     * 
     * @param {MouseEvent} e 
     */
   close.onclick=function(e) {
let window = e.target.closet(".window");
if (window) {
    window.remove();
        }
    }
}
/**
 * @type {HTMLDivElement}
 */

let head = document.querySelector(".window .head");
if(head) {
    let isMoving=false;
    let x=0, y=0;
    /**
  * 
  * @param {MouseEvent} e 
  */
    head.onmousedown=function(e){
        isMoving=true;
        x=e.clientX;
        y=e.clientY;

    }
}
/**
  * 
  * @param {MouseEvent} e 
  */
head.onmouseup=function(e){
    isMoving=false;

}

/**
  * 
  * @param {MouseEvent} e 
  */
 head.onmousemove=function(e){
     if(!isMoving)return;

     let win = head.parentElement;
     let bound = win.getBoundingClientRect();
     win.style.top=""+(bound.top+(e.clientY-y))+"px";
     win.style.top=""+(bound.left+(e.clientX-x))+"px";

x=e.clientX;
y=e.clientY;

}
