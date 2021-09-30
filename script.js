//Adding function to delete button
let deleteButton = document.querySelectorAll(`.delete`);
for (let items of deleteButton) {
    items.addEventListener(`click`, deleteButtonFunction);
};
function deleteButtonFunction(event) {
    let parentElement = event.target.parentElement.parentElement;
    parentElement.remove();
};


//Adding function to edit button
let editButton = document.querySelectorAll(`.edit`);
for (let items of editButton) {
    items.addEventListener(`click`, editButtonFunction);
};
function editButtonFunction(event) {
    let question = event.target.parentElement.parentElement.querySelector(`.question-in-list`).textContent;
    document.querySelector(`.type-question`).value = question;
    event.target.parentElement.parentElement.remove();
};

//Adding functionality to show/hide answer
let showAndHideButton = document.querySelectorAll(`.showandhideanswer`);
for (let items of showAndHideButton) {
    items.addEventListener(`click`, showAndHideButtonFuntion);
};
function showAndHideButtonFuntion(event) {
    event.target.parentElement.querySelector(`.answer-in-list`).classList.toggle(`hidden`);
};

//Adding functionality to save button
document.querySelector(`.save`).addEventListener(`click`, save);
function save() {
    let newItem = document.createElement(`div`);
    newItem.classList.add(`items`);
    let newItemContent = `
    <div class="question-in-list">${document.querySelector(`.type-question`).value}</div>
    <button class="showandhideanswer">Show/Hide Answer</button>
    <div class="answer-in-list hidden">${document.querySelector(`.type-answer`).value}</div>
    <div class="buttons">
        <button class="edit">EDIT</button>
        <button class="delete">DELETE</button>
    </div>`;
    newItem.innerHTML = newItemContent;
    document.querySelector(`section`).appendChild(newItem);

    //Adding event listener to delete button here
    let deleteButton = document.querySelectorAll(`.delete`);
    for (let items of deleteButton) {
        items.addEventListener(`click`, deleteButtonFunction);
    };

    //Adding event listener to edit button
    let editButton = document.querySelectorAll(`.edit`);
    for (let items of editButton) {
        items.addEventListener(`click`, editButtonFunction);
    };

    //Adding event listener to show/hide button
    let showAndHideButton = document.querySelectorAll(`.showandhideanswer`);
    for (let items of showAndHideButton) {
        items.addEventListener(`click`, showAndHideButtonFuntion);
    };
    document.querySelector(`.type-question`).value = ``;
    document.querySelector(`.type-answer`).value = ``;
};

//Adding functionality to close button
document.querySelector(`.close-pop-up`).addEventListener(`click`, function () {
    document.querySelector(`.pop-up-question-box`).classList.add(`hidden`);
});
//Adding event listener to add question button
document.querySelector(`.add-question`).addEventListener(`click`, function () {
    document.querySelector(`.pop-up-question-box`).classList.remove(`hidden`);
});