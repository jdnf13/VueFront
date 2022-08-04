<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="contaier-nav">
    <header>
      <img alt="Aqui Va el logo" class="logo" src="@/assets/Café Zen-02.png" />      
    </header>    
  </div>
  <div class="container">
    <div class="wrapper">
        <nav>
          <RouterLink to="/shop">Tienda</RouterLink>
          <RouterLink to="/about">Nosotros</RouterLink>
        </nav>
      </div>
    <RouterView />
  </div>
</template>

<style >
header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 100%;
}

.contaier-nav{
  margin-top: 12%;
  position: fixed;
}

.container {
  width: 100%;
}

.logo {
  max-width: 15%;
  max-height: 15%;
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-right: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media  (min-width: 400px) {
  .logo{
    margin-top: -20%;
    margin-right: 48%;
  }
  .wrapper{
    margin-top: 10%;
    margin-left: -11%;
  }
  nav{
    position: fixed;
    margin-top:-10%;
    margin-left: -2%;
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}
@media  (min-width: 540px) {
  .logo{
    margin-top: -20%;
    margin-right: 48%;
  }
  .wrapper{
    margin-top: 10%;
    margin-left: -11%;
  }
  nav{
    position: fixed;
    margin-top:3%;
    margin-left: -1%;
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}
@media  (min-width: 700px) {
  .logo{
    margin-top: -15%;
  }
  .wrapper{
    margin-top: 17%;
    margin-left: -12%;
  }
  nav{
    position: fixed;
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}

@media  (min-width: 950px) {
  .logo{
    margin-top: -15%;
  }
  .wrapper{
    margin-top: 17%;
    margin-left: -20%;
  }
  nav{
    position: fixed;
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}

@media  (min-width: 990px) {
  .logo{
    margin-top: -15%;
    margin-left: 42%;
  }
  .wrapper{
    margin-top: 14%;
    margin-left: -3%;
  }
  nav{
    position: fixed;
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}

@media (min-width: 1025px) {
  .logo{
    margin-top: -12%;
    margin-left: 41%;
  }
  .wrapper{
    margin-top: 50%;
    margin-left: 0%;
  }
  nav{
    position: fixed;
    margin-left: -5%;
    margin-top:-2.5%
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}

@media  (min-width: 1100px) {
  .logo{
    margin-top: -15%;
    margin-left: 43%;
  }
  .wrapper{
    margin-top: 14%;
    margin-left: -3%;
  }
  nav{
    position: fixed;
    margin-left: 35%;
    margin-top:0%
  }

  nav a {
    padding: 0 1rem;
    border: none;
  }
}
@media (min-width: 1200px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin-top: 16%;
    margin-left: 13%;
    position: fixed;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
