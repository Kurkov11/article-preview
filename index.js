var clicked = false;
var desktopMode;
document.getElementById('share-circle').onclick = function(){
    if(!clicked && !desktopMode){
        clicked = true;
        document.getElementById('about').style.backgroundColor = 'hsl(217, 19%, 35%)';
        document.getElementById('share-circle').style.backgroundColor = 'hsl(214, 17%, 51%)';
        document.getElementById('share-icon').style.display = 'none';
        document.getElementById('share-icon-white').style.display = 'inline';
        document.getElementById('avt-name-date').style.display = 'none';
        document.getElementById('share-options').style.display = 'flex';
        document.getElementById('share-options').style.alignItems = 'center';
        document.getElementById('share-options').style.gap = '0.6rem';
    }else if(clicked && !desktopMode){
        clicked = false;
        document.getElementById('about').style.backgroundColor = 'white';
        document.getElementById('share-icon-white').style.display = 'none';
        document.getElementById('share-icon').style.display = 'inline';
        document.getElementById('share-circle').style.backgroundColor = 'hsl(210, 46%, 95%)';
        document.getElementById('avt-name-date').style.display = 'flex';
        document.getElementById('share-options').style.display = 'none';
    }else if(!clicked && desktopMode){
        document.getElementById('share-circle').style.backgroundColor = 'hsl(214, 17%, 51%)';
        document.getElementById('share-icon').style.display = 'none';
        document.getElementById('share-icon-white').style.display = 'inline';
        document.getElementById('share-options-2').style.display = 'inline';
        clicked = true;
    }else if(clicked && desktopMode){
        document.getElementById('share-circle').style.backgroundColor = 'hsl(210, 46%, 95%)';
        document.getElementById('share-options-2').style.display = 'none';
        document.getElementById('share-icon-white').style.display = 'none';
        document.getElementById('share-icon').style.display = 'inline';
        clicked = false;
    }
}
document.addEventListener('DOMContentLoaded', init);

function init(){
    let query = window.matchMedia('(width >= 900px)');
    if(query.matches){
        desktopMode = true;
    }else{
        desktopMode = false;
    }
}