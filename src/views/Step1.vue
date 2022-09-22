<template>
  <div class="app-content">
    <div class="app-container">
      <h1 class="app__title">結帳</h1>
      <main>
        <section class="main__stepper">
          <div class="step active">
            <div class="step__circle"></div>
            <div class="step__label">寄送地址</div>
            <div class="step__line"></div>
          </div>
          <div class="step">
            <div class="step__circle"></div>
            <div class="step__label">運送方式</div>
            <div class="step__line"></div>
          </div>
          <div class="step">
            <div class="step__circle"></div>
            <div class="step__label">付款條件</div>
          </div>
        </section>
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
            <div class="part d-none">
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
            <div class="part d-none">
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
        <section class="main__cart">
          <h4 class="cart__title">購物籃</h4>
          <div class="cart__products">
            <div
              class="product d-flex"
              data-id="1"
            >
              <img
                src="https://i.postimg.cc/YCKWsfqN/Photo-2x-product1.png"
                alt=""
                class="product__photo"
              >
              <div class="product__info">
                <div class="product__info__name">破壞補丁修身牛仔褲</div>
                <div class="product__info__count d-flex justify-content-between align-items-center">
                  <div class="count__icon minus"></div>
                  <span class="count__number count">1</span>
                  <div class="count__icon plus"></div>
                </div>
                <div class="product__info__price price_1">$3,999</div>
              </div>
            </div>
            <div
              class="product d-flex"
              data-id="2"
            >
              <img
                src="https://i.postimg.cc/0y00GHdK/Photo-2x-product2.png"
                alt=""
                class="product__photo"
              >
              <div class="product__info">
                <div class="product__info__name">刷色直筒牛仔褲</div>
                <div class="product__info__count d-flex justify-content-between align-items-center">
                  <div class="count__icon minus"></div>
                  <span class="count__number count">1</span>
                  <div class="count__icon plus"></div>
                </div>
                <div class="product__info__price price_2">$1,299</div>
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
        <section class="main__button">
          <button class="main__button__next">
            下一步<span></span>
          </button>
          <button class="main__button__previous d-none">
            <span></span>上一步
          </button>
        </section>
      </main>
    </div>
  </div>
</template>