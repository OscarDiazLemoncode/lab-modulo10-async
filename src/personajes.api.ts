import axios from 'axios';
import { Personaje } from './personajes.model';

// URL API
const URL_BASE = 'http://localhost:3000/personajes';
const PARAMETRO_NOMBRE = '?nombre_like=';

export const obtenerListadoPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(URL_BASE);
    return data;
  } catch (error) {
    throw new Error('*** Error al conectar con API ***');
  }
};

export const obtenerListadoPersonajesFiltrado = async (
  nombre: string
): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(URL_BASE + PARAMETRO_NOMBRE + nombre);
    return data;
  } catch (error) {
    throw new Error('*** Error al conectar con API filtrada***');
  }
};
