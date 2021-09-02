console.log('ok', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        mails: [],
    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                const mail = res.data.response;

                this.mails.push(mail);

            });
        };

    },
});