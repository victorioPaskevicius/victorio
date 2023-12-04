const input = document.querySelector("#task-input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("#task-list");
const empty = document.querySelector(".empty");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = 'check'
        p.textContent = text;

        li.appendChild(check);
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = '';

        empty.style.display = 'none';
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'x';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        item.remove();

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty.style.display = 'block';
        }
    });

    return deleteBtn;
}
