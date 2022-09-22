<template>
  <div class="app-container">
    <h1 class="app__title">結帳</h1>
    <main>
      <MainStepper />
      <section class="main__form">
        <form
          action="#"
          class="form__parts"
        >

          <div class="part">
            <h2 class="part__title">付款資訊</h2>
            <div class="part__wrapper payment">
              <div class="form-row cardname">
                <label for="">持卡人姓名</label>
                <input
                  type="text"
                  placeholder="John Doe"
                >
              </div>
              <div class="form-row cardnumber">
                <label for="">卡號</label>
                <input
                  type="text"
                  placeholder="1111 2222 3333 4444"
                >
              </div>
              <div class="form-row cardexpire">
                <label for="">有效期限</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                >
              </div>
              <div class="form-row cardcvc">
                <label for="">CVC / CCV</label>
                <input
                  type="text"
                  placeholder="123"
                >
              </div>
            </div>
          </div>

        </form>
      </section>
      <MainCart />
      <MainButton />
    </main>
  </div>
</template>

<script>
import MainStepper from '../components/MainStepper.vue'
import MainCart from '../components/MainCart.vue'
import MainButton from '../components/MainButton.vue'

export default {
  components: {
    MainStepper,
    MainButton,
    MainCart,
  }
}
</script>