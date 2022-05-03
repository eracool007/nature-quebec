
var idx = 0; // pour transition des slides, 0 pour avancer, 1 pour reculer
function loadCarrousel(){
    var numberOfSlides;
    var slide = document.getElementsByClassName("parc-container");
    numberOfSlides = slide.length;
    var slideIndex = randomSlide(numberOfSlides); 
    showSlides(slideIndex);
}

function showText(currentText, lang){
    var currentSectionText = document.getElementById(currentText).classList;
    currentSectionText.toggle('cache-ecran');
    var showTextBtnId = currentText+"-btn";
    var showTextBtn = document.getElementById(showTextBtnId);
    console.log(showTextBtn);
       
    if (currentSectionText.contains('cache-ecran')){
       if (lang==="fr"){
           showTextBtn.innerHTML = "Montrer les détails...";
       } else {
        showTextBtn.innerHTML = "Show Details...";
       }

    }else {
        if (lang==="fr"){
            showTextBtn.innerHTML = "Cacher les détails...";
        } else {
         showTextBtn.innerHTML = "Hide Details...";
        }
    }
}

function plusSlides(n){
    
    showSlides(slideIndex += n);
}

function showSlides(n){
    var slide = document.getElementsByClassName("parc-container");
    numberOfSlides = slide.length;
    
    var i;
    if (n > numberOfSlides-1) n=0;
           
    if (n < 0) n = numberOfSlides-1; 
        
    slideIndex = n;

    for(i=0; i<numberOfSlides; i++){
        if(i !== n ){
            slide[i].classList.add('hidden-slide');

        } else {
            slide[n].classList.remove('hidden-slide');
            slide[n].classList.add('active-slide'); 
        }
    }
}

function randomSlide(x) {
    
    var randomNumber;
    randomNumber = Math.floor((x) * Math.random());
    return randomNumber;
}

function initLanguage(){
    //alt-linguistique
    var currentPage = document.getElementById("alt-linguistique");
    document.getElementById("alt-linguistique").addEventListener("click", function(){
        redirectLanguage(currentPage)}
        );
}

function redirectLanguage(currentLocation){

    var page = currentLocation.getAttribute("data-location-id");
    var language = currentLocation.getAttribute("lang");
    if (language === "en") {
        window.location.href = `../en/${page}.html`;
    } else {
        window.location.href = `../fr/${page}.html`;
    }
}

function decorateText(){
    var elements = document.getElementsByTagName('label');
    var i, el, id, item;
    for (i=0; i<elements.length; i++){
        el = elements[i];
        id = el.htmlFor;
        item = document.getElementById(id);
        if (item && item.required){
            el.classList.add('required');
        }
    }
}