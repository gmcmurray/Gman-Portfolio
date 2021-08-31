
var winwidth = window.innerWidth
console.log(winwidth)
const mainEl = $("main")
var divclass = "";

// sets up grid to scale with window  width constant aspect ratio 
function setdivclass(winwidth) {
    let root = document.documentElement;
    let winn = window.innerWidth
    root.style.setProperty('--colrowsize',parseInt(winn/5))
    root.style.setProperty('--row1',parseInt(24+34*(winn-500)/700))
    root.style.setProperty('--row2',parseInt(32+46*(winn-500)/700))
    root.style.setProperty('--row3',parseInt(40+58*(winn-500)/700))
    root.style.setProperty('--row4',parseInt(48+70*(winn-500)/700))
    console.log(root)
}

function styleset(winwidth) {
    mainEl.empty();
    // Style the grid for window size
    let divclass = setdivclass(winwidth);
    mainEl.append(`
   <div id="divproj" class="grid-container">
    <h4 id="p1">API Projects</h4>
        <section  class="subproject" id="main-project-container" >
            <h5 style="color:blue; margin:5px" > Meal Plan ~ <spam style="font-size: 100%">Create your Menu! </spam>  </h5>
          </section>
        <section id="Project-1" class="subproject">
            <article>
              <h5 style="color:black; font-weight:900; margin:0px 0px 0px 5px;">Daily Scheduling</h5>
              <p>Manage work day tasks hourly!</p>
            </article>
        </section>
        <section id="Project-2" class="subproject">
                <h5 style="color:black;font-weight:900">Bike Trails</h5>
                <p style="color:black;font-weight:900">Find a trail near you and Explore!</p>
        </section>
        <section id="Project-3" class="subproject">
                <h6>Daily Weather</h6>
                <p style="color:white">Current Weather and Forecast by City</p>
        </section>
        <section id="Project-4" class="subproject">
        <div id="techblog">
                <h4 >Tech Blog</h4>
              </div>
        </section>
      </div>
      <br>
      <br>
      <hr>
      <hr>
    <section id="bio" class="bioinfo">
      <h5 id="bioinfotit" style=""margin:5px"> About Me <a href="./resume.pdf" target="_blank">Resume</a> </h5>
      <p  id="bioc2"></p>
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
    $('#bioc2').append(`
    <p class="list"> Formal Education : Duke ~ Electrical Engineer, UC Berkeley ~ Math Programming. </p>
    <p class="list"> Extensive Work Experience in Semiconductor Manufacturing /Logistics, IC Design, 
    Quality Assurance and Program Management. </p>
    <p class="list"> Coding Skills - HTML, CSS, JavaScript/JQuery, Node, Python, Minizinc </p>
    <p class="list"> Full Stack Bootcamp Certification - University of Washington
    `)
}

styleset(winwidth)

document.addEventListener('DOMContentLoaded', function () {
    // Load Biographical information
    $('#bioc2').append(`
    <p class="list"> Formal Education : Duke ~ Electrical Engineer, UC Berkeley ~ Math Programming. </p>
    <p class="list"> Extensive Work Experience in Semiconductor Manufacturing /Logistics, IC Design, 
    Quality Assurance and Program Management. </p>
    <p class="list"> Coding Skills - HTML, CSS, JavaScript/JQuery, Node, Python, Minizinc </p>
    <p class="list"> Full Stack Bootcamp Certification - University of Washington
    `)
    // Add listener function for projects
    $('#main-project-container').click(function () {
        window.open("https://meal-planner-5.herokuapp.com/", "_blank")
    });
    $('#Project-1').click(function () {
        window.open("https://gmcmurray.github.io/DayScheduler/", "_blank")
    });
    $('#Project-2').click(function () {
      window.open("https://dn-vanguard.github.io/BikeTrails/", "_blank")
    });
    $('#Project-3').click(function () {
      window.open("https://gmcmurray.github.io/WeatherReport/", "_blank")
    });

    $('#Project-4').click(function () {
        window.open("https://techblog-gmcmurray.herokuapp.com/", "_blank")
    });
})


$(window).on('resize', function () {
    let root = document.documentElement;
    let winn = window.innerWidth
    root.style.setProperty('--colrowsize',parseInt(winn/5))
    console.log(parseInt(winn/5))
    styleset(winn)
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  console.log()