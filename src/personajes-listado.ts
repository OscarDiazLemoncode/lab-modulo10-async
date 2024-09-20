import { obtenerListadoPersonajes } from './personajes.api';
import { Personaje } from './personajes.model';

const crearElementoImg = (src: string, title: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = `http://localhost:3000/${src}`;
  img.title = title;
  img.alt = title;
  return img;
};

const crearTitulo = (texto: string): HTMLParagraphElement => {
  const titulo = document.createElement('p');
  titulo.textContent = texto;
  return titulo;
};

const crearParrafo = (texto: string[]): HTMLParagraphElement => {
  const parrafo = document.createElement('p');
  parrafo.textContent = texto.join(' , ');
  return parrafo;
};

const crearFichaPersonaje = (personaje: Personaje): HTMLDivElement => {
  const fichaPersonaje = document.createElement('div');
  fichaPersonaje.classList.add('ficha_personaje');
  const img = crearElementoImg(personaje.imagen, personaje.nombre);
  fichaPersonaje.appendChild(img);
  const nombre = crearTitulo(personaje.nombre);
  fichaPersonaje.appendChild(nombre);
  const apodo = crearTitulo(personaje.apodo);
  fichaPersonaje.appendChild(apodo);
  const especialidad = crearTitulo(personaje.especialidad);
  fichaPersonaje.appendChild(especialidad);
  const habilidades = crearParrafo(personaje.habilidades);
  fichaPersonaje.appendChild(habilidades);
  const amigo = crearTitulo(personaje.amigo);
  fichaPersonaje.appendChild(amigo);
  return fichaPersonaje;
};

const mostrarListadoPersonajes = async (): Promise<void> => {
  const personajesApi = await obtenerListadoPersonajes();
  const listadoPersonajes = document.querySelector('.listado_personajes');
  if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
    personajesApi.forEach((personaje) => {
      const fichaPersonaje = crearFichaPersonaje(personaje);
      listadoPersonajes.appendChild(fichaPersonaje);
      console.log(personaje);
    });
  }
};

document.addEventListener('DOMContentLoaded', mostrarListadoPersonajes);
