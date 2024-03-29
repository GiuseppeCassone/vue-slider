// Bonus:
// al click su una thumb, visualizzare in grande l'immagine corrispondente
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// quando il cursore va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const { createApp } = Vue;

createApp({
    data() {
        return {

            activeSlideIndex: 0,

             slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            
        }

    },
    methods: {
        // Funzione che permette di passare alla slide successiva e una volta arrivata al numero massimo torna alla prima
        nextSlide(){
            this.activeSlideIndex++;
            if(this.activeSlideIndex >= this.slides.length){
                this.activeSlideIndex = 0;
            }
        },

        // Funzione che permette di passare alla slide precedente e una volta arrivata al numero massimo torna all'ultima
        prevSlide(){
            this.activeSlideIndex--;
            if(this.activeSlideIndex < 0){
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

        // Funzione che permette di visualizzare, al click della thumb, la slide corrispettiva 
        changeSlide(index){
            this.activeSlideIndex = index;
        },

        // Funzione che fa andare avanti in automatico con intervallo di 3 secondi 
        startAutoplay(){
            this.goAutoplay = setInterval(() => {
                    this.nextSlide();
            }, 3000);
        },

        // Funzione che blocca l'autoplay con il mouse hover
        stopAutoplay(){
            clearInterval(this.goAutoplay);
        },


    },
    mounted() {
        this.startAutoplay();
    }
}).mount('#app');