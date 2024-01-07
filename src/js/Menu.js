function cargarCarrusel(){
    const images = [
        'src/img/assasins1.jpg',
        'src/img/assasins2.jpg',
        'src/img/assasins3.jpg',
        'src/img/assasins4.jpg',
        'src/img/assasins5.jpg',
        'src/img/assasins6.jpg',
        'src/img/assasins7.jpg',
        'src/img/assasins8.jpg',
    ];
    const intervalo_miliseg = 5000;
    let actual = 0;
    let imagen = document.querySelector('.carrusel-imagen');
    colocarImagen();
    // Botones para cambiar de imagen
    const botones = document.createElement('DIV');
    botones.classList.add('carrusel-botones');
    imagen.appendChild(botones);

    const retroceder = document.createElement('P');
    retroceder.textContent = '<';
    retroceder.classList.add('carrusel-retroceder');

    const delante = document.createElement('P');
    delante.textContent = '>';
    delante.classList.add('carrusel-delante');

    botones.appendChild(retroceder);
    botones.appendChild(delante);

    let intervalo = setInterval(reproducir, intervalo_miliseg);

    function reproducir(){
        if (actual >= images.length - 1){
            actual = 0;
        }else{
            actual++;
        }
        colocarImagen();
    }

    function colocarImagen(){
        imagen.style.backgroundImage = `url(${images[actual]})`;
    }

    retroceder.onclick = function(){
        if(actual == 0){
            actual = images.length -1;
        }else{
            actual--;
        }
        colocarImagen();
    }

    delante.onclick = function(){
        reproducir()
        colocarImagen();
    }

}


