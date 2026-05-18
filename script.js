function zayavka() {
  alert("Форма отправлена!");
}

const data = {
  arch: { title:"Архитектура", img:"img/arch.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1410000", opisanie:"Проектирование зданий" },
  vych: { title:"Вычислительная техника", img:"img/vych.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1304000", opisanie:"Компьютеры и сети" },
  meb: { title:"Мебельное производство", img:"img/meb.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0716000", opisanie:"Производство мебели" },
  obo: { title:"Обогащение полезных ископаемых", img:"img/obo.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0724000", opisanie:"Переработка сырья" },
  po: { title:"Программное обеспечение", img:"img/po.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1302000", opisanie:"Разработка программ" },
  prof: { title:"Профессиональное обучение", img:"img/prof.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0103000", opisanie:"Педагогика" },
  svar: { title:"Сварочное дело", img:"img/svar.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0715000", opisanie:"Сварка металлов" },
  dorog: { title:"Строительство дорог", img:"img/dorog.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1403000", opisanie:"Дорожное строительство" },
  zdan: { title:"Строительство зданий", img:"img/zdan.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1401000", opisanie:"Строительство зданий" },
  teplo: { title:"Теплотехника", img:"img/teplo.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0902000", opisanie:"Тепловые системы" },
  to: { title:"ТО автотранспорта", img:"img/to.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1201000", opisanie:"Ремонт автомобилей" },
  inj: { title:"Инженерные технологии", img:"img/inj.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0713000", opisanie:"Инженерия" },
  diz: { title:"Дизайн интерьера", img:"img/diz.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0402000", opisanie:"Дизайн помещений" },
  elec: { title:"Электрооборудование", img:"img/elec.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0901000", opisanie:"Электрика" },
  mexa: { title:"Мехатроника", img:"img/mexa.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0714000", opisanie:"Робототехника" },
  sx: { title:"Сельское хозяйство", img:"img/sx.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1504000", opisanie:"Агро техника" },
  shvey: { title:"Швейное дело", img:"img/shvey.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0717000", opisanie:"Одежда и текстиль" },
  geo: { title:"Геодезия", img:"img/geo.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1407000", opisanie:"Измерения земли" },
  smet: { title:"Сметное дело", img:"img/smet.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0732000", opisanie:"Строительные расчёты" },
  org: { title:"Тепличное хозяйство", img:"img/org.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"1502000", opisanie:"Выращивание растений" },
  par: { title:"Парикмахер", img:"img/par.jpg", dlitelnost:"3 года 10 месяцев", baza:"9-11 классов", yazyk:"Каз/Рус", kod:"0506000", opisanie:"Стрижки и уход" }
};

window.openModal = function(key) {
  const item = data[key];

  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalImg").src = item.img;
  document.getElementById("modalDlitelnost").textContent = item.dlitelnost;
  document.getElementById("modalBaza").textContent = item.baza;
  document.getElementById("modalYazyk").textContent = item.yazyk;
  document.getElementById("modalKod").textContent = item.kod;
  document.getElementById("modalOpisanie").textContent = item.opisanie;

  document.getElementById("modal").style.display = "flex";
};

window.closeModal = function() {
  document.getElementById("modal").style.display = "none";
};

const modal = document.getElementById("modal");

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    closeModal();
  }
});
