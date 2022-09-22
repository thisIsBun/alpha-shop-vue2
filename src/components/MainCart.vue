<template>
  <section class="main__cart">
    <h4 class="cart__title">購物籃</h4>
    <div class="cart__products">

      <div
        class="product d-flex"
        data-id="1"
        v-for="product in products"
        :key="product.id"
      >
        <img
          :src="product.image"
          class="product__photo"
        >
        <div class="product__info">
          <div class="product__info__name">{{product.name}}</div>
          <div class="product__info__count d-flex justify-content-between align-items-center">
            <div class="count__icon minus"></div>
            <span class="count__number count">{{product.count}}</span>
            <div class="count__icon plus"></div>
          </div>
          <div class="product__info__price price_1">{{product.price | formatNumber}}</div>
        </div>
      </div>

    </div>
    <div class="cart__total justify-content-between">
      <span class="cart__subtitle">運費</span>
      <span class="amount freight__amount">免費</span>
    </div>
    <div class="cart__total justify-content-between">
      <span class="cart__subtitle">小計</span>
      <span class="amount total__amount">$5,298</span>
    </div>
  </section>
</template>

<script>

const dummyProduct = {
  products: [
    {
      id: 1,
      name: '破壞補丁修身牛仔褲',
      price: 3999,
      image: 'https://i.postimg.cc/YCKWsfqN/Photo-2x-product1.png',
    },
    {
      id: 2,
      name: '刷色直筒牛仔褲',
      price: 1299,
      image: 'https://i.postimg.cc/0y00GHdK/Photo-2x-product2.png',
    }
  ]
}

export default {
  data () {
    return {
      products: [],
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.products = dummyProduct.products.map(product => {
        return {
          ...product,
          count: 1,
        }
      })
    }
  },
  filters: {
    formatNumber (num) {
      return `$${num.toLocaleString("eu-US")}`
    }
  }
}
</script>