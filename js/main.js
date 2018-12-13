let source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);

let robotsJs =  [{"first_name":"Marji","last_name":"Bransden","gender":"Female","portrait":"https://robohash.org/autempariaturunde.jpg?size=200x300&set=set1","description":"Persevering attitude-oriented productivity","type":"Indonesian","language":"Chinese"},
{"first_name":"Vivi","last_name":"Alvy","gender":"Female","portrait":"https://robohash.org/teneturaspernaturanimi.jpg?size=200x300&set=set1","description":"Up-sized contextually-based frame","type":"Uruguayan","language":"Gagauz"},
{"first_name":"Lon","last_name":"Pybus","gender":"Male","portrait":"https://robohash.org/repellendusquaeratdolorum.jpg?size=200x300&set=set1","description":"Cross-group transitional project","type":"Aleut","language":"Assamese"},
{"first_name":"Janene","last_name":"Palffrey","gender":"Female","portrait":"https://robohash.org/sequitemporafugit.jpg?size=200x300&set=set1","description":"Team-oriented methodical circuit","type":"Yaqui","language":"Gagauz"},
{"first_name":"Pippy","last_name":"Heis","gender":"Female","portrait":"https://robohash.org/veniamquodrepellendus.jpg?size=200x300&set=set1","description":"Cloned zero tolerance alliance","type":"Peruvian","language":"Tetum"}]

robotsJs.forEach((robot) => {
let html = template(robot);
$(".robots").append(html);
});
