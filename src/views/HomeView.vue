
<script setups>  
import axios from 'axios';
import Card from '@/components/Card.vue'; //importamos componente de Card

export default {
    components: { //aqui exportamos el componente Card que se importo anteriormente para poder utilizarlo en el DOM
      Card
    },
    name:"HomeView", //nombre de la funcion que estamos exportando
    data: function () { //en la propiedad data se almacenaran todos los datos de la funcion
      return {
        results: []//dentro de un array que llamamos result
      }
    },
    created () { //el parametro created() nos permite ejecutar el metodo fetch una vez el componente sea montado
      this.fetch()
    },
    methods:{ //en la propiedad methods declaramos todos los metodos que utilizara nuestro componente
      fetch() { // metodo fetch para consulta los datos
        let result = axios.get("http://localhost:3003/productos-get")
          .then((res) => {
            this.results = res.data.data;
            console.log('consulta data',this.results)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
  }
</script>

<template>
  <div id="HomeView">
    <h1 class="title"><a v-on:click="fetch" >Tienda</a></h1>
    <div class="container"  >
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered" >
        <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="result of results" v-bind:key="result._id" >
          <Card 
            v-bind:description="result.producto"
            v-bind:product="result.codigo"
            v-bind:price="result.valor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

