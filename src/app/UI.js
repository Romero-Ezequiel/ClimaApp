/*Creo una clase y la exporto. En esta clase voy a manipular el DOM 
para seleccionar cada elemento por Id y voy a mostrar la información 
que me traigo desde la API. */
export class UI{

    constructor(){
        /*Estos son los elementos que me traen informacion y lo guardo
        en constantes para utilizarlos en el metodo render */
        this.locacion = document.getElementById('weather-location');
       // this.desc = document.getElementById('weather-description');
        this.centigrados = document.getElementById('weather-string');
        this.humedad = document.getElementById('weather-humidity');
        this.viento = document.getElementById('weather-wind');
    }
    //Con este metodo voy a mostrar los datos que obtengo del clima
    render(clima){
        this.locacion.textContent = clima.name + ' - ' + clima.sys.country;
        //this.desc.textContent = clima.weather[0]['icon'];
        this.centigrados.textContent = clima.main.temp + ' ºC';
        this.humedad.textContent = 'Humedad: '+ clima.main.humidity + ' %';
        this.viento.textContent = 'Viento: '+ clima.wind.speed + ' m/s';
    }
}