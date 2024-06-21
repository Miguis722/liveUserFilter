import { getUsers } from "./components/data.js"; // Importamos la función getUsers desde el archivo correspondiente

document.addEventListener("DOMContentLoaded", async () => {
  const resultList = document.getElementById("result");
  const filterInput = document.getElementById("filter");

    const response = await fetch("https://6674179975872d0e0a950e53.mockapi.io/user");
    const data = await response.json();

    getUsers(data); // Mostrar todos los usuarios al inicio

    filterInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredUsers = data.filter(user =>
        user.name_full.toLowerCase().includes(searchTerm) || user.description.toLowerCase().includes(searchTerm)
      );
      
      getUsers(filteredUsers); // Mostrar usuarios filtrados
    });
});
