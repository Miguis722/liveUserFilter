const resultList = document.getElementById("result");

// Suponiendo que 'users' es una variable que contiene la lista de usuarios
const users = [
    { avatar: 'avatar_url1', name_full: 'Nombre Usuario 1', description: 'Descripción usuario 1' },
    { avatar: 'avatar_url2', name_full: 'Nombre Usuario 2', description: 'Descripción usuario 2' },
    // Más usuarios aquí...
];

export const getUsers = () => {
    resultList.innerHTML = users.map(user =>
        /*html*/`<li>
            <img src="${user.avatar}">
            <div class="user-info">
                <h4>${user.name_full}</h4>
                <p>${user.description}</p>
            </div>
        </li>`
    ).join('');
}

// Llamada a la función getUsers
getUsers();
