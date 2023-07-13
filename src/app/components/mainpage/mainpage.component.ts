import { Component } from '@angular/core';

class Movie {
  name!: string;
  img!: string;
  calification!: string;
  synopsis!: string;
  hovered!: boolean;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
  movies: Movie[] = [
    {
    name: "Jhon Wick 4",
    img: "https://pontik.com/wp-content/uploads/2021/12/John-Wick-Capitulo-4-Lionsgate-Pontik-poster-promocional.jpg",
    calification: "4.5",
    synopsis: "John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.",
    hovered: false,
  },
  {
    name: "Creed III",
    img: "https://www.lahiguera.net/cinemania/pelicula/10465/creed_iii-cartel-10767.jpg",
    calification: "3.8",
    synopsis: "Adonis Creed ya ha llegado a la cima de su carrera y no tiene nada más que demostrar en el mundo del boxeo. Convertido en un ídolo de este boxeo pasa sus días rodeado de su familia y seres queridos. Sin embargo, todo cambiará cuando regrese un fantasma de su infancia. Su amigo de juventud, Damián, acaba de salir de la cárcel y desea demostrar todo lo que ha aprendido de boxeo estos años. Por ello, querrá enfrentarse en el cuadrilátero con su antiguo amigo. Adonis Creed tendrá que enfrentarse a este adversario, que no solo quiere quitarle su título de boxeador, sino que desea acabar con él.",
    hovered: false,
  },
  {
    name: "Misión de rescate 2",
    img: "https://style.shockvisual.net/wp-content/uploads/2023/05/Mision-de-Rescate-2.jpg",
    calification: "4.1",
    synopsis: "Después de sobrevivir a todo lo que le sucede en la primera película, Rake regresa como mercenario australiano de operaciones encubiertas al que se encomienda otra misión suicida: rescatar a la maltrecha familia de un despiadado gángster georgiano de la prisión donde se encuentra recluida.",
    hovered: false,
  },
  {
    name: "Sin límites",
    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ac7452a271f7598fdb4d7f320cc214d772581c0308c78193e0d594fb2c5378ca._RI_TTW_.jpg",
    calification: "4.8",
    synopsis: "El escritor Eddie Morra se enfrenta al desempleo, al rechazo de su novia y está convencido de que no tiene futuro. La situación cambia cuando un amigo le presenta la MDT, una droga que mejora las habilidades mentales. Gracias al MDT, Eddie alcanza la cima del mundo financiero. Él atrae la atención de un magnate que cree poder usar a Eddie para hacer una fortuna, pero los efectos secundarios y una disminución en sus poderes amenazan la buena suerte de Eddie",
    hovered: false,
  },
  {
    name: "Jack, El Destripador La Historia no Contada",
    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5a2f1e763fcb1b1568b23ac5328841ddb6337b4bc94935578168b474b6f179a._RI_TTW_.jpg",
    calification: "3.6",
    synopsis: "Un detective y un médico forense unen fuerzas para resolver una serie de horribles asesinatos en el Londres victoriano, pero uno de ellos alberga un secreto mortal.",
    hovered: false,
  },
  {
    name: "Transformers V",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/GJVMN6WPA5EO3E2SDA4GGUFICI.png",
    calification: "3.9",
    synopsis: "Una aventura alrededor del mundo con los Autobots que introducirá una nueva facción de Transformers - los Maximals - en la batalla existente en la Tierra entre Autobots y Decepticons.",
    hovered: false,
  },
  {
    name: "La Liga de la Justicia",
    img: "https://cinedidymedome.co/resenas/wp-content/uploads/2021/03/zack-snyders-justice-league-poster-2021-683x1024.jpg",
    calification: "4.4",
    synopsis: "Decidido a asegurarse de que el sacrificio final de Superman no fue en vano, Bruce Wayne alinea fuerzas con Diana Prince con planes para reclutar un equipo de metahumanos para proteger al mundo de una amenaza de proporciones catastróficas que se aproxima.",
    hovered: false,
  },
  {
    name: "Godzilla vs Kong",
    img: "https://chathamcommunique.com/wp-content/uploads/2021/04/dedtzt7-90a09188-c61a-418e-9f16-8e05244c7051-581x900.png",
    calification: "4",
    synopsis: "En un momento en que los monstruos caminan por la Tierra, la lucha de la humanidad por su futuro coloca a Godzilla y Kong en un curso de colisión que verá a las dos fuerzas más poderosas de la naturaleza en el planeta enfrentarse en una batalla espectacular para las edades. Mientras Monarch se embarca en una peligrosa misión en un terreno inexplorado y descubre pistas sobre los orígenes de los Titanes, una conspiración humana amenaza con borrar a las criaturas, tanto buenas como malas, de la faz de la tierra para siempre.",
    hovered: false,
  },
  {
    name: "Monster Pets",
    img: "https://m.media-amazon.com/images/I/81vkCZDxbrS._RI_.jpg",
    calification: "4.5",
    synopsis: "En ‘Mascotas Monstruosas’, Pipis, el adorable cachorro de Drac, del tamaño de un monstruo, tiene más energía que nunca y ¡sólo quiere jugar a la pelota! Desafortunadamente, Drac está demasiado ocupado haciendo malabares con sus deberes en el hotel, por lo que está decidido a encontrar una mascota monstruo como compañero para su enorme y peludo amigo. Después de una serie de desajustes, el plan de Drac acaba mal cuando Pipis elige un compañero muy dudoso.",
    hovered: false,
  },
  {
    name: "Gran tiburón blanco",
    img: "https://es.web.img3.acsta.net/pictures/21/06/22/10/55/4996970.jpg",
    calification: "3.2",
    synopsis: "Lo que parecía una excursión fantástica en un hidroavión, rápidamente se convirtió en la peor pesadilla de sus cinco pasajeros al quedarse varados en medio del océano a kilómetros de la costa. Ahora, el grupo tratará desesperadamente de sobrevivir intentando llegar a tierra antes de que se terminen los suministros y los víveres con los que cuentan o de ser capturados por los tiburones que se encuentran debajo de su embarcación.",
    hovered: false,
  },
  {
    name: "Troll",
    img: "https://www.infobae.com/new-resizer/2UzuCgcYunvTWeeBw6Drza8MO7M=/768x1138/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/HCNM7WUJTVDVNOEVO2O4QHGC7A.png",
    calification: "3.8",
    synopsis: "Cuando una explosión en las montañas noruegas despierta a un antiguo trol, las autoridades designan a una osada paleontóloga para que evite que cause estragos en el lugar.",
    hovered: false,
  }
  ];

  toggleHover(movie: Movie) {
    movie.hovered = !movie.hovered; // Alternar el valor de 'hovered' al pasar el mouse sobre la película
  }
}

