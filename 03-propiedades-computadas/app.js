// instanciamos Vue.js
const app = new Vue({
    // declaramos que la aplicación estará en el
    // elemento con el ID app
    el: '#app',
    data: {
        mensaje: 'Hola mundo!',
        contador: 0
    },
    methods: {},
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 20,
                'bg-danger': this.contador > 20
            }
        }
    }
})