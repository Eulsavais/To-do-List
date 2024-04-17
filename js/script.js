const listContainer = document.getElementById('list-container');
const inputBox = document.getElementById('input-box');
const textForEmpty = document.querySelector('.textForEmpty');
const btn = document.querySelector('.main-btn');
const btnClear = document.getElementById('clear');

function toggleText() {
	if (listContainer.children.length > 0) {
		textForEmpty.style.display = 'none';
		btnClear.style.display = 'block';
	} else {
		textForEmpty.style.display = 'block';
		btnClear.style.display = 'none';
	}
}

function removeAllTask() {
	Array.from(listContainer.children).forEach(e => {
		e.remove();
	})
}

function addTask() {
	if (inputBox.value === '') {
		alert('Вы должны написать что-то!');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);

		inputBox.value = '';
		toggleText();
		saveData();
	}

	inputBox.focus();

}

inputBox.addEventListener('keydown', (e) => {
	if (e.keyCode == 13) {
		addTask();
	}
});

listContainer.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked')
		saveData();
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
		toggleText()
		saveData();
	}
}, false)

function saveData() {
	localStorage.setItem('data', listContainer.innerHTML);

}
function showTask() {
	listContainer.innerHTML = localStorage.getItem('data')
}
showTask();
toggleText();