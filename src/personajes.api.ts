import axios from 'axios';
import { Personaje } from './personajes.model';

// URL API
export const URL_BASE = 'http://localhost:3000/personajes';

export const obtenerListadoPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get('http://localhost:3000/personajes');
    return data;
  } catch (error) {
    throw new Error('*** Error al obtener listado de personajes ***');
  }
};
