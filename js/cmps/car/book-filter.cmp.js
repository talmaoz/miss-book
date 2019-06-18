export default {
    template: `
        <section class="car-filter">
            <h1>Cars Filter</h1>
            <input type="text" v-model="filterBy.txt" @input="emitFilter" />
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}