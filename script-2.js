const petsModule = (function () {
    const _data = [{
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type B"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type M"
        },
        {
            image: "https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bGFtYnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Boncuk",
            type: "Lamb",
            sound: "lambSound",
            soundText: "Lamb sound - type L"
        },
        {
            image: "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: "Maviş",
            type: "Bird",
            sound: "birdSound",
            soundText: "Bird sound - type C"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");


    const getButtons = function () {

        return document.querySelectorAll("button");
    }

    const createPetElement = function (pet) {
        return "<tr><td><img class='pet-image' src='" + pet.image + "' /></td><td>" + pet.name + "</td><td>" + pet.type + "</td><td><button data-sound='" + pet.sound + "'>" + pet.soundText + "</button></td></tr>"
    };

    const addToTable = function (content) {
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function () {
        for (let i = 0; i < _data.length; i++) {
            addToTable(createPetElement(_data[i]));
        }
    }



    const bindEvents = function () {
        const buttons = getButtons();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (e) {
                e.stopPropagation();
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if (soundElement) {
                    soundElement.play();
                }
            })
           }

           function getId(id) {
        
            document.getElementById(id).play();
        
        }
        document.addEventListener("keydown", function (e) {
            if (e.keyCode === 66) {
                getId("bark");
            } else if (e.keyCode === 77) {
                getId("meow");
            }
            else if(e.keyCode === 76) {
                getId("lambSound")
            }
            else if(e.keyCode === 67) {
                getId("birdSound");
            }
        })
    }

    const bindColorAndImg = function () {
        let tempTr;
        const $trs = document.querySelectorAll("tr");
        // bütün satırları getirdiğimizde name, type, sound, image satırı da geliyordu ve o satıra tıklandığında bişey yapılması istemiyorum
        let newTrs = Array.from($trs).slice(1);
        
        newTrs.forEach(cur => {
            cur.addEventListener("click", function () {

                // Satıra tıklandığında arka plan renginin değişmesi
                if (tempTr !== undefined) {
                    tempTr.classList.toggle("change-color");
                }
                tempTr = cur;

                cur.classList.toggle("change-color");

                let $mainImage = document.querySelector(".main-image");

                // mainImage'i satırdaki image lerle değiştirme  
                let tempImg = cur.firstElementChild.firstElementChild.src;
                $mainImage.src = tempImg;







            })

        })


    }

    const init = function () {
        putPetsInHtml();
        bindEvents();
        bindColorAndImg();
    }

    return {
        init: init
    }
})();
