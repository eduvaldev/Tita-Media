var tabButtons = document.querySelectorAll(".section-tags .option-tags button ");
var tabConts = document.querySelectorAll(".section-tags .content-tag .tag-panel");
var btnNav = document.querySelector(".nav-toggle");
var listNav = document.querySelector("#nav");
var contInfo = document.querySelectorAll(".cont-info");
var contHidden = document.querySelector(".content-tag");
var buttonShow = document.querySelector("#show-more");
var toggleShow = 0;
var toggleNav = 0;

var allArr = [];
var branArr = [];
var webArr = [];
var photArr = [];
var appArr = [];

window.onload = function(){
  var contLoad = document.querySelector('#load-content');

  contLoad.style.visibility = 'hidden';
  contLoad.style.opacity = '0';
  
  obtDatos();
}

function obtDatos (){

  const xhttp = new XMLHttpRequest();
  
 xhttp.open('GET', '../data/data.json', true);
  
  xhttp.send();
  
  xhttp.onreadystatechange = function (){
    if( this.readyState == 4 && this.status == 200 ){
      let resData = JSON.parse(this.responseText);
      allArr = allArr.concat(resData);
      branArr = resData.filter( obj => obj.type === "branding");
      webArr = resData.filter( obj => obj.type === "web");
      photArr = resData.filter( obj => obj.type === "photography");
      appArr = resData.filter( obj => obj.type === "app");
      showTabs (0);
    }
  }
}

function showTabs (panelOption){

  tabButtons.forEach(elemt => {
    elemt.style.backgroundColor = '';
    elemt.style.color = '';
  }) 
  tabButtons[panelOption].style.backgroundColor = '#FC758C';
  tabButtons[panelOption].style.color = '#ffff';

  tabConts.forEach(elemt => {
    elemt.style.display = 'none';
  })
  tabConts[panelOption].style.display = 'block';

  if(panelOption === 0){
    contInfo[panelOption].innerHTML = '';
    for( let obj of allArr){
      contInfo[panelOption].innerHTML += `
      <div class="card-back h-${obj.height}">
        <div class="card">
          <div class="img-back">
            <img src=${obj.img}>
          </div>
          <div class="cont-card">
            <h3>${obj.title}</h3>
            <hr>
            <p>${obj.type}</p>
          </div>
        </div>
      </div>
      `
    }
  } else if(panelOption === 1){
    contInfo[panelOption].innerHTML = '';
    for( let obj of branArr){
      contInfo[panelOption].innerHTML += `
      <div class="card-back h-${obj.height}">
        <div class="card">
          <div class="img-back">
            <img src=${obj.img}>
          </div>
          <div class="cont-card">
            <h3>${obj.title}</h3>
            <hr>
            <p>${obj.type}</p>
          </div>
        </div>
      </div>
      `
    }
  }else if(panelOption === 2){
    contInfo[panelOption].innerHTML = '';
    for( let obj of webArr){
      contInfo[panelOption].innerHTML += `
      <div class="card-back h-${obj.height}">
        <div class="card">
          <div class="img-back">
            <img src=${obj.img}>
          </div>
          <div class="cont-card">
            <h3>${obj.title}</h3>
            <hr>
            <p>${obj.type}</p>
          </div>
        </div>
      </div>
      `
    }
  }else if(panelOption === 3){
    contInfo[panelOption].innerHTML = '';
    for( let obj of photArr){
      contInfo[panelOption].innerHTML += `
      <div class="card-back h-${obj.height}">
        <div class="card">
          <div class="img-back">
            <img src=${obj.img}>
          </div>
          <div class="cont-card">
            <h3>${obj.title}</h3>
            <hr>
            <p>${obj.type}</p>
          </div>
        </div>
      </div>
      `
    }
  }else if(panelOption === 4){
    contInfo[panelOption].innerHTML = '';
    for( let obj of appArr){
      contInfo[panelOption].innerHTML += `
      <div class="card-back h-${obj.height}">
        <div class="card">
          <div class="img-back">
            <img src=${obj.img}>
          </div>
          <div class="cont-card">
            <h3>${obj.title}</h3>
            <hr>
            <p>${obj.type}</p>
          </div>
        </div>
      </div>
      `
    }
  }
}

function hiddenShow (){

  if(toggleShow === 0){
    contHidden.style.height = 'auto';
    contHidden.style.overflow = 'visible';
    buttonShow.innerHTML = `
      Show Me Less
    `
    toggleShow = 1;
  }else{
    contHidden.style.height = '1000px';
    contHidden.style.overflow = 'hidden';
    buttonShow.innerHTML = `
      Show Me More
    `
    toggleShow = 0;
  }

}

function showNav(){
  
  if(toggleNav === 0){
    btnNav.classList.add('active');
    listNav.classList.add('active');
    toggleNav = 1;
  }else if(toggleNav === 1){
    btnNav.classList.remove('active');
    listNav.classList.remove('active');
    toggleNav = 0;
  }
}