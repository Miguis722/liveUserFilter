import { getUsers } from "./components/data.js"; // Importa la función getUsers desde tu archivo data.js
// Se trae la información de la carpeta componentes, que contiene un archivo js, en la cual, trae unas instrucciones, los cuales se explica, como imprimir el data en un formato HTML.

document.addEventListener("DOMContentLoaded", async () => { // Aqui estamos generando un evento, en el que cuando se carga el documento html, se ejecuta todo esto:
  const resultList = document.getElementById("result"); // Aqui estamos agarrando un elemento, por su ID, en este caso, el de index, el cual es result, con esto podremos modificar lo que estemos seleccionando
  const filterInput = document.getElementById("filter"); // Aqui estamos agarrando un elemento, por su ID, en este caso, el de index, el cual es filter, con esto podremos modificar lo que estemos seleccionando

  try { // Esto se usa para posibles errores
    const response = await fetch("https://6674179975872d0e0a950e53.mockapi.io/user"); // Aqui se está trayendo la información del link, o la API, que se almacenara en la variable designada...
    if (!response.ok) { // Si la respuesta del servidor, es distinta a 200, lanzara, el error de la lina 11.
      throw new Error("No se pudo obtener la data de usuarios"); // El error...
    }
    const data = await response.json(); // Se genera una constante para convertirla en un objeto o un arreglo.

    // Función para mostrar usuarios
    const displayUsers = (users) => { // Se genera una función con un parametro
      // Limpia el resultado anterior
      resultList.innerHTML = ""; // Asegura que se muestre una nueva lista, borrando los resultados anteriores.

      // Mostrar cada usuario
      users.forEach(user => { // Aqui estamos iterando sobre cada objeto, en este caso user, dentro del arreglo de users.
        const li = document.createElement("li"); // Por cada usuario, se creara un elemento, el cual será un li.
      /* Aqui esto sirve, para que se inserte este codigo o esta plantilla pre fabricada, en HTML, para mostrar al usuario*/  
      li.innerHTML = `
          <img src="${user.avatar}" alt="${user.name_full}">
          <div class="user-info">
            <h4>${user.name_full}</h4>
            <p>${user.description}</p>
          </div>
        `; 
        resultList.appendChild(li); // Esto sirve para sobreescribir, para agregar el elemento de la lista creado al contenedor resultList
      });
    };

    // Mostrar todos los usuarios al inicio
    displayUsers(data); // Y con esto se muestra lo que se encuentra en displayUsers, pasando por el arreglo de data, lo que mostraria todos los usuarios obtenidos inicialmente desde el API.



                                                              // FILTRADOS, O FILTRO POR NOMBRE/DESCRIPCIÓN

    // Filtrar usuarios al escribir en el input
    filterInput.addEventListener("input", (e) => { // Aqui generamos un evento, el cual seria de escritura por teclado.
      const searchTerm = e.target.value.toLowerCase(); // Aqui traemos el valor o el texto que se introdujo en el input, y lo convertimos en minusculas
      const filteredUsers = data.filter(user => // Usamos el metodo de filter para crear un nuevo arreglo que solo contendra a los cuyos nombres o descripciones sean iguales al evento de escritura
        user.name_full.toLowerCase().includes(searchTerm) || user.description.toLowerCase().includes(searchTerm) // En la parte de la izquierda estamos haciendo una comprobación de nombre
        // En la parte derecha, comprobamos la descripción. Si no es lo uno o lo otro, es decir, que puede que no sea el nombre, pero si la descripción. Con includes, estamos haciendo un boolean
        // Que como tal dice que si los datos que se encuentran dentro de searchTerm son verdaderos (que existen) entonces pasara el filtro. Si el elemento no existe, será false.
        // includes() - Verifica si un elemento existe dentro de un arreglo
      );
      
      // Mostrar usuarios filtrados
      displayUsers(filteredUsers); // Llama a displayusers pasando el arreglo de filteredUsers para actualizar la lista de usuarios mostrados según el filtro aplicado.
    });

  } catch (error) {
    console.error("Error al obtener la data:", error); // Y aqui mostrara cualquier posible error que pueda pasar dentro de la realización de busquedas o un error en si del API.
    // Manejar el error según sea necesario
  }
});
