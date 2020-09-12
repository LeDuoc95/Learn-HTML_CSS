const body = document.getElementsByTagName('body');
const listTodo = document.getElementById('list-todo');
const addTodo = document.getElementById('add-list');
const inputToAdd = document.getElementsByTagName('input');
const clearItemDone = document.getElementById('clear-item-done');
const clearAllItem = document.getElementById('clear-all-item');
const doneAll = document.getElementById('done-all');

// Create data for list todo if its had not existed!
const createDataInLocalStorages = () => {
	if (!localStorage.getItem('dataForTodo')) {
		localStorage.setItem('dataForTodo', JSON.stringify({ data: [] }));
	} else {
		const dataListTask = JSON.parse(localStorage.getItem('dataForTodo')).data;
		const lengthOfList = dataListTask.length;
		for (let i = 0; i < lengthOfList; i++) {
			let nodeLi = document.createElement('LI');
			let nodeImg = document.createElement('IMG');
			nodeImg.src = './assets/icon/icons8-checked.svg';
			let textnode = document.createTextNode(dataListTask[i].content);
			nodeLi.appendChild(textnode);
			nodeLi.appendChild(nodeImg);
			listTodo.appendChild(nodeLi);
			const getItem = document.querySelectorAll('.page-todo__content--list li');
			addOnClick(getItem, true, dataListTask[i].status);
		}
	}
};

const addOnClick = (getItem, intialValue = false, status = false) => {
	if (getItem[getItem.length - 1]) {
		getItem[getItem.length - 1].addEventListener('click', () => {
			const allItemLi = document.querySelectorAll('.page-todo__content--list li');
			const isExistClassName = allItemLi[getItem.length - 1].matches('.item-done');
			if (isExistClassName) {
				let dataForLocal = JSON.parse(localStorage.getItem('dataForTodo')).data;
				getItem[getItem.length - 1].classList.add('item-done');
				getItem[getItem.length - 1].classList.remove('item-done');
				dataForLocal[getItem.length - 1].status = false;
				localStorage.setItem('dataForTodo', JSON.stringify({ data: dataForLocal }));
			} else {
				let dataForLocal = JSON.parse(localStorage.getItem('dataForTodo')).data;

				getItem[getItem.length - 1].classList.remove('item-done');
				getItem[getItem.length - 1].classList.add('item-done');
				dataForLocal[getItem.length - 1].status = true;
				localStorage.setItem('dataForTodo', JSON.stringify({ data: dataForLocal }));
			}
		});
	}

	if (intialValue && status) {
		getItem[getItem.length - 1].classList.add('item-done');
	}
};

// data = [{content: "content",status: boolean}]
const addTaskToList = () => {
	let math = false;
	let dataTodo = JSON.parse(localStorage.getItem('dataForTodo'));
	dataTodo.data.map((val) => {
		if (val.content === inputToAdd[0].value) {
			math = true;
		}
		return val;
	});

	if (math || inputToAdd[0].value === '') {
		alert('Task can not empty or duplicate!');
	} else {
		dataTodo.data.push({ content: inputToAdd[0].value, status: false });
		localStorage.setItem('dataForTodo', JSON.stringify({ data: dataTodo.data }));

		let nodeLi = document.createElement('LI');
		let nodeImg = document.createElement('IMG');
		nodeImg.src = './assets/icon/icons8-checked.svg';
		let textnode = document.createTextNode(inputToAdd[0].value);
		nodeLi.appendChild(textnode);
		nodeLi.appendChild(nodeImg);
		listTodo.appendChild(nodeLi);
		inputToAdd[0].value = '';
		const getItem = document.querySelectorAll('.page-todo__content--list li');
		addOnClick(getItem);
	}
};

const handleListTask = (type) => {
	if (type === 'clear-item-done') {
		let dataForLocal = JSON.parse(localStorage.getItem('dataForTodo')).data;
		const ListTagLi = document.querySelectorAll('.page-todo__content--list li');
		dataForLocal = dataForLocal.filter((value, index) => {
			if (value.status === true) {
				ListTagLi[index].remove();
			}
			return value.status === false;
		});
		localStorage.setItem('dataForTodo', JSON.stringify({ data: dataForLocal }));
	}

	if (type === 'clear-all-item') {
		localStorage.setItem('dataForTodo', JSON.stringify({ data: [] }));
		const ListTagLi = document.querySelectorAll('.page-todo__content--list li');
		const lengthOfListToDo = ListTagLi.length;
		for (let i = 0; i < lengthOfListToDo; i++) {
			listTodo.removeChild(ListTagLi[i]);
		}
	}

	if (type === 'done-all') {
		let dataForLocal = JSON.parse(localStorage.getItem('dataForTodo')).data;
		dataForLocal = dataForLocal.map((value, index) => {
			const allItemLi = document.querySelectorAll('.page-todo__content--list li');
			allItemLi[index].classList.add('item-done');
			value.status = true;
			return value;
		});
		localStorage.setItem('dataForTodo', JSON.stringify({ data: dataForLocal }));
	}
};

window.addEventListener('load', createDataInLocalStorages);
addTodo.addEventListener('click', addTaskToList);
clearItemDone.addEventListener('click', () => handleListTask('clear-item-done'));
clearAllItem.addEventListener('click', () => handleListTask('clear-all-item'));
doneAll.addEventListener('click', () => handleListTask('done-all'));
