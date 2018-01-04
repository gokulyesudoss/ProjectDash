var employeeCountContainer = document.getElementById("employeeCount");
var employeeListContainer = document.getElementById("employeeList");
var taskListContainer = document.getElementById("taskList");
var commentListContainer = document.getElementById("commentList");
var theadEmployee = document.getElementById("theadEmployee");
var theadTask = document.getElementById("theadTask");
var rabbitLink = document.getElementById("rabbitLink");
var irabbitLink = document.getElementById("irabbitLink");
var primeLink = document.getElementById("primeLink");
var moreEInfo = document.getElementById("moreEmployeeInfo");
var moreTInfo = document.getElementById("moreTaskInfo");
var moreCInfo = document.getElementById("moreCommentInfo");



var taskCountContainer = document.getElementById("taskCount");
var commentCountContainer = document.getElementById("commentCount");


//var trequestObject = new XMLHttpRequest();
//var crequestObject = new XMLHttpRequest();

window.onload = function(){
    getemployee();
    getTask();
    getComment();

} ;

// Get Overall Count

function getemployee(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/employee/');
    requestObject.onload=function(){
    var employeejsondata=JSON.parse(requestObject.responseText);
    var employeeCount = getCount(employeejsondata);
    employeeCountContainer.innerHTML = employeeCount;
    
};
    requestObject.send();
}

function getTask(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/task/');
    requestObject.onload=function(){
    var taskjsondata=JSON.parse(requestObject.responseText);
    var taskCount = getCount(taskjsondata);
    taskCountContainer.innerHTML = taskCount;
    
};
    requestObject.send();
}

function getComment(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/comment/');
    requestObject.onload=function(){
    var commentjsondata=JSON.parse(requestObject.responseText);
    var commentCount = getCount(commentjsondata);
    commentCountContainer.innerHTML = commentCount;
    
};
    requestObject.send();
}


function getCount(data){
    var count = Object.keys(data).length;
    return count;
}



//Display Full data
if(moreEInfo){
moreEInfo.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/employee/');
    requestObject.onload=function(){
    var employeejsondata=JSON.parse(requestObject.responseText);
    var employeeCount = getCount(employeejsondata);
    renderEmployeeData(employeejsondata);
    
};
    requestObject.send();
    
}); };


function renderEmployeeData(data){
    var htmlString = "<tr><td><b>Name</td><td><b>Team</td></tr>";
    for(i=0;i<data.length;i++)
        htmlString += "<tr>"+"<td>"+data[i].employeeName+"</td>"+"<td>"+data[i].employeeTeam.teamName+"</td>"+"</tr>";
        employeeListContainer.innerHTML = htmlString;
    
}
if(moreTInfo){
moreTInfo.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/task/');
    requestObject.onload=function(){
    var taskjsondata=JSON.parse(requestObject.responseText);
    var taskCount = getCount(taskjsondata);
    renderTaskData(taskjsondata);
    
};
    requestObject.send();
    
});};

function renderTaskData(data){
    var htmlString = "<tr><td><b>Task</td><td><b>Team</td></tr>";
    for(i=0;i<data.length;i++)
        htmlString += "<tr>"+"<td>"+data[i].taskName+"</td>"+"<td>"+data[i].taskTeam.teamName+"</td>"+"</tr>";
        taskListContainer.innerHTML = htmlString;
    
}

if(moreCInfo){
moreCInfo.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/comment/');
    requestObject.onload=function(){
    var commentjsondata=JSON.parse(requestObject.responseText);
    var commentCount = getCount(commentjsondata);
    renderCommentData(commentjsondata);
    
};
    requestObject.send();
    
});};

function renderCommentData(data){
    var htmlString = "";
    for(i=0;i<data.length;i++)
        htmlString  += "<tr><td><b>"+data[i].commentSender+"</b><br><i>"+data[i].commentSubject+"</i><br><p><h5>"+data[i].commentMessage+"</p></td></tr>";
    commentListContainer.innerHTML = htmlString;
    
}

 // Returning Team specific employee table

rabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/employee/');
    requestObject.onload=function(){
    var employeejsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.employeeTeam.teamName === "Rabbit Android"});
    var employeeCount = getCount(employeejsondata);
    employeeCountContainer.innerHTML = employeeCount;

    renderEmployeeData(employeejsondata);
    
};
    requestObject.send();
    
});

irabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/employee/');
    requestObject.onload=function(){
    var employeejsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.employeeTeam.teamName === "iRabbit"});
    var employeeCount = getCount(employeejsondata);   
    employeeCountContainer.innerHTML = employeeCount;


    renderEmployeeData(employeejsondata);
    
};
    requestObject.send();
    
});

primeLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/employee/');
    requestObject.onload=function(){
    var employeejsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.employeeTeam.teamName === "Prime"});
    var employeeCount = getCount(employeejsondata);
    employeeCountContainer.innerHTML = employeeCount;
    renderEmployeeData(employeejsondata);
    
};
    requestObject.send();
    
});

// Returning Team Specific Tasks table

rabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/task/');
    requestObject.onload=function(){
    var taskjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.taskTeam.teamName === "Rabbit Android"});
    var taskCount = getCount(taskjsondata);
    taskCountContainer.innerHTML = taskCount;
    renderTaskData(taskjsondata);
    
};
    requestObject.send();
    
});

irabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/task/');
    requestObject.onload=function(){
    var taskjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.taskTeam.teamName === "iRabbit"});
    var taskCount = getCount(taskjsondata);
    taskCountContainer.innerHTML = taskCount;
    renderTaskData(taskjsondata);
    
};
    requestObject.send();
    
});

primeLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/task/');
    requestObject.onload=function(){
    var taskjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.taskTeam.teamName === "Prime"});
    var taskCount = getCount(taskjsondata);
    taskCountContainer.innerHTML = taskCount;
    renderTaskData(taskjsondata);
    
};
    requestObject.send();
    
});

//Returning team specific comment table  

rabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/comment/');
    requestObject.onload=function(){
    var commentjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.commentTeam.teamName === "Rabbit Android"});
    var commentCount = getCount(commentjsondata);

    document.getElementById('overviewHeader').innerHTML = '<ul style=\"list-style: none;\"><li><h3>Rabbit Android</h3></li><li><h4><i>Rabbit Android deals with the testing of Rabbit Android app and its features.</i></h4></li><li><b>Manager : </b> Swapna Devi</li></ul>';
    commentCountContainer.innerHTML = commentCount;
    renderCommentData(commentjsondata);
    
};
    requestObject.send();
    
});

irabbitLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/comment/');
    requestObject.onload=function(){
    var commentjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.commentTeam.teamName === "iRabbit"});
    var commentCount = getCount(commentjsondata);
    document.getElementById('overviewHeader').innerHTML = '<ul style=\"list-style: none;\"><li><h3>iRabbit</h3></li><li><h4><i>iRabbit team deals with the testing of iRabbit iOS app and its features.</i></h4></li><li><b>Manager : </b> Aysha Fathima</li></ul>';
    commentCountContainer.innerHTML = commentCount;
    renderCommentData(commentjsondata);
    
};
    requestObject.send();
    
});

primeLink.addEventListener("click",function(){
    var requestObject = new XMLHttpRequest();
    requestObject.open('GET','http://127.0.0.1:8000/comment/');
    requestObject.onload=function(){
    var commentjsondata=JSON.parse(requestObject.responseText).filter(function(entry){return entry.commentTeam.teamName === "Prime"});
    var commentCount = getCount(commentjsondata);
        document.getElementById('overviewHeader').innerHTML = '<ul style=\"list-style: none;\"><li><h3>Prime</h3></li><li><h4><i>Prime team deals with the testing of Prime Now feature.</i></h4></li><li><b>Manager : </b> Rohit Ananthanarayanan</li></ul>';
    commentCountContainer.innerHTML = commentCount;
    renderCommentData(commentjsondata);
    
};
    requestObject.send();
    
});