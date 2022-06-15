

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
input = document.querySelector('input');
input.addEventListener("keypress", function(e){
if(e.charCode==13){
send();
}});

};

function send(){
  text='';
  input = document.querySelector('input');
  textarea = document.querySelector('textarea');
  if(text.value ==='\n'){
      textarea.value='Você:'+input.value+'\n';
      input.value='';
  }else{
    text=textarea.value;
    textarea.value=text+'Você:'+input.value+'\n';
    input.value='';
    textarea.scrollTop+=30;
  }
}

function limpar(){
  textarea = document.querySelector('textarea');
  textarea.value='';
}