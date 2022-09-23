<template>
  <div class="app-container">
    <h1 class="app__title">結帳</h1>
    <main>
      <Stepper />
      <section class="main__form">
        <form
          action="#"
          class="form__parts"
        >

          <div class="part">
            <h2 class="part__title">運送方式</h2>
            <div
              class="part__wrapper shipment"
              id="shipping__method"
            >
              <div class="form-row standard active">
                <input
                  type="radio"
                  name="shipment"
                  checked
                  data-freight="0"
                >
                <label for="">
                  <p class="text">標準運送</p>
                  <p class="description">約 3~7 個工作天</p>
                </label>
                <span>免費</span>
              </div>
              <div class="form-row dhl">
                <input
                  type="radio"
                  name="shipment"
                  data-freight="500"
                >
                <label for="">
                  <p class="text">DHL 貨運</p>
                  <p class="description">48 小時內送達</p>
                </label>
                <span>$500</span>
              </div>
            </div>
          </div>

        </form>
      </section>
      <Cart />
      <Buttons />
    </main>
  </div>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import Cart from '../components/Cart.vue'
import Buttons from '../components/Button.vue'


export default {
  components: {
    Stepper,
    Buttons,
    Cart,
  },
  data () {
    return {
      
    }
  }
}
</script>