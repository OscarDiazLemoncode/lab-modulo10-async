import {
  obtenerListadoPersonajes,
  obtenerListadoPersonajesFiltrado,
} from './personajes.api';
import {
  crearFichaPersonaje,
  obtenerValorInput,
  crearTitulo,
} from './personajes.motor';

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
  try {
    if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
      listadoPersonajes.innerHTML = '';
      personajesApiFiltrados.map((personaje) => {
        const fichaPersonaje = crearFichaPersonaje(personaje);
        listadoPersonajes.appendChild(fichaPersonaje);
      });
    }
    if (
      listadoPersonajes &&
      listadoPersonajes instanceof HTMLDivElement &&
      personajesApiFiltrados.length === 0
    ) {
      const texto = crearTitulo('No se han encontrado resultados');
      listadoPersonajes.appendChild(texto);
    }
  } catch (error) {
    throw new Error('***Error al mostrar listado de personajes ***');
  }
};

export const eventos = () => {
  const botonFiltrar = document.querySelector('#filtrar');
  const input = document.querySelector('#buscador');

  if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
    botonFiltrar.addEventListener('click', mostrarListadoPersonajesFiltrado);
  }
  if (
    input &&
    input instanceof HTMLInputElement &&
    botonFiltrar &&
    botonFiltrar instanceof HTMLButtonElement
  ) {
    input.addEventListener('input', () =>
      botonFiltrar.removeAttribute('disabled')
    );
  }
};
