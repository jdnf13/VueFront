
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
  <div id="HomeView" class="grid">
    <div class="containerTitle"><h1 class="title1"><a v-on:click="fetch" >Tienda</a></h1></div>  
    <div class="container" >
      <div class="row" >
        <div class="col-5" v-for="result of results" v-bind:key="result._id" >
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

<style>
  .containerTitle{
    max-width: 100%;
    margin: auto;
  }
  .title1{
    margin-left: 34%;
  }
  .col-5 {
    margin-right: 8%;
  }
  @media screen and (min-width: 1024px) {
    .grid{
      position: center;
      display: inline-block;
      align-items: baseline;
      margin-left: -10rem;
      margin-right: -5rem

    }    
  }
  
  @media screen and (max-width: 1024px) {
    .grid{
      margin-left: 0rem
    }
  }


</style>