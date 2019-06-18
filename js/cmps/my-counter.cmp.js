
var interval;

export default {
    template: `
        <section class="my-counter">
            <h2 :class="counterClass">
                <button @click="changeCounter(-1)">-</button>
                {{counter}} | 
                {{counterBinary}} |
                {{counterHex}}
                <button @click="changeCounter(1)">+</button>
            </h2>
        </section>
    `,
    props: ['initialValue'],
    data() {
        return {
            counter: this.initialValue
        }
    },
    methods: {
        changeCounter(diff) {
            this.counter += diff;
            this.$emit('increase', diff);
        }
    },
    computed: {
        counterClass() {
            return {
                danger : this.counter > 20,
                safe : this.counter < 15,

            }
        },
        counterBinary() {
            return this.counter.toString(2);
        },
        counterHex() {
            return this.counterBinary + 'Hey!'
        }
    },
    created() {
        console.log('Counter component Was Created');
        interval = setInterval(()=>{
            // console.log('INTERVAL IS RUNNING');
            // this.counter++
        }, 1000)
    },
    mounted() {
        console.log('MOunted to DOM');
    },
    destroyed() {
        console.log('Counter cmp destroyed');
        clearInterval(interval);
    }
}