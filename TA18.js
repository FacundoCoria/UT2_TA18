const personas = [
    {name: 'Facundo', apellido: 'Coria'},
    {name: 'Luis', apellido: 'Suarez'},
    {name: 'Frank', apellido: 'Lampard'},
    {name: 'Romeo', apellido: 'Lavia'},
    {name: 'Roman', apellido: 'Reigns'},
    {name: 'Enzo', apellido: 'Fernandez'},
];

const listaPersonas = document.getElementById('listaPersonas');

const markup = personas.map(persona => `<li>${persona.name} ${persona.apellido}</li>`).join('');
listaPersonas.innerHTML = markup;

const buscador = document.getElementById('buscador');

buscador.addEventListener('input', (event) => {
    const filtro = event.target.value.toLowerCase();
    const items = listaPersonas.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const texto = items[i].textContent.toLowerCase();
        if (texto.includes(filtro)) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
});
