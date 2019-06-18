
import myCounter from './my-counter.cmp.js'


Vue.component('my-form', {
    template: `
        <section class="my-form" v-on:contextmenu.prevent="putFlag">
            <h1>My Form</h1>
            <form @submit.prevent="saveCar">
                <textarea v-model.trim="car.desc" placeholder="add multiple lines"></textarea>
                <input type="checkbox" value="Jack" v-model="car.checkedNames" />  Jack
                <input type="checkbox" value="John" v-model="car.checkedNames" /> John
                
                <input type="radio" value="One" v-model="car.picked"> One
                <input type="radio" value="Two" v-model="car.picked"> Two
                
                <select v-model="car.planSelected" multiple >
                    <option value="plan-9813">A Good plan over 2 years</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                
                <button :disabled="invalid">Save</button>
            </form>


            <hr />
            <pre>
                {{car}}
            </pre>
            <!-- <my-counter></my-counter> -->

        </section>
    `,
    data() {
        return {
            car: {
                desc: '',
                checkedNames: [],
                picked: 'Two',
                planSelected: ['B', 'A']
            }
        }
    },
    methods: {
        saveCar() {
            console.log('Saving Car:', this.car);
            // carService.save(this.car);
        },
        putFlag() {
            console.log('Putting flag!');
        }
    },
    computed: {
        invalid() {
            return !this.car.desc || this.car.checkedNames.length === 0
        }
    },
    components: {
        myCounter
    }

})