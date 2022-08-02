<script setup lang="ts">
defineProps<{
  description: string,
  product:string,
  price:Number
}>()
</script>

<template>
    <div class="card">
      <div class="card-header"><img src="@/img/product.png" alt=description/></div>
      <div class="card-content">
        <h3 class="title is-size-4">{{description}}</h3>
        <h2 class="subtitle">{{product}}</h2>
        <h2 class="subtitle-price">${{price}}</h2>
        <button class="button is-success is-rounded">Ver mas</button>
      </div>
    </div>
</template>

<style scoped lang="scss">

.subtitle-price{
  color: #ffffff;
}
.subtitle{
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: lighter;
  color: #ffffff;
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
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
    &:hover {
      color: #00FFF8;
    }
}
.card {
  display: inline-block;
  margin-bottom: 5%;
  background-color: #15263F;
  color: #8BACD9;
  border-radius: 16px;
  padding: 24px;
  width: 250rem;
  font-size: 1.5rem;
  box-shadow: 0 25px 50px 0 rgba(0,0,0,0.1);
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    width: 20rem;
    padding-bottom: 32px;
  }
  .card__product-img {
    cursor: pointer;
    position: center;
  }
}

</style>
