<template>
  <div class="app-container">
    <h1 class="app__title">結帳</h1>
    <main>

      <!-- Main Stepper -->
      <MainStepper />

      <section class="main__form">
        <form
          action="#"
          class="form__parts"
        >
          <div class="part">
            <h2 class="part__title">寄送地址</h2>
            <div class="part__wrapper address">
              <div class="form-row title">
                <label for="">稱謂</label>
                <div class="select-wrapper">
                  <select
                    name=""
                    id=""
                  >
                    <option
                      value=""
                      selected
                    >先生</option>
                    <option value="">小姐</option>
                    <option value="">其他</option>
                  </select>
                </div>
              </div>
              <div class="form-row name">
                <label for="">姓名</label>
                <input
                  type="text"
                  placeholder="請輸入姓名"
                >
              </div>
              <div class="form-row phone">
                <label for="">電話</label>
                <input
                  type="text"
                  placeholder="請輸入行動電話"
                >
              </div>
              <div class="form-row email">
                <label for="">Email</label>
                <input
                  type="text"
                  placeholder="請輸入電子郵件"
                >
              </div>
              <div class="form-row city">
                <label for="">縣市</label>
                <div class="select-wrapper">
                  <select
                    name=""
                    id=""
                    required
                  >
                    <option
                      value=""
                      disabled
                      selected
                    >請選擇縣市</option>
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">台中市</option>
                    <option value="">嘉義縣</option>
                  </select>
                </div>
              </div>
              <div class="form-row address">
                <label for="">地址</label>
                <input
                  type="text"
                  placeholder="請輸入地址"
                >
              </div>
            </div>
          </div>

        </form>
      </section>

      <!-- Main Cart -->
      <MainCart />

      <!-- Main Button -->
      <MainButton
      :initialStep="currentStep" 
      @emitStepChange="changeStep"
      />

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
  },
  data () {
    return {
      currentStep: 1
    }
  },
  methods: {
    changeStep (stepNum) {
      this.currentStep = stepNum
    }
  }
}
</script>