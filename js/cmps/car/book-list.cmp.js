import './book-preview.cmp.js';
// import './book-filter.cmp.js';

import carService from '../../services/car.service.js';


export default {
    template: `
    <section>
            <h1>Cars</h1>
            <ul class="car-list">
                <car-preview v-for="currentCar in cars" v-bind:car="currentCar">
                </car-preview>
            </ul>
        </section>
    `,
    props: ['cars'],
    data() {
        return {
           
        }
    },
    computed: {
     
    },
    created() {
        console.log('Car-List was created!');
    },
    methods: {
      
    }
}