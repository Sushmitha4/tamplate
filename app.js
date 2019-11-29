/*console.log('hello Javascript');

//popup way
alert('hello javascript');
confirm('hello confirm method');
prompt('hello user load before page loading....');

//document way
document.write('hello javascript document');
document.body.innerHTML = "hello javascript";
document.body.innerText = "hello inner text";*/

/*var username = "Sushmitha";
var username1 = 'Sushmitha';
var username2 = `Name
                Place
                <h1>hello</h1>
                <input type = "text" placeholder = "username">`

console.log(username);
console.log(typeof username);*/

/*var name = "Anu";
var age = 20;
var company = "Qspiders";
var salary = 10000;

console.log(typeof name);
console.log(typeof age);

document.write("My name is " + name + " my age is " + age + " I work for "+ company + " salary " + salary);

document.write(`<h1>My name is ${name}  </h1>
<p style="color:red">My age is ${age + 1} </p>
<b style="color:green">I work for ${company} </b>
<p style="color:blue"> ${salary} </p>
`);*/

/*document.write(`
<html>
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
.row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.heading.heading-icon {
    display: block;
}
.padding-lg {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
}
.practice-area .inner{ 
     border:1px solid #999999; 
	 text-align:center; 
	 margin-bottom:28px; 
	 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    border: 0;
}
.practice-area .inner h3{ 
    color:#3c3c3c; 
	font-size:24px; 
	font-weight:500;
	font-family: 'Poppins', sans-serif;
	padding: 10px 0;
}
.practice-area .inner p{ 
    font-size:14px; 
	line-height:22px; 
	font-weight:400;
}
.practice-area .inner img{
	display:inline-block;
}


.our-webcoderskull{
  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
  
}
.our-webcoderskull .cnt-block{ 
   float:left; 
   width:100%; 
   background:#fff; 
   padding:30px 20px; 
   text-align:center; 
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px; 
   height:148px; 
   border-radius:100%; 
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
   width:148px; 
   height:148px; 
   border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
   color:#2a2a2a; 
   font-size:20px; 
   font-weight:500; 
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
   color:#2a2a2a; 
   font-size:13px; 
   line-height:20px; 
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
    display:inline-block; 
	width:auto; 
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
   font-size:24px; 
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
   color:#025a8e;
}
</style>
</head>

<body>
<section class="our-webcoderskull padding-lg">
  <div class="container">
    <div class="row heading heading-icon">
        <h2>Our Team</h2>
    </div>
    <ul class="row">
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
            <h3><a href="#">Kappua </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
       </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
    </ul>
  </div>
</section>
</body>
</html>
`);
*/

/*
//String data type
var str1 = "Sushmitha";
var str2 = 'manu';
var str3 = `vinu`;
var str4 = new String("abcd"); //object data type

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4.valueOf);

//Number data type
var num = 10;
num = 10.5;
num = 10 / 5;
var num1 = new Number(2);

console.log(typeof num);
console.log(typeof num1);

//Undefined data type
var username;

console.log(typeof username);

//Null data type
var testnull = null;

console.log(typeof testnull);

//Boolean data type
var bool = true;
var bool1 = new Boolean();

console.log(typeof bool);
console.log(typeof bool1);
console.log(typeof bool1.valueOf);
*/

/*
var array = ["java", "python", undefined, null, {}, function () {}, true];
var str = "hello javascript";

console.log(array.length);
console.log(array[0]);

for(var i = 0; i < array.length; i++){
  console.log(array[i])
}

console.log(typeof array);
console.log(Array.isArray(array));
console.log(Array.isArray(str));

var splitType = str.split("");
var splitType1 = str.split(" ");
var splitType2 = str.split("  ");

console.log(splitType);
console.log(splitType.length);
console.log(splitType1);
console.log(splitType2);

var es6waytoconvertstringintoArray = Array.from(str);

console.log(es6waytoconvertstringintoArray);

var arraylikeObject = Array.from(str);

var [newway] = str;

console.log(newway);
console.log(typeof newway);

var [...newway1] = str;

console.log(typeof newway);
console.log(Array.isArray(newway1));

newway1.forEach(function(x){
  console.log(x);
});

var array2 = ["abcd", "manu"];

var totalArray = array.concat(array2); //es5 way
console.log(totalArray);

var es6way = [array, array2];
var es6way1 = [...array, ...array2];
var es6way2 = [...array, ...array2, ...str]; //es6 way

console.log(es6way);
console.log(es6way1);
console.log(es6way2);

var arrayIntoString = array.toString();
var onemorewaytoconvertArrayintoString = array.join();
var onemorewaytoconvertArrayintoString1 = array.join(`+`);
var onemorewaytoconvertArrayintoString2 = array.join(`😃😄ANU`);

console.log(arrayIntoString);
console.log(typeof arrayIntoString);

console.log(onemorewaytoconvertArrayintoString);
console.log(typeof onemorewaytoconvertArrayintoString);

console.log(onemorewaytoconvertArrayintoString1);

console.log(onemorewaytoconvertArrayintoString2);

var array3 = Array.of("abcd", "efgh");
var array4 = Array(7);

console.log(array3);
console.log(array4);

var empData = {
  name : 'anu',
  age : 20,
  company : 'Testyantra',
  salary : 30000,
  designation : 'nodejs developer',
  skills : ["java", "python", "nodejs"]
}

empData.name = "manu";                                                   

console.log(empData);

console.log(typeof empData);

console.log(empData["name"]);
console.log(empData["age"]);

console.log(empData.designation);
console.log(empData.salary);
console.log(empData.skills);

console.log(empData.skills[0]);

var empData1 = [
  {
  name : 'anu',
  age : 20,
  company : 'Testyantra',
  salary : 30000,
  designation : 'nodejs developer',
  skills : ["java", "python", "nodejs"]
},
{
  name : 'manu',
  age : 22,
  company : 'Jspiders',
  salary : 20000,
  designation : 'angular developer',
  skills : ["java", "python", "nodejs"],
  username: function(){
    console.log("hello username");
  }
}
];

console.log(empData1);
*/

/*
window
  .fetch("http://api.github.com/users")

  .then(data => {
    data
      .json()

      .then(users => {
        var output = ""

      console.log(item)
    }).catch(err => console.log(err))
  })

  .catch(err => console.log(err)); //JSON in javascript
*/
/* 
var obj = {
  name : 'manu',
  age : 20,
  company : 'testyantra',
  salary : 20000
}

var obj = new Object(); //constructor way of creating object

obj.name = "abcd";
obj.age = 20;
obj.company = "qspiders";
obj.salary = 20000;

console.log(obj);

var test = Object.entries(obj);

console.log(test);

var empData = {
  empId : 'typ1001',
  empName : "Manu",
  empAge : 22,
  empSalary : 25000,
  empCompany : "Jspiders",
  empLocation : "Bangalore",
  empDesignation : "Fullstack developer",
  empDoj : new Date('2015/05/4'),
  empEducation : 'B.E.',
  empDetails : function() {
    document.write(`
    <h1> My name is  💀${this.empName} </h1>

    <ul>
      <li> My age is ${this.empAge} </li>
      <li> I am getting ${this.empSalary} </li>
      <li> I waork for ${this.empCompany} </li>
      <li> ${this.empLocation} </li>
      <li> ${this.empDesignation} </li>
      <li> ${this.empDoj} </li>
      <li> ${this.empEducation} </li>
    </ul>
    `);   
  }
};

empData.empDetails();
*/

/*
const users = {
  name : "manu",
  age : 20,
  company : "testyantra",
  salary : 20
};

users.name = "anu";

console.log(users);

for(var i = 0; i <= 10; i++){
  var username = "manu";
  console.log(i);
}

console.log(username); //global scope

function user() {
  var age = 20; //function scope, local scope
  console.log(age);
}

user();

for(var i = 0; i <= 10; i++){
  let username = "manu"; //blocked scope
  console.log(i);
}

console.log(username);

let username = "abcd";
username = "manu";

console.log(username);
*/


//Ananmous function
/*
function() {

}

//Naming function
function username() {
  alert("hello function");
} //called part

username(); //calling part
*/
/*
(function() {
  document.write(`
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html>
    
<head>
	<title>My Awesome Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
</head>
<!--Coded with love by Mutiullah Samim-->

<style>
/* Coded with love by Mutiullah Samim 
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #60a3bc !important;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #f39c12;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #60a3bc;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #c0392b !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
  background-color: #c0392b !important;
}

</style>
<body>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

`)
})
()

{ } //ecmascript-6 onwards
*/

/*
function loadTemplate() {
  document.write(`
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  
  <!DOCTYPE html>
  <html>
      
  <head>
    <title>My Awesome Login Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
  </head>

  <style>
  /* Coded with love by Mutiullah Samim 
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #60a3bc !important;
  }
  .user_card {
    height: 400px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #f39c12;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .form_container {
    margin-top: 100px;
  }
  .login_btn {
    width: 100%;
    background: #c0392b !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: #c0392b !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
  }

  </style>
  <!--Coded with love by Mutiullah Samim-->
  <body>
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" name="" class="form-control input_user" value="" placeholder="username">
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" value="" placeholder="password">
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customControlInline">
                  <label class="custom-control-label" for="customControlInline">Remember me</label>
                </div>
              </div>
                <div class="d-flex justify-content-center mt-3 login_container">
             <button type="button" name="button" class="btn login_btn">Login</button>
             </div>
            </form>
          </div>
      
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Don't have an account? <a href="#" class="ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
  
  `)
}

function loadTemplate1() {
  var template1 = document.getElementById("template1");
  console.log(template1);

  template1.innerHTML = (`
  <html>
  <head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  .row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.heading.heading-icon {
    display: block;
}
.padding-lg {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
}
.practice-area .inner{ 
     border:1px solid #999999; 
	 text-align:center; 
	 margin-bottom:28px; 
	 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    border: 0;
}
.practice-area .inner h3{ 
    color:#3c3c3c; 
	font-size:24px; 
	font-weight:500;
	font-family: 'Poppins', sans-serif;
	padding: 10px 0;
}
.practice-area .inner p{ 
    font-size:14px; 
	line-height:22px; 
	font-weight:400;
}
.practice-area .inner img{
	display:inline-block;
}


.our-webcoderskull{
  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
  
}
.our-webcoderskull .cnt-block{ 
   float:left; 
   width:100%; 
   background:#fff; 
   padding:30px 20px; 
   text-align:center; 
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px; 
   height:148px; 
   border-radius:100%; 
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
   width:148px; 
   height:148px; 
   border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
   color:#2a2a2a; 
   font-size:20px; 
   font-weight:500; 
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
   color:#2a2a2a; 
   font-size:13px; 
   line-height:20px; 
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
    display:inline-block; 
	width:auto; 
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
   font-size:24px; 
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
   color:#025a8e;
}

</style>
</head>

<body>

<section class="our-webcoderskull padding-lg">
  <div class="container">
    <div class="row heading heading-icon">
        <h2>Our Team</h2>
    </div>
    <ul class="row">
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
            <h3><a href="#">Kappua </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
       </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style="height: 349px;">
            <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
            <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
            <p>Freelance Web Developer</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
    </ul>
  </div>
</section>
</body>
</html>
  `);
}

function loadTemplate2() {
  var template2 = document.getElementById("template2");
  console.log(template1);

  template1.innerHTML = (`
  <html>
  <head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  <style>
  @import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block{
    background: #DE6262;  /* fallback for old browsers 
background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
float:left;
width:100%;
padding : 50px 0;
}
.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
.container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}
.carousel-inner{border-radius:0 10px 10px 0;}
.carousel-caption{text-align:left; left:5%;}
.login-sec{padding: 50px 30px; position:relative;}
.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
.login-sec .copy-text i{color:#FEB58A;}
.login-sec .copy-text a{color:#E36262;}
.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
.login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
.btn-login{background: #DE6262; color:#fff; font-weight:600;}
.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;}
  

  </style>
  </head>

  <body>

<section class="login-block">
    <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Login Now</h2>
		    <form class="login-form">
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" placeholder="">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" placeholder="">
  </div>
  
  
    <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      <small>Remember Me</small>
    </label>
    <button type="submit" class="btn btn-login float-right">Submit</button>
  </div>
  
</form>
<div class="copy-text">Created with <i class="fa fa-heart"></i> by <a href="http://grafreez.com">Grafreez.com</a></div>
		</div>
		<div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
            <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
    </div>
  </div>
            </div>	   
		    
		</div>
	</div>
</div>
</section>

  </body>
  </html>
  `);
}

function loadTemplate3() {
  var template3 = document.getElementById("template3");
  console.log(template1);

  template1.innerHTML = (`
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Responsive Sticky Navbar</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>

      <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
  }
  
  body {
        font-family: "Helvetica Neue",sans-serif;
        font-weight: lighter;
  }
  
  header {
        width: 100%;
        height: 100vh;
        background: url(https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Beautiful-Full-HD-Wallpaper-Download-Free-PIC-WPE0010098.jpg) no-repeat 50% 50%;
        background-size: cover;
  }
  
  .content {
        width: 94%;
        margin: 4em auto;
        font-size: 20px;
        line-height: 30px;
        text-align: justify;
  }
  
  .logo {
        line-height: 60px;
        position: fixed;
        float: left;
        margin: 16px 46px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 2px;
  }
  
  nav {
        position: fixed;
        width: 100%;
        line-height: 60px;
  }
  
  nav ul {
        line-height: 60px;
        list-style: none;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;
        color: #fff;
        padding: 0;
        text-align: right;
        margin: 0;
        padding-right: 40px;
        transition: 1s;
  }
  
  nav.black ul {
        background: #000;
  }
  
  nav ul li {
        display: inline-block;
        padding: 16px 40px;;
  }
  
  nav ul li a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
  }
  
  .menu-icon {
        line-height: 60px;
        width: 100%;
        background: #000;
        text-align: right;
        box-sizing: border-box;
        padding: 15px 24px;
        cursor: pointer;
        color: #fff;
        display: none;
  }
  
  @media(max-width: 786px) {
  
        .logo {
              position: fixed;
              top: 0;
              margin-top: 16px;
        }
  
        nav ul {
              max-height: 0px;
              background: #000;
        }
  
        nav.black ul {
              background: #000;
        }
  
        .showing {
              max-height: 34em;
        }
  
        nav ul li {
              box-sizing: border-box;
              width: 100%;
              padding: 24px;
              text-align: center;
        }
  
        .menu-icon {
              display: block;
        }
  
  }
  
      </style>
   </head>
   <body>
      <div class="wrapper">
         <header>
            <nav>
               <div class="menu-icon">
                  <i class="fa fa-bars fa-2x"></i>
               </div>
               <div class="logo">
                  LOGO
               </div>
               <div class="menu">
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
               </div>
            </nav>
         </header>
         <div class="content">
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
         </div>
      </div>
   </body>
</html>
  
  `);
}

function loadTemplate4() {
  var template4 = document.getElementById("template4");
  console.log(template1);

  template1.innerHTML = (`
  <html>
  <head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
  <style>
  .btn:focus, .btn:active, button:focus, button:active {
    outline: none !important;
    box-shadow: none !important;
  }
  
  #image-gallery .modal-footer{
    display: block;
  }
  
  .thumb{
    margin-top: 15px;
    margin-bottom: 15px;
  }
  </style>

  </head>

  <body>

<div class="container">
	<div class="row">
		<div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Test1"
                   data-image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>



            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>



            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice"
                   data-image="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                         alt="Another alt text">
                </a>
            </div>
        </div>


        <div class="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="image-gallery-title"></h4>
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img id="image-gallery-image" class="img-responsive col-md-12" src="">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary float-left" id="show-previous-image"><i class="fa fa-arrow-left"></i>
                        </button>

                        <button type="button" id="show-next-image" class="btn btn-secondary float-right"><i class="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
  </body>
  </html>

  `);
}
*/

/*
//Function with parameters/ arguments
function Username(name, age, company, salary) {
  console.log(`
  My name is ${name} and
  My age is ${age}
  I work for ${company} and
  I am getting ${salary} 
  `);
}

Username("abcd", 20, "Jspiders", 20000); //parameter values

//Function with return statement
function addNumbers(a, b){
  var c = a + b;

  return c;
}

console.log(addNumbers(3, 5));

//Function with default values
//es5 way
function numbers(num){
  if(num === undefined){
    num = 10 * 2;
  }
  console.log(num);
}

numbers();

//es6 way
function numberwithEs6(num1 = 10){
  console.log(num1);
}

numberwithEs6();

//Function argument objects
function names(args) {
  console.log("my name is", args);
  console.log(arguments);
  console.log(typeof arguments);
  console.log(arguments.length);

  var [...names] = arguments;
  names.forEach(function(name) {
    console.log(name);
  });
}

names("abcd", "efgh", "ijkl", "mnop");

username();

function username() {
  console.log("My name is Manu");
} //function hoisting

company();

var company = function() {
  console.log("My company is Jspiders");
}; //error

var x = "hello x"; //global

function show() {
  console.log('hello show function')
  console.log(x);

  var outerText = "hello outer text"; //local

  function innerBlock() {
    var innerText = "hello innerText";

    console.log(innerText);
    console.log(outerText); //closure - function intersecting with another function
    console.log(x);
  }
  innerBlock();
}

 show();

var username = function() {
  console.log("hello username");
}; //normal function
username();

var usernamewithES6 = () => {
  console.log("hello arrow function");
}; //es6 arrow function
usernamewithES6();

var usernamewithES6 = name; //this is fat arrow function with one parameter

var usernamewithES61 = () => console.log("hello arrow function1"); //es6 arrow function
usernamewithES61();

console.log(username("manu")); //normal function calling


//es6 arrow function
var usernamewithES62 = (name) => {
  return name;
}; //es6 fat arrow calling...
console.log(usernamewithES62('abcd'));


var usernamewithES63 = name => name; //es6 fat arrow calling...
console.log(usernamewithES63('defg'));


var username = function() {
  return arguments;
} //normal function
console.log(username("manu")); //normal function calling

//es6 arrow function
var usernamewithEs6 = () => {
  return arguments;
};
console.log(usernamewithEs6("Abcd")); //es6 fat arrow calling...


var usernamewithEs6 = (args) => {
  return args;
};
console.log(usernamewithEs6("Abcd", "Manu"));

var usernamewithEs6 = (...args) => {
  return args;
};
console.log(usernamewithEs6("Abcd", "Manu")); //rest parameters (array)\

var usernamewithEs6 = (...args) => {
  return args.forEach(x => console.log(x));
};
console.log(usernamewithEs6("Abcd", "Manu")); 
*/

/*
var user1 = {
  name: "Anu",
  age: 20,
  company: "Testyantra",
  salary: 20000,

  userInfo: function() {
    console.log(`My name is ${this.name}
    and age is ${this.age}
    work for ${this.company}
    I am getting ${this.salary}
    `)
  }
};
user1.userInfo(); //normal function

var user2 = {
  name: "Anu",
  age: 20,
  company: "Testyantra",
  salary: 20000,

  userInfo: () => {
    console.log(`My name is ${this.name}
    and age is ${this.age}
    work for ${this.company}
    I am getting ${this.salary}
    `)
  }
};
user2.userInfo(); //fat arrow function will not bind this keyword

var user2 = {
  name: "Anu",
  age: 20,
  company: "Testyantra",
  salary: 20000,

  userInfo(){
    console.log(`My name is ${this.name}
    and age is ${this.age}
    work for ${this.company}
    I am getting ${this.salary}
    `)
  }
};
user2.userInfo(); //this is method, inside object we can also call methods

var user3 = {
  name: "Anu",
  age: 20,
  company: "Testyantra",
  salary: 20000,

  userInfo: () => {
    console.log(`My name is ${user3.name}
    and age is ${user3.age}
    work for ${user3.company}
    I am getting ${user3.salary}
    `)
  }
};
user3.userInfo(); //fat arrow function instead of this write user3
*/

/*
var firstNumber = document.getElementById(firstnumber);
console.log(firstNumber);
*/

/*
function addNumbers() {
  var firstNumber = parseInt(document.getElementById("firstnumber").value); // parseInt() converts string into number

  var secondNumber = parseInt(document.getElementById("secondnumber").value);
  document.getElementById('result').value = firstNumber + secondNumber;
  submitOK = "true";

  if(firstNumber.length === 0){
    alert("First number is required");
    submitOK = "false";
  }

  if(isNaN(firstNumber)){
    alert('Please add number');
  }

  if(isNaN(secondNumber)){
    alert('Please add number');
  }
}
*/

/*
//callback function
function show() {
  console.log('hello show function');
}

function showcallback(callback){
  callback();
}//called

showcallback(show); //calling
*/

/*
//function as a constructor
function user(name, age, company, salary){
  this.name = name;
  this.age = age;
  this.company = company;
  this.salary = salary;
}

//new String(); //built-in constructor

let user1 = new user("manu", 20, "Jspiders", 30000);
let user2 = new user("vinu", 24, "Qspiders", 20000);

console.log(user1);
console.log(user2);
*/

/*
//Array methods:- pop()
var languages = ["Java", "Python", "NodeJS", "Ruby"];
languages.pop();
console.log(languages);

//shift()
var languages = ["Java", "Python", "NodeJS", "Ruby"];
languages.shift();
console.log(languages);

//push()
var languages = ["Java", "Python", "NodeJS", "Ruby"];
languages.push("Angular");
console.log(languages);

//unshift()
var languages = ["Java", "Python", "NodeJS", "Ruby"];
languages.unshift("React");
console.log(languages);

//splice()
var languages = ["Java", "Python", "NodeJS", "Ruby"];
//languages.splice(1, 1);
//languages.splice(1, 1, "Cython");
languages.splice(1, 0, "Angular");
//languages.splice(1); //Do not use, it is dangerous
console.log(languages);

//for loop -> this is not a method or function
var languages = ["Java", "Python", "NodeJS", "Ruby"];
for(var i = 0; i < languages.length; i++){
  console.log(languages[i]);
}

//foreach() ->this is a function
var languages = ["Java", "Python", "NodeJS", "Ruby"];
languages.forEach(function(value, index, array){
  /*console.log(value);
  console.log(index);
  console.log(array);
  console.log(`${index} : ${value}`);
}
);
*/

/*
var employees = [
  {
    emp_id: "cap01",
    emp_name: "Manu",
    emp_photo: "https://cdn.pixabay.com/photo/2018/11/12/18/44/thanksgiving-3811492__340.jpg",
    emp_age: 20,
    emp_gender: '👦male',
    emp_company: "Capgemini",
    emp_salary: 30000,
    emp_designation: "web developer",
    emp_doj: new Date('2015/05/05'),
    emp_location: "Bangalore",
    emp_education: "BE"
  },

  {
    emp_id: "cap02",
    emp_name: "Anu",
    emp_photo: "https://cdn.pixabay.com/photo/2016/12/23/07/58/holiday-table-1926946__340.jpg",
    emp_age: 21,
    emp_gender: '👧female',
    emp_company: "Capgemini",
    emp_salary: 20000,
    emp_designation: "java developer",
    emp_doj: new Date('2016/06/06'),
    emp_location: "Mysore",
    emp_education: "BTech"
  },

  {
    emp_id: "cap03",
    emp_name: "Anu",
    emp_photo: "https://cdn.pixabay.com/photo/2019/11/12/15/47/aesthetic-4621334__340.jpg",
    emp_age: 22,
    emp_gender: '👧female',
    emp_company: "Capgemini",
    emp_salary: 25000,
    emp_designation: "fullstack developer",
    emp_doj: new Date('2017/07/07'),
    emp_location: "Mangalore",
    emp_education: "BE"
  },

  {
    emp_id: "cap04",
    emp_name: "Raju",
    emp_photo: "https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408__340.jpg",
    emp_age: 23,
    emp_gender: '👦male',
    emp_company: "Capgemini",
    emp_salary: 15000,
    emp_designation: "ui developer",
    emp_doj: new Date('2015/05/05'),
    emp_location: "Mandya",
    emp_education: "BTech"
  }
]

var emp = [];
employees.forEach(empData => {
  var test = emp.push(`
  <div class="card">
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>

    <span class="badge badge-success float-right">${empData.emp_id}</span>
    <br>
    <span class="badge badge-primary float-right">${empData.emp_designation}</span>
    <br>

    <li class="list-group-item">Salary : ${empData.emp_salary}</li>
    <li class="list-group-item">Location : ${empData.emp_location}</li>
    <li class="list-group-item">Education : ${empData.emp_education}</li>
    <li class="list-group-item">Age : ${empData.emp_age}</li>
    <li class="list-group-item">Company : ${empData.emp_company}</li>
    <li class="list-group-item">Gender : ${empData.emp_gender}</li>
    <li class="list-group-item">Date of joining : ${empData.emp_doj.toString()}</li>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `);
});

document.getElementById('template').innerHTML = emp;
*/

var names = ["manu", "anu", "shashi", "varun"];
var num = [10, 50, 30, 60, 1, 30, 54, 200];
var str = "hello javascript";

var test = names.reverse();
var test1 = num.reverse();

var test2 = num.sort();
var numsort = num.sort(function(a,b) {
  return a - b;
});

var stringreverse = [...str].reverse().join("");

console.log(test);
console.log(test1);
console.log(test2);
console.log(numsort);
console.log(stringreverse);

function username(str){
  return [...str].reverse().join("");
}
console.log(username("abcd"));