const formSignin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const formBtn = document.getElementById('signin__btn');

if (localStorage.getItem('user_id')) {
  console.log(localStorage.getItem('user_id'));
  formSignin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  welcome.querySelector('span').textContent = localStorage.getItem('user_id');
} else {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else { // если всё прошло гладко, выводим результат
        alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
      }
    };

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
        const answer = JSON.parse(xhr.responseText);
        if (answer.success) {
          let userId = answer.user_id;
          localStorage.setItem('user_id', userId);
          console.log(localStorage.getItem('user_id'));
          formSignin.classList.remove('signin_active');
          welcome.classList.add('welcome_active');
          welcome.querySelector('span').textContent = userId;
        } else {
          alert('Неверный логин/пароль');
        }
      }
    });


    const controlinput = [...document.querySelectorAll('.control')];

    if (controlinput[0].value && controlinput[1].value) {
      const formData = new FormData();
      formData.append('login', controlinput[0].value);
      formData.append('password', controlinput[1].value);
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
      xhr.send(formData);
    } else {
      alert('Вы не ввели логин или пароль');
    }

  });
}