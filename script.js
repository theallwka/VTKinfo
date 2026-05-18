function zayavka() {
  alert("Форма отправлена!");
}

const data = {
  arch: { title:"Архитектура", img:"img/arch.jpg", dlitelnost:"3 года", base:"9 классов", code:"1410000", desc:"Проектирование зданий" },
  vych: { title:"Вычислительная техника", img:"img/vych.jpg", dlitelnost:"4 года", base:"9 классов", code:"1304000", desc:"Компьютеры и сети" },
  meb: { title:"Мебельное производство", img:"img/meb.jpg", dlitelnost:"3 года", base:"9 классов", code:"0716000", desc:"Производство мебели" },
  obo: { title:"Обогащение полезных ископаемых", img:"img/obo.jpg", dlitelnost:"4 года", base:"9 классов", code:"0724000", desc:"Переработка сырья" },
  po: { title:"Программное обеспечение", img:"img/po.jpg", dlitelnost:"4 года", base:"11 классов", code:"1302000", desc:"Разработка программ" },
  prof: { title:"Профессиональное обучение", img:"img/prof.jpg", dlitelnost:"3 года", base:"9 классов", code:"0103000", desc:"Педагогика" },
  svar: { title:"Сварочное дело", img:"img/svar.jpg", dlitelnost:"3 года", base:"9 классов", code:"0715000", desc:"Сварка металлов" },
  dorog: { title:"Строительство дорог", img:"img/dorog.jpg", dlitelnost:"3 года", base:"9 классов", code:"1403000", desc:"Дорожное строительство" },
  zdan: { title:"Строительство зданий", img:"img/zdan.jpg", dlitelnost:"4 года", base:"9 классов", code:"1401000", desc:"Строительство зданий" },
  teplo: { title:"Теплотехника", img:"img/teplo.jpg", dlitelnost:"4 года", base:"9 классов", code:"0902000", desc:"Тепловые системы" },
  to: { title:"ТО автотранспорта", img:"img/to.jpg", dlitelnost:"3 года", base:"9 классов", code:"1201000", desc:"Ремонт автомобилей" },
  inj: { title:"Инженерные технологии", img:"img/inj.jpg", dlitelnost:"4 года", base:"9 классов", code:"0713000", desc:"Инженерия" },
  diz: { title:"Дизайн интерьера", img:"img/diz.jpg", dlitelnost:"3 года", base:"9 классов", code:"0402000", desc:"Дизайн помещений" },
  elec: { title:"Электрооборудование", img:"img/elec.jpg", dlitelnost:"4 года", base:"9 классов", code:"0901000", desc:"Электрика" },
  mexa: { title:"Мехатроника", img:"img/mexa.jpg", dlitelnost:"4 года", base:"9 классов", code:"0714000", desc:"Робототехника" },
  sx: { title:"Сельское хозяйство", img:"img/sx.jpg", dlitelnost:"3 года", base:"9 классов", code:"1504000", desc:"Агро техника" },
  shvey: { title:"Швейное дело", img:"img/shvey.jpg", dlitelnost:"3 года", base:"9 классов", code:"0717000", desc:"Одежда и текстиль" },
  geo: { title:"Геодезия", img:"img/geo.jpg", dlitelnost:"4 года", base:"9 классов", code:"1407000", desc:"Измерения земли" },
  smet: { title:"Сметное дело", img:"img/smet.jpg", dlitelnost:"3 года", base:"9 классов", code:"0732000", desc:"Строительные расчёты" },
  org: { title:"Тепличное хозяйство", img:"img/org.jpg", dlitelnost:"3 года", base:"9 классов", code:"1502000", desc:"Выращивание растений" },
  par: { title:"Парикмахер", img:"par.jpg", dlitelnost:"2 года", base:"9 классов", code:"0506000", desc:"Стрижки и уход" }
};

window.openModal = function(key) {
  const item = data[key];

  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalImg").src = item.img;
  document.getElementById("modalDuration").textContent = item.duration;
  document.getElementById("modalBase").textContent = item.base;
  document.getElementById("modalCode").textContent = item.code;
  document.getElementById("modalDesc").textContent = item.desc;

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
