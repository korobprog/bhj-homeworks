const editor = document.getElementById('editor');
const clearBtn = document.querySelector('.clear');

let text = '';

editor.addEventListener('input', () => {
   if (typeof editor !== 'undefined') {
      text = editor.value;
      localStorage.setItem('text', text);
   }

});

clearBtn.addEventListener('click', (e) => {
   if (typeof clearBtn !== 'undefined') {
      e.preventDefault();
      localStorage.removeItem('text');
      editor.value = '';
   }

});

editor.textContent = localStorage.getItem('text');