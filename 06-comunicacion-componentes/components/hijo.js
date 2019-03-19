/******
 * Para sumar desde el hijo emitimos un envento personalizado
 * el cual va a ser leido por el padre
 * en este caso el evento es 'sumaHijo'
 * ******/


Vue.component('hijo', {
    template: //html
        `
        <div class="py-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>

            <button @click="$emit('sumaHijo')">+</button>

            <h4>Nombre: {{ nombre }}</h4>
        </div>
        `,
        
        props: ['numero'],
        data(){
            return{
                nombre: 'Samuel',
            }
        },

        mounted(){
            this.$emit('nombreHijo', this.nombre);
        }
})