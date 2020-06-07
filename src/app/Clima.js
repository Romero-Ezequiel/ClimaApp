/* Creo una clase y la exporto, esta clase se va a encargar de poder
tener los metodos de poder obtener el clima, cambiar la localizacion
para volver obtener el clima.
*/
export class Clima{

    /* Este metodos constructor se ejecuta dada vez que se instancia la 
    clase. En este caso, le paso por parametro para poder obtener la 
    localizacion de dicha ciudad.*/
    constructor(ciudad, pais){
        //Aca utilizo la Key de la API que obtengo de Openweathermap
        //Para poder obtener la informacion.
        this.apiKey = 'd0f4018e3c992726849a47b78861105a';
        //Guardo en las propiedades lo que me esta pasando el constructor
        //por parametros, con esto obtengo la ciudad y el pais
        this.ciudad = ciudad;
        this.pais = pais;
    }

    /* Este metodo lo voy a ejecutar cada vez que quiero obtener la 
    informacion de cada ciudad. Y como va a tardar un tiempo utilizo
    async y await */
    async getClima(){
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URL);
        //Una vez que me traiga los datos lo voy almacenar en una 
        //variable data.
        const data = await response.json();
        return data;
    }
    
    changeLocation(ciudad, pais){
        this.ciudad = ciudad;
        this.pais = pais;
    }
}