import './book-preview.cmp.js';

export default {
    template: `
    <section>
            <h1>Books</h1>
            <ul class="book-list">
                <book-preview
                    v-for="currentBook in books" v-bind:book="currentBook">
                </book-preview>
            </ul>
        </section>
    `,
    props: ['books'],
}