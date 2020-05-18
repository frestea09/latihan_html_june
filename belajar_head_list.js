class KerangkaTampilan{
    constructor(){
    }
    kubus(){
        alert('kubus');
    }
    balok(){
        alert('balok');
    }
    limas(){
        alert('limas');
    }
}
function hai() {
    alert('hai');
}
let objKerangkaTampilan = new KerangkaTampilan();
let objLuasKubus = document.querySelector('#buttonHai');
objLuasKubus.addEventListener('click',objKerangkaTampilan.kubus);
let objKelilingKubus = document.querySelector('#kelilingKubus');
objKelilingKubus.addEventListener('click',objKerangkaTampilan.kubus);
let objLuasBalok = document.querySelector('#luasBalok');
objLuasBalok.addEventListener('click',objKerangkaTampilan.balok);