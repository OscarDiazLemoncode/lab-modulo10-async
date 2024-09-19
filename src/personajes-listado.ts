import { obtenerListadoPersonajes } from './personajes.api';

const mostrarListadoPersonajes = async (): Promise<void> => {
  const personajesApi = await obtenerListadoPersonajes();
  personajesApi.forEach((personaje) => console.log(personaje));
};

document.addEventListener('DOMContentLoaded', mostrarListadoPersonajes);
