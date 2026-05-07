function sendForm() {
  alert("Форма отправлена!");
}

const data = {
  arch: { title:"Архитектура", img:"img/arch.jpg", duration:"3 года", base:"9 классов", code:"1410000", desc:"Проектирование зданий" },
  vych: { title:"Вычислительная техника", img:"img/vych.jpg", duration:"4 года", base:"9 классов", code:"1304000", desc:"Компьютеры и сети" },
  meb: { title:"Мебельное производство", img:"img/meb.jpg", duration:"3 года", base:"9 классов", code:"0716000", desc:"Производство мебели" },
  obo: { title:"Обогащение полезных ископаемых", img:"img/obo.jpg", duration:"4 года", base:"9 классов", code:"0724000", desc:"Переработка сырья" },
  po: { title:"Программное обеспечение", img:"img/prog.jpg", duration:"4 года", base:"11 классов", code:"1302000", desc:"Разработка программ" },
  prof: { title:"Профессиональное обучение", img:"img/prof.jpg", duration:"3 года", base:"9 классов", code:"0103000", desc:"Педагогика" },
  svar: { title:"Сварочное дело", img:"img/svar.jpg", duration:"3 года", base:"9 классов", code:"0715000", desc:"Сварка металлов" },
  dorog: { title:"Строительство дорог", img:"img/dorog.jpg", duration:"3 года", base:"9 классов", code:"1403000", desc:"Дорожное строительство" },
  zdan: { title:"Строительство зданий", img:"img/zdan.jpg", duration:"4 года", base:"9 классов", code:"1401000", desc:"Строительство зданий" },
  teplo: { title:"Теплотехника", img:"img/teplo.jpg", duration:"4 года", base:"9 классов", code:"0902000", desc:"Тепловые системы" },
  to: { title:"ТО автотранспорта", img:"img/auto.jpg", duration:"3 года", base:"9 классов", code:"1201000", desc:"Ремонт автомобилей" },
  inj: { title:"Инженерные технологии", img:"img/inj.jpg", duration:"4 года", base:"9 классов", code:"0713000", desc:"Инженерия" },
  diz: { title:"Дизайн интерьера", img:"img/diz.jpg", duration:"3 года", base:"9 классов", code:"0402000", desc:"Дизайн помещений" },
  elec: { title:"Электрооборудование", img:"img/elec.jpg", duration:"4 года", base:"9 классов", code:"0901000", desc:"Электрика" },
  mexa: { title:"Мехатроника", img:"img/mexa.jpg", duration:"4 года", base:"9 классов", code:"0714000", desc:"Робототехника" },
  sx: { title:"Сельское хозяйство", img:"img/sx.jpg", duration:"3 года", base:"9 классов", code:"1504000", desc:"Агро техника" },
  shvey: { title:"Швейное дело", img:"img/shvey.jpg", duration:"3 года", base:"9 классов", code:"0717000", desc:"Одежда и текстиль" },
  geo: { title:"Геодезия", img:"img/geo.jpg", duration:"4 года", base:"9 классов", code:"1407000", desc:"Измерения земли" },
  smet: { title:"Сметное дело", img:"img/smet.jpg", duration:"3 года", base:"9 классов", code:"0732000", desc:"Строительные расчёты" },
  org: { title:"Тепличное хозяйство", img:"img/org.jpg", duration:"3 года", base:"9 классов", code:"1502000", desc:"Выращивание растений" },
  par: { title:"Парикмахер", img:"par.jpg", duration:"2 года", base:"9 классов", code:"0506000", desc:"Стрижки и уход" }
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
