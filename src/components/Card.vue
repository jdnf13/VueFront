<script setup lang="ts">
defineProps<{
  description: string,
  product:string,
  price:string
}>()
</script>

<template>
    <div class="card">
    <div class="card__product-img">
        <img class="card__img"  alt="product-image" src="@/img/product.png">
    </div>
    <div class="card__content">
        <p class="card__name">{{product}}</p>
        <p class="card__description" v-if="description">{{ description }}</p>
        <div class="card__content-bottom">
            <div class="card__price">
                <p>${{price}}</p>
            </div>
        </div>
    </div>
    <div class="card__footer">
        <div class="card__avatar">
            <img src="@/img/avatar.png" alt="avatar-image">
        </div>
        <div class="card__avatar">
            <img src="@/img/avatar.png" alt="avatar-image">
        </div>
        <div class="card__avatar">
            <img src="@/img/avatar.png" alt="avatar-image">
        </div>
        
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
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
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 0 16px 0;
    @media screen and (min-width: 768px) {
      gap: 16px;
      padding: 24px 0;
    }
    .card__name {
      color: white;
      font-size: 2.2rem;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #00FFF8;
      }
    }
    .card__description {
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: lighter;
    }
    .card__content-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: 4px;
      @media screen and (min-width: 768px) {
        padding-top: 6px;
      }
      > * {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
      }
      .card__price {
        color: #ffffff;
      }
    }
  }
  .card__footer {
    display: flex;
    align-items: center;
    border-top: 1px solid #2E405A;
    gap: 16px;
    padding-top: 16px;
    .card__avatar {
      display: flex;
      border-radius: 90px;
      border: 1px solid #2E405A;
      cursor: pointer;
      img {
        width: 33px;
      }
    }
  }
}

</style>
