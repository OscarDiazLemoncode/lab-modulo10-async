import { vi } from 'vitest';
import axios from 'axios';
import {
  obtenerListadoPersonajes,
  obtenerListadoPersonajesFiltrado,
} from './personajes.api';
import { Personaje } from './personajes.model';

describe('obtenerListadoPersonajes', () => {
  it('Deberia devolver [] personajes', async () => {
    //arrange
    const personaje: Personaje[] = [
      {
        id: '1',
        nombre: 'Mortadelo',
        apodo: 'Mortadelo',
        especialidad: 'Disfraces',
        habilidades: ['Camuflaje', 'Imitaciones', 'Huida rápida'],
        amigo: 'Filemón',
        imagen: 'mortadelo.webp',
      },
    ];
    vi.spyOn(axios, 'get').mockResolvedValue({
      data: personaje,
    });
    //act
    const resultado = await obtenerListadoPersonajes();
    //assert
    expect(resultado).toEqual(personaje);
  });

  it('Deberia devolver "error conexion con API" si no es posible conectar con la API', async () => {
    // arrange
    vi.spyOn(axios, 'get').mockRejectedValue({
      response: {
        status: 403,
      },
    });
    // act
    try {
      await obtenerListadoPersonajes();
    } catch (error: any) {
      // assert
      expect(error.message).toEqual('*** Error al conectar con API ***');
    }
  });
});

describe('obtenerListadoPersonajesFiltrado', () => {
  it('Deberia devolver [] personajes filtrados por busqueda', async () => {
    //arrange
    const personaje: Personaje[] = [
      {
        id: '1',
        nombre: 'Mortadelo',
        apodo: 'Mortadelo',
        especialidad: 'Disfraces',
        habilidades: ['Camuflaje', 'Imitaciones', 'Huida rápida'],
        amigo: 'Filemón',
        imagen: 'mortadelo.webp',
      },
    ];

    vi.spyOn(axios, 'get').mockResolvedValue({
      data: personaje,
    });
    //act
    const nombre = 'Mortadelo';
    const resultado = await obtenerListadoPersonajesFiltrado(nombre);
    //assert
    expect(resultado).toEqual(personaje);
  });
  it('Deberia devolver "error conexion con API" si no es posible conectar con la API', async () => {
    // arrange
    vi.spyOn(axios, 'get').mockRejectedValue({
      response: {
        status: 403,
      },
    });
    // act
    const nombre = 'Mortadelo';
    try {
      await obtenerListadoPersonajesFiltrado(nombre);
    } catch (error: any) {
      // assert
      expect(error.message).toEqual(
        '*** Error al conectar con API filtrada***'
      );
    }
  });
});
