
const winwidth = window.innerWidth
console.log(winwidth)
const  divEl = document.getElementById("divproj")
console.log(divEl)
const mainEl = $("main")
var divclass ="";
    
function styleset(winwidth){
    // Style the grid for window size
    if(winwidth<600){ 
        divclass="grid-container600";
    }
    else if (winwidth<750){
        divclass="grid-container750";
    }
    else if (winwidth<900){ 
        divclass="grid-container900";
    }
    else  if (winwidth<1200){
        divclass="grid-container1200";}
    else {divclass="grid-container1200"}
    mainEl.append(`
    <section id="bio">
        <h6 class="col s3" style="margin:auto">About Me:<button id="resum">Resume</button></h6>
        <p class=" col s9" id="bioc2"></p>
    </section>
   <div id="divproj" class="${divclass}">
    <h4 id="p1">Work Projects</h4>
        <section class="subproject" id="main-project-container" >
            <h4> Bike Trails </h4>
            <article>
              <p>Explore local bike trails in your city and find your next trail ride.  Check out the next 7 day weather forecast and set a date! </p>
            </article>
          </section>
        <section id="Project-1" class="subproject">
            <h5>Daily Scheduling</h5>
            <article>
            <p>Track your todo's for the Day and manage your working day by the hour!</p>
            </article>
        </section>
        <section id="Project-2" class="subproject">
                <h5>Quiz Game</h5>
                <p>Test your knowledge on this timed quiz. See if you can improve your best score!</p>
        </section>
        <section id="Project-3" class="subproject">
                <h5>Password Generator</h5>
                <p>Generate random password with user inputs on characters</p>
        </section>
        <section id="Project-4" class="subproject">
                <h5>Daily Weather</h5>
                <p>Weather by City - Current and Forecast</p>
        </section>
      </div>
    `)
}

styleset(winwidth)

document.addEventListener('DOMContentLoaded', function() {
    // Load Biographical information
    $('#bioc2').append(`
    <p class="list"> Formal Education Electrical Engineer and Applied Statistics. </p>
    <p class="list"> Extensive Work Experience in Semiconductor Manufacturing /Logistic, IC Design 
    Quality Assurance and Program Management. </p>
    <p class="list"> Coding Skills - HTML, CSS, JS, Node, Python, Minizinc </p>
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


// $(window).on('resize', function() {
//     var win = $(this);
//     if (win.width() > 600) {
//         $('main').removeClass('col');
//         $('main').addClass('row');
    
//     } else {
//         $('main').removeClass('row');
//         $('main').addClass('col');
//     }
//     });