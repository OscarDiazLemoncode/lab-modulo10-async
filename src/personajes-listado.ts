import {
  obtenerListadoPersonajes,
  obtenerListadoPersonajesFiltrado,
} from './personajes.api';
import { Personaje } from './personajes.model';

const crearElementoImg = (src: string, title: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = `http://localhost:3000/${src}`;
  img.title = title;
  img.alt = title;
  return img;
};

const crearTitulo = (texto: string): HTMLParagraphElement => {
  const titulo = document.createElement('h2');
  titulo.textContent = texto;
  return titulo;
};
const crearParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement('p');
  parrafo.textContent = texto.toString();
  return parrafo;
};

const crearFichaPersonaje = (personaje: Personaje): HTMLDivElement => {
  const fichaPersonaje = document.createElement('div');
  fichaPersonaje.classList.add('ficha_personaje');
  const nombre = crearTitulo(personaje.nombre);
  fichaPersonaje.appendChild(nombre);
  const img = crearElementoImg(personaje.imagen, personaje.nombre);
  fichaPersonaje.appendChild(img);
  const especialidad = crearParrafo(`Especialidad: ${personaje.especialidad}`);
  fichaPersonaje.appendChild(especialidad);
  const habilidades = crearParrafo(`Habilidades: ${personaje.habilidades}`);
  fichaPersonaje.appendChild(habilidades);
  const amigo = crearParrafo(`Amigo: ${personaje.amigo}`);
  fichaPersonaje.appendChild(amigo);
  return fichaPersonaje;
};

const mostrarListadoPersonajes = async (): Promise<void> => {
  const personajesApi = await obtenerListadoPersonajes();
  const listadoPersonajes = document.querySelector('.listado_personajes');
  try {
    if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
      personajesApi.forEach((personaje) => {
        const fichaPersonaje = crearFichaPersonaje(personaje);
        listadoPersonajes.appendChild(fichaPersonaje);
      });
    }
  } catch (error) {
    throw new Error('***Error al mostrar listado de personajes ***');
  }
};

const obtenerValorInput = (): string => {
  const input = document.querySelector('#buscador');
  if (input && input instanceof HTMLInputElement) {
    return input.value;
  }
  throw new Error('No se ha obtenido el valor del input');
};

const mostrarListadoPersonajesFiltrado = async (
  evento: Event
): Promise<void> => {
  evento.preventDefault();
  const nombre = obtenerValorInput();
  const personajesApiFiltrados = await obtenerListadoPersonajesFiltrado(nombre);
  const listadoPersonajes = document.querySelector('.listado_personajes');
  console.log(personajesApiFiltrados);
  try {
    if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
      listadoPersonajes.innerHTML = '';
      personajesApiFiltrados.map((personaje) => {
        const fichaPersonaje = crearFichaPersonaje(personaje);
        listadoPersonajes.appendChild(fichaPersonaje);
      });
    }
  } catch (error) {
    throw new Error('***Error al mostrar listado de personajes ***');
  }
};

const eventos = () => {
  const botonFiltrar = document.querySelector('#filtrar');
  if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
    botonFiltrar.addEventListener('click', mostrarListadoPersonajesFiltrado);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  mostrarListadoPersonajes();
  eventos();
});
