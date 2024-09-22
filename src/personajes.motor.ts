import { Personaje } from './personajes.model';

export const crearElementoImg = (
  src: string,
  title: string
): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = `http://localhost:3000/${src}`;
  img.title = title;
  img.alt = title;
  return img;
};

export const crearTitulo = (texto: string): HTMLParagraphElement => {
  const titulo = document.createElement('h2');
  titulo.textContent = texto;
  return titulo;
};
export const crearParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement('p');
  parrafo.textContent = texto.toString();
  return parrafo;
};

export const crearFichaPersonaje = (personaje: Personaje): HTMLDivElement => {
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

export const obtenerValorInput = (): string => {
  const input = document.querySelector('#buscador');
  if (input && input instanceof HTMLInputElement) {
    return input.value;
  }
  throw new Error('No se ha obtenido el valor del input');
};
