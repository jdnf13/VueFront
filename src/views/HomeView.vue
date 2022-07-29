<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <main>
    <header>
      <div class="container">
        <h2 class="item">Tienda</h2>
      </div>
    </header>

      <Card class="cards" description="Descripcion del primer producto agregado" 
          product="Producto 1"
          price="21.000" />
      <Card description="Descripcion del segundo producto agregado" 
          product="Producto 2"
          price="32.000" />

  </main>
</template>

<style scoped>
  .container {
    align-items: stretch;
  }
  .item {
    text-align: center;
    padding-right: 5rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
  .cards{
    display: inline-block;
  }
</style>
