// instanciamos Vue.js
const app = new Vue({
    // declaramos que la aplicación estará en el
    // elemento con el ID app
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue.js',
        frutas: [
            { nombre: 'Manzana', cantidad: 10 }, 
            { nombre: 'Pera', cantidad: 0 }, 
            { nombre: 'Platano', cantidad: 11 }, 
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });

            this.nuevaFruta = '';
        },
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }

            return this.total;
        }
    }
})