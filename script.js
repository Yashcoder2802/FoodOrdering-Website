let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

function MyFunction(){
  let x = document.getElementById("name").value;
  if (x == "") {
    alert("Name must be filled out");
  }

  y=document.getElementById("emailid").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(y.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    }

}
function Submitnow ()
  {
    alert ("Your Order has been placed successfully")
  };