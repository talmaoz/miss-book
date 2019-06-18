import carService from '../../services/car.service.js'
import carList from './book-list.cmp.js'
import carFilter from './book-filter.cmp.js'

export default {
    template: `
        <section class="car-app">
            <h1>Book App</h1>
            <car-filter @set-filter="setFilter"></car-filter>
            <car-list :cars="carsForDisplay"></car-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            cars: carService.query()
        }
    },
    created() {
        console.log('Created!');
    },
    computed: {
        carsForDisplay() {
            if (!this.filter) return this.cars;
            return this.cars.filter(car => car.vendor.includes(this.filter.txt))
        }
    },
    methods: {
        setFilter(filter) {
            console.log('Car App got the filter', filter);
            this.filter = filter
        }
    },
    components: {
        carList,
        carFilter
    }
}