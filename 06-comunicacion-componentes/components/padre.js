/******
 * Para sumar desde el hijo emitimos un envento personalizado
 * el cual va a ser leido por el padre
 * en este caso el evento es 'sumaHijo'
 * ******/


Vue.component('padre', {
    template: //html
        `
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>

            <button class="btn btn-danger" @click="numeroPadre++">+</button>

            {{nombrePadre}}

            <hijo   :numero="numeroPadre" 
                    @nombreHijo="nombrePadre = $event" 
                    v-on:sumaHijo="numeroPadre++">
            </hijo>
        </div>
        `,

        data(){
            return {
                numeroPadre: 0,
                nombrePadre: '',
            }
        },

        updated(){
            console.log('Padre updated');
        }
})