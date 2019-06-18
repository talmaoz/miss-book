'use strict';

import carApp from './cmps/car/book-app.cmp.js';


var app = new Vue({
    el: '#app',
    mounted() {
        console.log('App has been Mounted!');
    },
    data: {
        message: 'Hello Vue!!!',
        shouldShowMoreInfo: false,
        count1 :0, count2: 0, total: 0,
        users: [
                { name: 'puki', balance: 80, imgUrl: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', profileUrl: 'http://linkedin.com' },
                { name: 'muki', balance: 20, imgUrl: 'https://adayinthelifeimages.com/wp-content/uploads/2016/05/brisbane-headshots-commercial-photography-09.jpg', profileUrl: 'http://linkedin.com' }
            ],
        theValue: 18
    },
   
    computed: {
        reversedMessage() {
            // console.log('COMPUTED WAS CALLED');
            return this.message.split('').reverse().join('')
        },
        

    },
    methods: {
        handleClick(ev) {
            console.log('Thanks for click!', ev);
            this.shouldShowMoreInfo = !this.shouldShowMoreInfo
        },
        
        updateTotal(diff) {
            // console.log('Val is: ', val);
            this.total += diff
        }
    },
    components: {
        carApp,
    }
})