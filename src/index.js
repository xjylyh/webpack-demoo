import $ from 'jquery';
import printMe from './print.js';
import other from './other.js'

function main(){
    let ele = document.createElement("div");
    ele.innerText = 'Click that and   HELLO WEBPACK';
    let btn = document.createElement("button");
    btn.innerText = 'Click me and check the console!'
    btn.onclick = printMe;
    ele.appendChild(btn);
    other('function main is reload');
    return ele;
}

let ele = main();
document.body.appendChild(ele);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log("printMe in changes");
        document.body.removeChild(ele);
        ele = main();
        document.body.appendChild(ele);
    })
}