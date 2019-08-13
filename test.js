// let date=new Date();

// // document.getElementById('output').innerHTML=date;

// document.write('Native: '.bold()+date+'<br>');
// document.write('DateTime As String: '.bold()+date.toLocaleString()+'<br>');
// document.write('Date As String: '.bold()+date.toLocaleDateString()+'<br>');
// document.write('Time As String: '.bold()+date.toLocaleTimeString()+'<br>');
// document.write('Year As String: '.bold()+date.getFullYear()+'<br>');
// document.write('Month As String: '.bold()+date.getMonth()+'<br>');
// document.write('Day As String: '.bold()+date.getDay()+'<br>');
// document.write('Hours As String: '.bold()+date.getHours()+'<br>');
// document.write('Minutes As String: '.bold()+date.getMinutes()+'<br>');
// document.write('S    econd As String: '.bold()+date.getSeconds()+'<br>');
// document.write('<hr>');

// document.write('Utc Hour As String: '.bold()+date.getUTCHours()+'<br>');
// document.write('Utc Minute As String: '.bold()+date.getUTCMinutes()+'<br>');
// document.write('Utc Second As String: '.bold()+date.getUTCSeconds()+'<br>');



function showDateTime(diff = 0) {
    let dateTime = new Date(Date.now() - diff);
    // console.log(typeof dateTime.getMonth());
    let dateTimeString = dateTime.getDate().padLeft('00') + '.'
        + (dateTime.getMonth() + 1).padLeft('00') + '.'
        + dateTime.getFullYear().padLeft('0000') + ' '
        + dateTime.getHours().padLeft('00') + ':'
        + dateTime.getMinutes().padLeft('00') + ':'
        + dateTime.getSeconds().padLeft('00');
    document.getElementById('output').innerHTML = dateTimeString;
}


function timeInfinitive(diff = 0/*optional parameter */) {
    // if(diff== undefined)
    // diff=0;
    console.log(diff);
    showDateTime(diff);
    let pid = setInterval(showDateTime, 1000,diff);

    document.getElementById('btnStop').setAttribute('pid', pid);
}
// '7'.padLeft('00');

Number.prototype.padLeft = function (template) {
    // console.log(typeof this,this);
    return template.substring(0, template.length - this.toString().length)
        + this.toString();
}


function timeStop(el) {
    console.log(el.getAttribute('pid'));
    clearInterval(parseInt(el.getAttribute('pid')));
}

//07.08.2019 21:03:22
function timeStart() {
    let oldDateTimeString = document.getElementById('output').innerHTML;
    let oldDateTimeArr = oldDateTimeString.split(' ');
    let year, month, day;
    let oldDateArr = oldDateTimeArr[0].split('.');
    year = parseInt(oldDateArr[2]);
    month = parseInt(oldDateArr[1]) - 1;
    day = parseInt(oldDateArr[0]);

    let hour, minute, second;
    let oldTimeArr = oldDateTimeArr[1].split(':');
    hour = parseInt(oldTimeArr[0]);
    minute = parseInt(oldTimeArr[1]);
    second = parseInt(oldTimeArr[2]);

    let oldDateTime = new Date(year, month, day, hour, minute, second);
    // console.log(Date.now() - oldDateTime.getTime());
    timeInfinitive(Date.now() - oldDateTime.getTime());
}

/////////////

// var elements = document.getElementsByTagName('a');

// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     element.onclick=function(){
//         console.log(this);
//     }
// }

// console.log(elements);

var element = document.querySelector('ul#context > li:nth-child(2)');
// console.log(element.keys());
// console.log('-------------Start-------------');
// for(var key of element)
// {
//     console.log(key);
// }
// console.log('-------------end-------------');
console.log('element', element);
console.log('element.previousSibling', element.previousSibling);
console.log('element.nextSibling', element.nextSibling);
console.log('element.previousElementSibling', element.previousElementSibling);
console.log('element.nextElementSibling', element.nextElementSibling);
console.log('element.parentNode', element.parentNode);
console.log('element.childNodes', element.childNodes);
console.log('element.firstChild', element.firstChild);
console.log('element.lastChild', element.lastChild);


var aLastChild = document.querySelector('#test a:last-child');
// aLastChild.href='https://flatuicolors.com/palette/defo';
aLastChild.onclick = function () {
    window.location.href = this.getAttribute('xhref')
    console.log(this.getAttribute('xhref'));
}

function changePosition(el) {
    var position = el.value;
    var paragraf = document.querySelector('#text-context');
    paragraf.className = '';
    paragraf.classList.add(position);
}
function changeColor(el) {
    var color = el.value;
    var paragraf = document.querySelector('#text-context');
    paragraf.style.color = color;
}

var elements = document.querySelectorAll('ul#context > li > a');

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // element.onclick=function(){
    //     console.log(this);
    // }
    element.addEventListener('click', clickChild);
}

function clickChild() {
    console.log(this);
}

// window.onload=function(){
//     this.alert('windows loaded');
// }

// window.addEventListener('load',function(){
//     this.alert('windows loaded');
// });

// window.addEventListener('resize', function () {
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;

//     // Display result inside a div element
//     console.log("Width: " + w + ", " + "Height: " + h);
// });

// document.body.addEventListener('mousemove', function (e) {
//     // console.log(e);
//     // Display result inside a div element
//     console.log("Width: " + e.clientX + ", " + "Height: " + e.clientY);
// });


/* Create Node  */

var createNode = document.querySelector('#createNewNode');
createNode.addEventListener('click', function () {
    var container = document.querySelector('#nodecontainer');
    var li = document.createElement('li');

    li.addEventListener('dblclick',function(){
        // console.log(this);
        container.removeChild(this);
    });

    var  now = Date.now();
    li.textContent=now;
    container.appendChild(li);

});



function createBubble(name,messageText)
{
    var message = document.createElement('li');
    
    var nameEl=document.createElement('span');
    nameEl.textContent=name;
    message.appendChild(nameEl);
    
    var messageEl = document.createElement('p');
    messageEl.textContent=messageText;
    message.appendChild(messageEl);

    var timeEl = document.createElement('time');
    timeEl.textContent='08.08.2019 20:22';
    message.appendChild(timeEl);

    return message;
}