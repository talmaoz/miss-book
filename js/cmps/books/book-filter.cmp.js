export default {
    template: `
        <section class="book-filter">
            <h1>Books Filter</h1>
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
