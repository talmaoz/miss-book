Vue.component('car-preview', {
    props: ['car'],
    template: `
        <li>
            <h6>{{car.vendor}}</h6>
            <h6>{{car.price}}$</h6>
            <img v-bind:title="car.vendor" v-bind:src="'img/car/' + car.id +'.png'" />
        </li>
`,
    
    created() {
        console.log('Car-Preview was created!', this.car);
    }
})