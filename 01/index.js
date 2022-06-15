

function back(){
al = document.querySelector('#all');
array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
'https://images7.alphacoders.com/423/423348.jpg'];
x = parseInt(Math.random()*3)
al.style.background = "url('"+array[x]+"')";
}
cars=[];
function carr(){
    carros = parseInt(document.querySelector('.carro').value);
    cars = [
        {
            "name": "Nome",
            "fab": "Fabricante",
            "max":  'Max:-km',
            "qui": '-km',
            "ano": '----',
            "img": 'img/fusca.webp'
          },
        {
          "name": "Volvo V40 2.0 T4 Momentum",
          "fab": "Volvo",
          "max": 'Max: N/D',
          "qui": '0km',
          "ano": '2019',
          "img": 'img/volvo.png'
        },
          {
            "name": "Mercedes-Benz C300 Sport 2.0 Turbo",
            "fab": "Mercedes-Benz",
            "max": 'Max: 250 km/h',
            "qui": '0km',
            "ano": '2020',
            "img": 'img/mercedes.jpg'
          }
      ];
    nome = document.querySelector('#name');
    nome.innerHTML = cars[carros]['name'];
    fab = document.querySelector('#fab');
    fab.innerHTML = cars[carros]['fab'];
    max = document.querySelector('#vel');
    max.innerHTML = cars[carros]['max'];
    qui = document.querySelector('#qui');
    qui.innerHTML = cars[carros]['qui'];
    ano = document.querySelector('#ano');
    ano.innerHTML = cars[carros]['ano'];
    img = document.querySelector('#img');
    img.setAttribute('src', cars[carros]['img']);
    img.setAttribute('alt', cars[carros]['name']);
}



window.onload = function(){
back();
const carro = document.querySelector('.carro');
carro.addEventListener('change', (event) => {
    carr();
  });

};


