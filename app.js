
const test = document.querySelector('.front-contain') 
test.addEventListener("mouseover", function(e) {
    time = setTimeout(function(){
        const textAnim = document.querySelector('.Bref-presentation');
        new Typewriter(textAnim, {
            deleteSpeed: 5
            })
        .changeDelay(10)
        .typeString(" <strong class='sizeTitle'> 𝟷𝟶𝟶% All Eyes On You </strong> <br><br><br><br>")
        .pauseFor(300)
        .typeString(" <div class='sizeWorld'> La marque qui se donne pour mission de sublimer les travaux de rénovation, en les rendant aisés et agréables. </div>  <br>")
        .pause(1000)
        .typeString('#ᴍʏᴘᴇʀғᴇᴄᴛᴘʀɪɴᴄᴇ')
        .start()

    }, 2500);
})


