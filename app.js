const body = document.querySelector('body');
const button = document.querySelector('button');

const colors = [ 'black', 'red', 'yellow','green','purple','blue','aqua'];

button.addEventListener('click', changeBackround);

let sıra = 0;

function changeBackround() {

    //Rastgele

    // const rastgeleSayi = Math.floor(Math.random() * colors.length)
    // const secilenRenk = colors[rastgeleSayi];
    // body.style.backgroundColor = secilenRenk;
    // console.log('seçilen renk', rastgeleSayi);

    // sıralı ilerleme
    console.log(sıra);
    if (sıra == 7) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;



}

