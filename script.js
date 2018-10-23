
const cards = document.querySelector('.cards');
const card = document.querySelector('.card');
const body = document.getElementById("boo");

fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(res => res.json())
    .then(data => {
        data.forEach(tasks => {
            if (tasks.completed === false) {
                const card = `
                <div class="card">
                    <p>${tasks.id}</p>
                    <h1 class="red">${tasks.title}</h1>
                </div>`;

                cards.innerHTML += card
            } else {
                const card = `
                <div class="card">
                    <p>${tasks.id}</p>
                    <h1 class="blue">${tasks.title}</h1>
                </div>`;

                cards.innerHTML += card
            }
        });

    });

