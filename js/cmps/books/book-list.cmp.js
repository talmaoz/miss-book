import './book-preview.cmp.js';

export default {
    template: `
    <section>
            <h1>Books</h1>
            <ul class="car-list">
                <car-preview v-for="currentCar in books" v-bind:car="currentCar">
                </car-preview>
            </ul>
        </section>
    `,
    props: ['books'],
}