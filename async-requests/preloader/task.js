let xhr = new XMLHttpRequest();
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    document.getElementById('loader').classList.remove('loader_active');

    const valute = JSON.parse(xhr.responseText).response.Valute; 
    const valuteValues = Object.values(valute); 
    
    valuteValues.forEach(element => {
      items.insertAdjacentHTML(
        'beforeEnd', 
        `<div class="item"><div class="item__code">${element.CharCode}</div><div class="item__value">${element.Value}</div><div class="item__currency">руб.</div></div>`
      );
    })
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();