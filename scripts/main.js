const list = document.querySelector('.todo_list');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const createElement = (val) => {
    const newEl = document.createElement('li');
    list.appendChild(newEl);
    newEl.append(val);
    newEl.classList.add('todo_item');
}

const postShit = async (data) => {
    const response = await fetch(
        'https://todo-22e0c-default-rtdb.firebaseio.com/shit.json',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
    return response.json();
}

const getShit = async () => {
    const getResponse = await fetch('https://todo-22e0c-default-rtdb.firebaseio.com/shit.json');
    getResponse.json().then(data => {
        console.log(data);
        
        for(const val in data) {
            createElement(data[val]);
        }
    });
}

const addShit = () => {
    const val = input.value;
    createElement(val);
    postShit(val);
};

btn.addEventListener('click', addShit);

getShit();
