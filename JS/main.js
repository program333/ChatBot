
//Application Bot types
//1. Let user starts the conversation
//2. ChatBot starts the conversation (asking questions)
//3. Assistant



//elements
var sendBtn = document.getElementById('sendBtn');
var textbox  =document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message :"",counter:0};



chatBotSendMessage("Please choose an option:")
initializeOptions1();

var questionToAsk = [
    {"question":"what's your name?","answer":""},
    {"question":"how old are you?","answer":""},
    {"question":"what's your job title?","answer":""},
    {"question":"where are you from?","answer":""}

];

var PythonQuestions = [
    {"question":"What is the difference between list and tuples in Python?","answer":""},
    {"question":"What are the key features of Python?","answer":""},
    {"question":"What type of language is python? Programming or scripting?","answer":""},
    {"question":"What are the key features of Python?","answer":""},
    {"question":"What are the benefits of using Python?","answer":""},
    {"question":"What are Dict and List comprehensions?","answer":""},
    {"question":"What is the difference between .py and .pyc files?","answer":""},
    {"question":"What is slicing in Python?","answer":""},
    {"question":"How is memory managed in Python?","answer":""},
    {"question":"What is namespace in Python?","answer":""},



];

var JavaQuestions = [
    {"question":"What are the advantages of Packages in Java?","answer":""},
    {"question":"What is an object?","answer":""},
    {"question":"What is the constructor?","answer":""},
    {"question":"How many types of constructors are used in Java?","answer":""},
    {"question":"What is the purpose of a default constructor?","answer":""},
    {"question":"Does constructor return any value?","answer":""},
    {"question":"Can you make a constructor final","answer":""},
    {"question":"Can we assign the reference to this variable?","answer":""},
    {"question":"How can constructor chaining be done using this keyword?","answer":""},

    

];

var HTMLQuestions = [
    {"question":"Do all HTML tags have an end tag?","answer":""},
    {"question":"What is formatting in HTML?","answer":""},
    {"question":"How many types of heading does an HTML contain?","answer":""},

];


function initializeOptions1(){

    let options = [
        {number: 1, choice: "Ask Personal Questions"},
        {number: 2, choice: "Coding Questions"},
          
    ];

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('text-white');
    messageElement.style.backgroundColor="rgb(33, 35, 35)";
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
   
    for(let i=0; i<options.length;i++){
        messageElement.innerHTML += "<br>"+
        "<span style="+"margin-top:10px ; padding:10px"+">"+ options[i].number+" - "+options[i].choice +"</span>";
    }

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    setTimeout(function(){
        chatContainer.appendChild(messageElement);
    },1000);
   
    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

  
//askQuestions();

function askQuestions(){

    if(questionToAsk.length > user.counter){
    setTimeout(function(){
        chatBotSendMessage(questionToAsk[user.counter].question);
        user.counter++;
    },1000);

    // console.log(questionToAsk[user.counter-1]);
}
}


function getPythonQuestions(){

    if(PythonQuestions.length > user.counter){
    setTimeout(function(){
        chatBotSendMessage(PythonQuestions[user.counter].question);
        user.counter++;
    },1000);

    // console.log(questionToAsk[user.counter-1]);
}
}

function getJavaQuestions(){

    if(JavaQuestions.length > user.counter){
    setTimeout(function(){
        chatBotSendMessage(JavaQuestions[user.counter].question);
        user.counter++;
    },1000);

    // console.log(questionToAsk[user.counter-1]);
}
}

function getHTMLQuestions(){

    if(HTMLQuestions.length > user.counter){
    setTimeout(function(){
        chatBotSendMessage(HTMLQuestions[user.counter].question);
        user.counter++;
    },1000);

    // console.log(questionToAsk[user.counter-1]);
}
}


function initializeOptions2(){
    
    setTimeout(function(){
        chatBotSendMessage("Which language you want to start?");
    },1000);
    let options = [
        {choice: "Python"},
        {choice: "Java"},
        {choice: "HTML"}
    ];

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('text-white');
    messageElement.style.backgroundColor="rgb(33, 35, 35)";
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
   
    for(let i=0; i<options.length;i++){
        messageElement.innerHTML += "<br>"+
        "<span style="+"margin-top:10px ; padding:10px"+">"+options[i].choice +"</span>";
    }

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    
   
    chatContainer.appendChild(messageElement);
   

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}






var arrayOfPossibleMessages = [
    {"message":"are you a robot?","response":"Yes I am a robot, but Im a good one. Let me prove it. How can I help you?"},
    {"message":"how are you? / how are you doing/going","response":"I am Great"},
    {"message":"who made you?","response":"The legend,Devindra"},
    {"message":"which languages can you speak?","response":"Present I know only English.But I am also learning other languages too"},
    {"message":"what day is it today?","response":"Today is yesterdays after day"},
    {"message":"what would you not tell me?","response":"You are looking good"},
    {"message":"share a total of five positive things about me.","response":"1.Dynamic"},
    {"message":"do you sleep early","response":"No I don't"}
    
    
];



function chatBotSendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('text-white');
    messageElement.style.backgroundColor="rgb(33, 35, 35)";
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
   

    messageElement.innerHTML ="<span>Bot: </span>"+
    "<span style="+"margin-top:10px ; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);

     //scroll to last message
     chatContainer.scrollTop = chatContainer.scrollHeight;

}

function sendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('text-white');
    messageElement.style.backgroundColor="rgb(91, 137, 91)";
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML ="<span>You: </span>"+
    "<span style="+"margin-top:10px ; padding:10px"+">"+ messageText +"</span>";


   messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}



function processMessage(){
    
    if(user.message.length >5){
     //array of results
    var result = arrayOfPossibleMessages.filter(val => val.message.includes(user.message.toLowerCase()));
    
    if(result.length > 0){
        var response = result[0].response;

        setTimeout(function(){
            chatBotSendMessage(response);
        });  
    }
    
    }
    else if(user.message =="how" || user.message =="what"){
        setTimeout(function(){
            chatBotSendMessage("?");
        },1000);  
       
    }
    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    
}

sendBtn.addEventListener('click',function(e){
   
    if(textbox.value==""){
          
    }else{

        let messageText = textbox.value; 
        user.message = messageText;
        
        sendMessage(messageText);
        textbox.value="";

        

      //  askQuestions();

      //  processMessage();
     
      if(messageText==='1'){
            alert("You chose General talk with me");   
            askQuestions();
            
      }
      else if(messageText ==='2'){
        initializeOptions2();
       
      }
     
      else if(messageText === 'Python'){
          alert("You chose Python. Are you ready?"); 
           getPythonQuestions();
          
           
       }
       else if(messageText === 'HTML'){
        alert("You chose HTML. Are you ready?"); 
         getHTMLQuestions();
      }
      else if(messageText === 'Java'){
        alert("You chose JAVA. Are you ready?"); 
         getJavaQuestions();
     }
      else{
        processMessage();
        initializeOptions1();
       
      }
    }

});


textbox.addEventListener('keypress', function(e){
    //if user hits the enter button on keyboard 
    if(e.which ==13){
        if(textbox.value==""){
          
        }else{
    
            let messageText = textbox.value; 
            user.message = messageText;
            
            sendMessage(messageText);
            textbox.value="";
    
            
    
          //  askQuestions();
    
          //  processMessage();
         
          if(messageText==='1'){
                alert("You chose General talk with me");   
                askQuestions();
                
          }
          else if(messageText ==='2'){
            initializeOptions2();
           
          }else if(messageText === 'Python'){
              alert("You chose Python. Are you ready?"); 
               getPythonQuestions();
              
               
           }
           else if(messageText === 'HTML'){
            alert("You chose HTML. Are you ready?"); 
             getHTMLQuestions();
          }
          else if(messageText === 'Java'){
            alert("You chose JAVA. Are you ready?"); 
             getJavaQuestions();
         }
          else{
            processMessage();
            initializeOptions1();
            
          }
        }
    }
});
