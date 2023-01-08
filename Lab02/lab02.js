//Task01

var longitudeCoords = 0;
var latitudeCoords = 0;


function goPosition() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        longitudeCoords = position.coords.longitude;
        latitudeCoords = position.coords.latitude;
        var url = "http://maps.google.com/maps?q=" + latitudeCoords + "," + longitudeCoords;
        alert(url);
        window.open(url, '_blank');

    });

}


// Task02

document.getElementById("submitBtn").addEventListener("click", saveUserData)

function saveUserData(e) {
    e.preventDefault();
    
    let user={
        emailInput:document.getElementById("email").value,
        passwordInput:document.getElementById("password").value,
     };
  
    let users= getUserData()
    
    for (let index = 0; index < users.length; index++) {
        if (users[index].emailInput == user.emailInput){
           console.log("Repeated Mail")
           user= ""
        }
    }

    users.push(user);
    setUserData(users);
}

function setUserData(users) {
    localStorage.setItem('users',JSON.stringify(users));
}

function getUserData() {
    let users=localStorage.getItem("users");
    if(!(users)){
        users=[]
    }else{
        users= JSON.parse(users);
    }

  return users;
     
}



// Task03
/*
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(65, 72, 40, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(205, 72, 40, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(135, 170, 80, 0, 2 * Math.PI)
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(105, 140, 20, 0, 2 * Math.PI)
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(160, 140, 20, 0, 2 * Math.PI)
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(136, 180, 35, 0, 1 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(135, 350, 100, 0, 2 * Math.PI)
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 400, 20, 0, 2 * Math.PI)
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 300, 20, 0, 2 * Math.PI)
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 350, 20, 0, 2 * Math.PI)
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(55, 300, 30, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(210, 300, 30, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(65, 450, 40, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(205, 450, 40, 0, 2 * Math.PI)
ctx.fill();
ctx.stroke();
*/
