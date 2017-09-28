import $ from 'jquery';
import printMe from './print.js';

function main(){
    let ele = document.createElement("div");
    ele.innerText = 'Click that and   HELLO WEBPACK';
    let btn = document.createElement("button");
    btn.innerText = 'Click me and check the console!'
    btn.onclick = printMe;
    ele.appendChild(btn);
    return ele;
}
$("body").append(main());