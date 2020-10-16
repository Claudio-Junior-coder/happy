
const map = L.map('mapid').setView([-27.221936,-49.6494463], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


let marker;

 // create and addMarker

 map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

 })

 // adicionar o campo de fotos

 function addPhotoField() {
     // pegar o container de fotos
    const container = document.querySelector('#images')

    
    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')


     //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
     

    //verificar se o campo esta vazio

    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }

    //limapar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    //adicionar o clone ao container de imagens

     container.appendChild(newFieldContainer)
 }


 function deleteField (event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {

        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

 }

 // troca do sim e nao

 function toggleSelect (event) {    

    //verificar se sim ou nao

    // retirar a class active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    // pegar o botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    // colocar a class active nesse botao clicado
 }

 function validate(event) {
    const inputLat = document.querySelector('#lat-input')
    const inputLng = document.querySelector('#lng-input')

    
    if (inputLat.value == "" && inputLng.value == "") {
         //não envia formulario
         event.preventDefault()
        alert('Selecione um local no mapa!')
        return
    }
     
 }