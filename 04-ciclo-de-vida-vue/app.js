const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Vemos el ciclo de vida de Vue'
    },

    // esto se ejecuta antes de instaciar VUE
    beforeCreate() {
        console.log('beforeCreate');
    },

    // esto se ejecuta al crear los metodos, observadores y eventos
    // pero aun no accede al DOM
    // Aun no se puede acceder al 'el'
    created() {
        console.log('created');
    },

    // se ejecuta antes de insertar el DOM
    beforeMount(){
        console.log('beforeMount');
    },

    // se ejecuta al insertar el DOM
    mounted(){
        console.log('Mounted');
    },

    // se ejecuta al detectar un cambio pero aun 
    // no lo inserta en el DOM
    beforeUpdate(){
        console.log('beforeUpdate');
    },

    // se ejecuta al realizar los cambios en el DOM
    updated(){
        console.log('Updated');
    },

    // se ejecuta antes de destruir una instancia
    beforeDestroy(){
        console.log('beforeDestroy');
    },

    // se ejecuta al destruir toda la instancia
    destroyed(){
        console.log('Destroyed');
    },

    methods:{
        destruir(){
            this.$destroy();
        }
    }
})