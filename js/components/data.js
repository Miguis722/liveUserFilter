const resultList = document.getElementById("result");
export const getUsers=(user) => {
    resultList.innerHTML = users.map(user =>
        `
        <img src="${user.avatar}">
        <div class="user-info">
            <h4>${user.name_full}</h4>
            <p>${user.description}</p>
        </div>
        `
    ).join('');
}