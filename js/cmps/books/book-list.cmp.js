import './book-preview.cmp.js';

export default {
    template: `
    <section>
            <h1>Books</h1>
            <ul class="book-list">
                <car-preview
                    v-for="currentBook in books" v-bind:car="currentBook">
                </car-preview>
            </ul>
        </section>
    `,
    props: ['books'],
}