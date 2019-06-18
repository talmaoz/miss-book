Vue.component('book-preview', {
    props: ['book'],
    template: `
        <li>
            <h6>{{book.vendor}}</h6>
            <h6>{{book.price}}$</h6>
            <img v-bind:title="book.vendor" v-bind:src="'img/book/' + book.id +'.png'" />
        </li>
`,
})