
var winwidth = window.innerWidth
console.log(winwidth)
const mainEl = $("main")
var divclass ="";

function setdivclass(winwidth){
    winwidth== window.innerWidth;
    if(winwidth<600){ 
        divclass="grid-container600";
    }
    else if (winwidth<750){
        divclass="grid-container750";
    }
    else if (winwidth<900){ 
        divclass="grid-container900";
    }
    else  if (winwidth<1050){
        divclass="grid-container1200";}
    else {divclass="grid-containerplus"}

    return(divclass)

}

function styleset(winwidth){
    let divEl = document.getElementById("divproj");
    // Style the grid for window size
    let divclass = setdivclass(winwidth);
    mainEl.append(`
   <div id="divproj" class="${divclass}">
    <h4 id="p1">Work Projects</h4>
        <section  class="subproject" id="main-project-container" >
            <h4 style="color:white; margin:5px" > Bike Trails ~ <spam style="font-size: 24px">Find bike trails to explore! </spam>  </h4>
          </section>
        <section id="Project-1" class="subproject">
            <h5 style="color:black; font-weight:900; margin:0px 0px 0px 5px">Daily Scheduling</h5>
            <article>
            <p>Manage work day tasks hourly!</p>
            </article>
        </section>
        <section id="Project-2" class="subproject">
                <br><h5 style="color:red;font-weight:900">Quiz Game</h5>
                <p style="color:black;font-weight:900">Test your knowledge on this timed quiz. See if you can improve your best score!</p>
        </section>
        <section id="Project-3" class="subproject">
                <h6>Random Password Generator</h6>
        </section>
        <section id="Project-4" class="subproject">
                <h5 style="color:white">Daily Weather</h5>
                <p style="color:white">Current Weather and Forecast by City</p>
        </section>
      </div>
      <br>
      <br>
      <hr>
      <hr>
      <section id="bio" class="row left">
      <h6 class="col s2" style=""margin:auto""> About Me <a href="./resume.pdf">Resume</a> </h6>
      <p class="col s10" id="bioc2"></p>
  </section>
  <footer id="Contact-Me">
    <h1 id="contacts"> Contact Info: </h1>
        <ul id="AboutMe" class="">
            <li><p>(650) 880-7464</p>Phone Number</li> 
            <li><a href="mailto:gmcmurray1493@gmail.com">Email</a></li>    
            <li><a href="https://www.linkedin.com/in/george-mcmurray/">LinkedIn</a></li>               
        </ul>
  </footer>
    `)
}

styleset(winwidth)

document.addEventListener('DOMContentLoaded', function() {
    // Load Biographical information
    $('#bioc2').append(`
    <p class="list"> Formal Education : Duke ~ Electrical Engineer, UC Berkeley ~ Math Programming. </p>
    <p class="list"> Extensive Work Experience in Semiconductor Manufacturing /Logistics, IC Design, 
    Quality Assurance and Program Management. </p>
    <p class="list"> Coding Skills - HTML, CSS, JavaScript/JQuery, Node, Python, Minizinc </p>
    <p class="list"> Full Stack Bootcamp Certification - University of Washington
    `)
    // Add listener function for projects
    $('#main-project-container').click(function(){
    window.open("https://dn-vanguard.github.io/BikeTrails/","_blank")
    });
    $('#Project-1').click(function(){
        window.open("https://gmcmurray.github.io/DayScheduler/","_blank")
        });
    $('#Project-4').click(function(){
        window.open("https://gmcmurray.github.io/WeatherReport/","_blank")
        });
})


$(window).on('resize', function() {
    let divEl = document.getElementById("divproj");
    let winn = window.innerWidth;
   console.log("change window",winn,setdivclass(winn),divEl)
   divEl.classList.remove(...divEl.classList);
   divEl.classList.add(setdivclass(winn))
   if(winn<550){

   }
    });