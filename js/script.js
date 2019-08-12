Number.prototype.padLeft = function (template) {
    // console.log(typeof this,this);
    return template.substring(0, template.length - this.toString().length)
        + this.toString();
}

let time = new Date;

let timeString = time.getHours().padLeft('00') + ':'
        + time.getMinutes().padLeft('00');
times=document.querySelectorAll('.time');
times[0].innerHTML=timeString;
times[1].innerHTML=timeString;

let sendButton;
let name;
let sender=getName();


sendButton=document.querySelector('#sends1');
sendButton2=document.querySelector('#sends2');

//sendButton Listener
sendButton.addEventListener('click',function(){
let sender=getName();
let message;
if(sender=='Aydin')
    message=document.getElementById('whatDidYouSay1').value;
else
    message=document.getElementById('whatDidYouSay2').value;
if(message.length>0){
let messages2=document.getElementById('messageList2');//list of user2
let messages1=document.getElementById('messageList1');//list of user1
let messageNode=document.createElement('li');
messageNode.className = "sent";
let messageNode2=document.createElement('li');
messageNode2.className = "received";


let paraghraphNode=document.createElement('p');
let paraghraphNode2=document.createElement('p');


let txtNode=document.createTextNode(message);
let txtNode2=document.createTextNode(message);

paraghraphNode.appendChild(txtNode);
paraghraphNode2.appendChild(txtNode2);

messageNode.appendChild(paraghraphNode);
messageNode2.appendChild(paraghraphNode2);




// let nameNode=document.createElement('div');
// let nameTxtNode=document.createTextNode(getName());

// let nameNode2=document.createElement('div');
// let nameTxtNode2=document.createTextNode(getName());
// nameNode.appendChild(nameTxtNode);
// nameNode2.appendChild(nameTxtNode2);

// messageNode.appendChild(nameNode);
// messageNode2.appendChild(nameNode2);


let timeNode=document.createElement('time');
let timeTxtNode= document.createTextNode(timeString);

let timeNode2=document.createElement('time');
let timeTxtNode2= document.createTextNode(timeString);

timeNode.appendChild(timeTxtNode);
messageNode.appendChild(timeNode);

timeNode2.appendChild(timeTxtNode2);
messageNode2.appendChild(timeNode2);

let trash=document.createElement('div');
    trash.addEventListener('click',function() { 
        if(confirm('Confirm that you want to delete this message.'))
    this.parentNode.parentNode.removeChild(this.parentNode);
})
    let trash2=document.createElement('div');
    trash2.addEventListener('click',function() { 
        if(confirm('Confirm that you want to delete this message.'))
    this.parentNode.parentNode.removeChild(this.parentNode);
})
    trash.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'

    trash2.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'

    messageNode.appendChild(trash);
    messageNode2.appendChild(trash2);

messages1.appendChild(messageNode);
messages2.appendChild(messageNode2);

var scrollScreen2= document.querySelector('.side-2 .chat');
scrollScreen2.scrollTop = scrollScreen2.scrollHeight 
var scrollScreen1= document.querySelector('.side-1 .chat');

scrollScreen1.scrollTop = scrollScreen1.scrollHeight;

document.getElementsByTagName('input')[0].value="";
document.getElementsByTagName('input')[1].value="";

}},false);

sendButton2.addEventListener('click',function(){
    let sender=getName();
    let message;
    if(sender=='Aydin')
        message=document.getElementById('whatDidYouSay1').value;
    else
        message=document.getElementById('whatDidYouSay2').value;
    if(message.length>0){
    let messages2=document.getElementById('messageList2');//list of user2
    let messages1=document.getElementById('messageList1');//list of user1
    let messageNode=document.createElement('li');
      messageNode.className = "received";
    let messageNode2=document.createElement('li');
     messageNode2.className = "sent";
    
    
    let paraghraphNode=document.createElement('p');
    let paraghraphNode2=document.createElement('p');
    
    let txtNode=document.createTextNode(message,getName());
    let txtNode2=document.createTextNode(message,getName());
    
    paraghraphNode.appendChild(txtNode);
    paraghraphNode2.appendChild(txtNode2);
    
    messageNode.appendChild(paraghraphNode);
    messageNode2.appendChild(paraghraphNode2);
    
    
    
        //printing the sender name every time
    
    // let nameNode=document.createElement('div');
    // let nameTxtNode=document.createTextNode(getName());
    
    // let nameNode2=document.createElement('div');
    // let nameTxtNode2=document.createTextNode(getName());
    // nameNode.appendChild(nameTxtNode);
    // nameNode2.appendChild(nameTxtNode2);
    
    // messageNode.appendChild(nameNode);
    // messageNode2.appendChild(nameNode2);
    
    
    let timeNode=document.createElement('time');
    let timeTxtNode= document.createTextNode(timeString);
    
    let timeNode2=document.createElement('time');
    let timeTxtNode2= document.createTextNode(timeString);
    
    timeNode.appendChild(timeTxtNode);
    messageNode.appendChild(timeNode);
    
    timeNode2.appendChild(timeTxtNode2);
    messageNode2.appendChild(timeNode2);


    let trash=document.createElement('div');
    trash.addEventListener('click',function() { 
        if(confirm('Confirm that you want to delete this message.'))
    this.parentNode.parentNode.removeChild(this.parentNode);
})
    let trash2=document.createElement('div');
    trash2.addEventListener('click',function() { 
        if(confirm('Confirm that you want to delete this message.'))
    this.parentNode.parentNode.removeChild(this.parentNode);
})
    trash.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'

    trash2.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'

    messageNode.appendChild(trash);
    messageNode2.appendChild(trash2);
//    var a=document.createElement('select');

//    var disopt=document.createElement('option');

//    var disoptxt=document.createTextNode('');
//    disopt.appendChild(disoptxt);
//    disopt.setAttribute('value',"")
//    disopt.setAttribute('selected','selected');
//    disopt.setAttribute('disabled','disabled');

//    a.appendChild(disopt);
   
//    var a1=document.createElement('option');
//    var a2=document.createTextNode('delete');
//    a1.appendChild(a2);
//    a.appendChild(a1)

  




//    var b=document.createElement('select');

//    var disopt2=document.createElement('option');
//    var disoptxt2=document.createTextNode('');

//    disopt2.appendChild(disoptxt2);
   
//    a.appendChild(disopt2);
//    var b1=document.createElement('option');
//    var b2=document.createTextNode('delete');
//    b1.appendChild(b2);

//    b.appendChild(b1)

   

////    messageNode2.appendChild(b);

       


    
    messages1.appendChild(messageNode);
    messages2.appendChild(messageNode2);
    
    var scrollScreen2= document.querySelector('.side-2 .chat');
    scrollScreen2.scrollTop = scrollScreen2.scrollHeight 
    var scrollScreen1= document.querySelector('.side-1 .chat');
    
    scrollScreen1.scrollTop = scrollScreen1.scrollHeight;
    
    document.getElementsByTagName('input')[0].value="";
    document.getElementsByTagName('input')[1].value="";
    
    }},false);


function getName(){
    
    if(document.getElementsByTagName('input')[0].value.length>0){
        name='Aydin';
    return name;}
    else{
        name='Xatai';
        return name;
    }

        
    
    
        
    
}

   