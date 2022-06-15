function back(){
al = document.querySelector('#all');
array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
'https://images7.alphacoders.com/423/423348.jpg'];
x = parseInt(Math.random()*3)
al.style.background = "url('"+array[x]+"')";
}


window.onload = function(){
back();
const input = document.querySelector('input');
const log = document.getElementById('values');
input.addEventListener('input', updateValue);

function updateValue(e) {
  x = e.target.value;
  xlet='';
  for(n in x){
    if(!isNaN(x[n]) || x[n]==='-'){
      xlet+=x[n];
    }
  }
  log.innerHTML = xlet;
  return xlet;
}

input.addEventListener('keyup', logKey);

function logKey(e) {
  vale=input.value;
  vale = vale.replace(/[^\d]/g, "");
	vale = vale.replace(/(\d{5})(\d{3})/, "$1-$2");
  forvale='';
  if(vale.length>9){
    for(n=0;n<9;n++){
      forvale+=vale[n];
    }
    vale=forvale;
  }
  input.value=vale;
}
};
