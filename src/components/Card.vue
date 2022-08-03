<script setup lang="ts">
defineProps<{
  description: string,
  product:string,
  price:Number
}>()
</script>

<template>
    <div class="card">
      <div class="card-header"><img class="card__product-img" src="@/assets/2020-05-18 08.32.02_1.png" alt=description/></div>
      <div class="card-content">
        <h3 class="title is-size-4">{{description}}</h3>
        <h2 class="subtitle">{{product}}</h2>
        <h2 class="subtitle-price">${{price}}</h2>
        <hr class="divisor"/>
        <a class="button" ><p class="text-button">Ver mas...</p></a>
      </div>
    </div>
</template>

<style scoped lang="scss">

.divisor{
  color: black;
}
.button{
    text-decoration: none;
    padding: 0px;
    padding-left: 2px;
    padding-right: 0px;
    font-family: helvetica;
    font-weight: 300;
    font-size: 20px;
    color: rgb(44, 44, 44);;
    border-radius: 15px;
    width: 105px;
    height: 50px;
  cursor: pointer;
}
.button:hover{
  color: #919191;
  text-decoration: none;
  }

.subtitle-price{
  color: rgb(44, 44, 44);
}
.subtitle{
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: lighter;
  color: rgb(44, 44, 44);
}
.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0 16px 0;
    @media screen and (min-width: 768px) {
      gap: 16px;
      padding: 24px 0;
    }
}
.title{
  color: rgb(44, 44, 44);
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
    &:hover {
      color: #919191;
      opacity: 0.6;
    }
}
.card {
  display: inline-block;
  margin-bottom: 5%;
  background-color: #e0e0e0;
  color: #8BACD9;
  border-radius: 16px;
  padding: 24px;
  font-size: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
  @media screen and (min-width: 750px) {
    font-size: 1rem;
    width: 20rem;
    height: 33rem;
    padding-bottom: 32px;
    margin-left: -32px;
  }
  @media screen and (max-width: 765px) {
    font-size: 1rem;
    width: 15rem;
    height: 37rem;
    padding-bottom: 32px;
    margin-left: 0px;
  }
  .card__product-img {
    cursor: pointer;
    position: center;
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
