
const NAME_KEY = 'name';
const userForm = document.getElementById('user-form');
const userName = document.getElementById('user-name');
const userContentCard = document.getElementById('user-content');
const userTitle = document.getElementById('user-title');
const userMessage = document.getElementById('user-message');
const saveInLocalStorageBtn = document.getElementById('save-local-btn');
const saveInSessionStorageBtn = document.getElementById('save-session-btn');
const cleanStorageBtn = document.getElementById('clean-storage-btn');
let storageUsed = undefined;

const showUser = (name, message) => {
  userContentCard.classList.remove('d-none');
  userForm.classList.add('d-none');
  userTitle.innerText = `Hola ${name}!`;
  userMessage.innerText = message;
}

const saveInStorage = (storageType) => {
  const name = userName.value; 
  if (name === undefined || name.trim() === '') {
    alert('Por favor ingresa un nombre');
    return;
  }

  if (storageType === 'local') {
    localStorage.setItem(NAME_KEY, name);
    
  } else if (storageType === 'session') {
    sessionStorage.setItem(NAME_KEY, name);
  } else {
    alert('Tipo de almacenamiento no soportado');
    return;
  }
  storageUsed = storageType;
  showUser(name, `Tu nombre ha sido guardado en ${storageType} storage`);
}

if (localStorage.getItem(NAME_KEY)) {
  const name = localStorage.getItem(NAME_KEY);
  storageUsed = 'local';
  showUser(name, 'Tu nombre ha sido cargado desde local storage');
} else if (sessionStorage.getItem(NAME_KEY)) {
  const name = sessionStorage.getItem(NAME_KEY);
  storageUsed = 'session';
  showUser(name, 'Tu nombre ha sido cargado desde session storage');
}

saveInLocalStorageBtn.addEventListener('click', () => {
  saveInStorage('local');
});

saveInSessionStorageBtn.addEventListener('click', () => {
  saveInStorage('session');
});

cleanStorageBtn.addEventListener('click', () => {
  if (storageUsed === 'local') {
    localStorage.removeItem(NAME_KEY);
  } else if (storageUsed === 'session') {
    sessionStorage.removeItem(NAME_KEY);
  } else {
    alert('No hay nombre guardado en ningun storage');
    return;
  }
  userContentCard.classList.add('d-none');
  userForm.classList.remove('d-none');
  userName.value = '';
  storageUsed = undefined;
});