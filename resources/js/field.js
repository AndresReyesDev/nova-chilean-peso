import money from 'v-money'

Nova.booting((Vue, router) => {
    Vue.use(money, {
        decimal: ',',
        thousands: '.',
        prefix: '$ ',
        suffix: '',
        precision: 0,
        masked: false
    });

    Vue.component('index-peso-chile', require('./components/IndexField'));
    Vue.component('detail-peso-chile', require('./components/DetailField'));
    Vue.component('form-peso-chile', require('./components/FormField'));
})
