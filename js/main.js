import { getUsers } from "./components/data.js"; // Importa la función getUsers desde tu archivo data.js

document.addEventListener("DOMContentLoaded", async () => {
  const resultList = document.getElementById("result");
  const filterInput = document.getElementById("filter");

  try {
    const response = await fetch("https://6674179975872d0e0a950e53.mockapi.io/user");
    if (!response.ok) {
      throw new Error("No se pudo obtener la data de usuarios");
    }
    const data = await response.json();

    // Función para mostrar usuarios
    const displayUsers = (users) => {
      // Limpia el resultado anterior
      resultList.innerHTML = "";

      // Mostrar cada usuario
      users.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${user.avatar}" alt="${user.name_full}">
          <div class="user-info">
            <h4>${user.name_full}</h4>
            <p>${user.description}</p>
          </div>
        `;
        resultList.appendChild(li);
      });
    };

    // Mostrar todos los usuarios al inicio
    displayUsers(data);

    // Filtrar usuarios al escribir en el input
    filterInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredUsers = data.filter(user =>
        user.name_full.toLowerCase().includes(searchTerm) || user.description.toLowerCase().includes(searchTerm)
      );
      
      // Mostrar usuarios filtrados
      displayUsers(filteredUsers);
    });

  } catch (error) {
    console.error("Error al obtener la data:", error);
    // Manejar el error según sea necesario
  }
});
