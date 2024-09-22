import {
  obtenerListadoPersonajes,
  obtenerListadoPersonajesFiltrado,
} from './personajes.api';
import { crearFichaPersonaje, obtenerValorInput } from './personajes.motor';

export const mostrarListadoPersonajes = async (): Promise<void> => {
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

export const eventos = () => {
  const botonFiltrar = document.querySelector('#filtrar');
  if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
    botonFiltrar.addEventListener('click', mostrarListadoPersonajesFiltrado);
  }
};
