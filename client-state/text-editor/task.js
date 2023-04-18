const editor = document.getElementById('editor');
const clearBtn = document.querySelector('.clear');

let text = '';

editor.addEventListener('input', () => {
  text = editor.value;
  localStorage.setItem('text', text);
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('text');
  editor.value = '';
});

editor.textContent = localStorage.getItem('text');