# Asincronía

## API Mortadelo y Filemón

La API tiene un parámetro nombre que permite filtrar los personajes por nombre. Por ejemplo, si queremos buscar los personajes que contengan la palabra bacterio en su nombre, podemos hacerlo de la siguiente manera:
http://localhost:3000/personajes?nombre_like=bacterio

- Vamos a crear una aplicación que nos permita buscar personajes por su nombre. Para ello, vamos a crear un formulario con un campo de texto y un botón
- Cuando se carga la página, se debe mostrar un listado con todos los personajes.

- Si el usuario introduce un nombre en el campo de texto y pulsa el botón de filtrar, se debe mostrar un listado con los personajes que contengan el nombre introducido. También se puede mostrar un trozo de texto, por ejemplo, personajes que contengan la palabra morta en su nombre.

- En la API JSON, en la entrada de personajes, hay un campo llamado imagen, en este campo está el nombre de la imagen que se debe mostrar para ese personaje, cuando lo quiera visualizar en el navegador acuérdate de añadir el prefijo http://localhost:3000/ para que se muestre correctamente, es decir:
  Para esta entrada:

      {
        "id": "1",
        "nombre": "Mortadelo",
        "apodo": "Mortadelo",
        "especialidad": "Disfraces",
        "habilidades": ["Camuflaje", "Imitaciones", "Huida rápida"],
        "amigo": "Filemón",
        "imagen": "mortadelo.webp"
      },

      Sería (suponiendo que está en una variable llamada personaje):

const imagenUrl = `http://localhost:3000/${personaje.imagen}`;
