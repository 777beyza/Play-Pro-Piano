const pianokeys = document.querySelectorAll(".key")

function playSound(newUrl){
    new Audio(newUrl).play()
}



pianokeys.forEach((pianokey,i) =>{
    const number = i < 9 ? '0' + (i+1) : (i+1)
    // i 9 dan küçükse 0 dan başlamak yok o yüzden i+1 yaptık.
    // : dan sonraki (i+1) eğer sayı 9dan büyükse sonraki sayıya 1 ekleyerek git
    // 0 ı karıştırma. : eğer öteki durumun tersiyse vs anlamına gelir.


    const newUrl = '24-piano-keys/key' + number + '.mp3'
    console.log(newUrl)

    pianokey.addEventListener('click',() => playSound(newUrl))

})