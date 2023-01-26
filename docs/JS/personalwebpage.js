var d = new Date();
document.getElementById("date").innerHTML = d;

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



var li_elements=document.querySelectorAll("nav ul li");
var item_elements=document.querySelectorAll(".item");
for(var i=0; i<li_elements.length;i++){
  li_elements[i].addEventListener("click", function(){
    li_elements.forEach(function(li){
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value=this.getAttribute("data-li");
    item_elements.forEach(function(item){
      item.style.display="none";
    });
    if(li_value =="home"){
      document.querySelector("." + li_value).style.display="block";
    }
    else if(li_value=="skills"){
      document.querySelector("." + li_value).style.display="block";
    }
    else if(li_value=="projects"){
      document.querySelector("."+li_value).style.display="block";
      alert("Projects page is loading......\n Click OK to continue.")
    }
    else if(li_value=="gallery"){
      document.querySelector("."+li_value).style.display="block";
    }
    else if(li_value=="goal"){
      document.querySelector("."+li_value).style.display="block";
    }
    else if(li_value=="contact"){
      document.querySelector("."+li_value).style.display="block";
      document.getElementById("details").innerHTML="";
    }
    else{
      console.log("");
    }
  });
}



function validation(){
  var firstname=document.getElementById("firstname").value;
  var lastname=document.getElementById("lastname").value;
  var gender1=document.getElementById("gender").value;
  var gendertext=gender.options[gender.selectedIndex].text;
  var age=document.getElementById("age").value;
  var email=document.getElementById("email").value;
  var website=document.getElementById("website").value;
  var message = document.getElementById("message").value;
  var atposition=email.indexOf("@");
  var dotposition=email.lastIndexOf(".");
  var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  document.getElementById("details").innerHTML="";

  if(!firstname.match(/\S/)){
    document.getElementById("fmsg").innerHTML="Enter Firstname";
    document.getElementById("firstname").value="";
  }else if (firstname.length>25) {
    document.getElementById("fmsg").innerHTML="Enter less than 25 characters";
  }else{
    document.getElementById("fmsg").innerHTML="";
  }

  if(!lastname.match(/\S/)){
    document.getElementById("msg1").innerHTML="Enter Lastname";
    document.getElementById("lastname").value="";
  }else if (lastname.length>25) {
    document.getElementById("msg1").innerHTML="Enter less than 25 characters";
  }else{
    document.getElementById("msg1").innerHTML="";
  }

  if(gender1==1){
    document.getElementById("msg2").innerHTML="Select Gender";
  }else{
    document.getElementById("msg2").innerHTML="";
  }

  if(!age.match(/\S/)){
    document.getElementById("msg3").innerHTML="Enter Age";
    document.getElementById("age").value="";
  }else if(isNaN(age)){
    document.getElementById("msg3").innerHTML="Enter Age in number";
  }else if (age < 18){
    document.getElementById("msg3").innerHTML="Enter greater than 18";
  }else if(age > 100){
    document.getElementById("msg3").innerHTML="Enter less than 100";
  }else{
    document.getElementById("msg3").innerHTML="";
  }

  if(!email.match(/\S/)){
    document.getElementById("msg4").innerHTML="Enter an Email";
    document.getElementById("email").value="";
  }else if(atposition < 1 || dotposition < atposition+2 ||dotposition+2 >= email.length||email.length >50){
    document.getElementById("msg4").innerHTML="Enter valid Email";
  }else{
    document.getElementById("msg4").innerHTML="";
  }

  if(!website.match(/\S/)){
    document.getElementById("msg5").innerHTML="Enter website";
    document.getElementById("website").value="";
  }else if (pattern.test(website)!==true) {
    document.getElementById("msg5").innerHTML="Enter valid Url";
  }else{
    document.getElementById("msg5").innerHTML="";
  }

  if(!message.match(/\S/)){
    document.getElementById("msg6").innerHTML="Enter Comment";
    document.getElementById("message").value="";
  }else if (message.length > 255){
    document.getElementById("msg6").innerHTML="Enter less than 255 characters";
  }
  else {
    document.getElementById("msg6").textContent="";
  }

  if(document.getElementById("fmsg").innerHTML!=""){
    document.getElementById("firstname").focus();
    document.getElementById("firstname").select();
  }else if (document.getElementById("msg1").innerHTML!=""){
    document.getElementById("lastname").focus();
    document.getElementById("lastname").select();
  }else if (document.getElementById("msg2").innerHTML!=""){
    document.getElementById("gender").focus();
  }else if (document.getElementById("msg3").innerHTML!=""){
    document.getElementById("age").focus();
    document.getElementById("age").select();
  }else if (document.getElementById("msg4").innerHTML!=""){
    document.getElementById("email").focus();
    document.getElementById("email").select();
  }else if (document.getElementById("msg5").innerHTML!=""){
    document.getElementById("website").focus();
    document.getElementById("website").select();
  }else if (document.getElementById("msg6").innerHTML!=""){
    document.getElementById("message").focus();
    document.getElementById("message").select();
  }

  if(document.getElementById("fmsg").innerHTML=="" &&
  document.getElementById("msg1").innerHTML=="" &&
  document.getElementById("msg2").innerHTML=="" &&
  document.getElementById("msg3").innerHTML=="" &&
  document.getElementById("msg4").innerHTML=="" &&
  document.getElementById("msg5").innerHTML=="" &&
  document.getElementById("msg6").innerHTML=="" ){
    document.getElementById("details").innerHTML+="<br /><br />GIVEN CONTACT DETAILS ARE :<br />"
    document.getElementById("details").innerHTML+="<br />First Name : "+firstname;
    document.getElementById("details").innerHTML+="<br />Last Name : "+lastname;
    document.getElementById("details").innerHTML+="<br />Age : "+age;
    document.getElementById("details").innerHTML+="<br />Gender : "+gendertext;
    document.getElementById("details").innerHTML+="<br />E-mail : "+email;
    document.getElementById("details").innerHTML+="<br />Website : "+website;
    document.getElementById("details").innerHTML+="<br />Comment : "+message;
    resetform();
    return true;
  }
  document.getElementById("details").innerHTML="";

}




function resetform(){
  document.getElementById("myform").reset();
  document.getElementById("fmsg").textContent="";
  document.getElementById("msg1").textContent="";
  document.getElementById("msg2").textContent="";
  document.getElementById("msg3").textContent="";
  document.getElementById("msg4").textContent="";
  document.getElementById("msg5").textContent="";
  document.getElementById("msg6").textContent="";
}

//When mouse over to contact button, It shows email address
function contact(e) {
  console.log(e);
  e.innerHTML="wowcreatorsofficial@gmail.com";
  //document.getElementById('button').innerHTML="wowcreatorsofficial@gmail.com";
}

//When mouse out from the button, It shows "contact me"
function contact1() {
  document.getElementById('button').innerHTML="Contact Me!";
}


//on mouseover in project Page
function mouseOverp1() {
  document.getElementById("color1").style.color = "#B3F592";
}

function mouseOutp1() {
  document.getElementById("color1").style.color = "black";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function skilllist(){
  var urskill=document.getElementById("yourskill").value;
  if(!urskill.match(/\S/)){
    document.getElementById("skillmsg").innerHTML="Enter Skill";
    document.getElementById("yourskill").value="";
    document.getElementById("yourskill").focus();
  }else{

  var x = document.getElementById("skillset");
  var option = document.createElement("option");
  option.text = document.getElementById("yourskill").value;
  if((document.getElementById("skillset").options.length)==4){
    x.remove(x.length-1)
    x.add(option,x[0]);
  }
  else{x.add(option,x[0]);}
  document.getElementById("yourskill").value='';
}
}
function skillreset(){
  document.getElementById("skillmsg").innerHTML="";
}

// Download file as a .pdf or .doc
function resumedownload(){
  if (document.getElementById("foption").value=="doc"){
    window.location.assign("Poonkodi Resume.docx");
  }
  else{

    //  window.location.href="PoonkodiResume.pdf";

    window.open("Poonkodi Resume.pdf");

    //  window.location.assign("PoonkodiResume.pdf");
  }
}
