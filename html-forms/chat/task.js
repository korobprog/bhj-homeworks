const openChat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatWidgetInput = document.getElementById('chat-widget__input');

openChat.addEventListener('click', () => {
  openChat.classList.add('chat-widget_active');
});

const botVasy = [
  'Сами такие!',
  'Сейчас некогда, давайте потом',
  'Вы кто? А я кто?',
  'Меня программировал новичок, я сломан :(',
  'Пишите, что угодно, меня не научили распознавать текст'
];

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
    messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${chatWidgetInput.value}</div>
      </div>
    `;
    chatWidgetInput.value = '';

    messages.innerHTML += `
      <div class="message">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${botVasy[Math.floor(Math.random() * botVasy.length)]}</div>
      </div>
    `;
  }
});