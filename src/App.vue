<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import './styles/ResetCss.scss';
@import './styles/BasicSetting.scss';


/*  Mobile RWD  */
.app-container {
  padding: 0 11vw;
  width: 100%;
  margin: 0 auto;
}

.app__title {
  font-weight: 700;
  margin-top: 80px;
  font-size: 32px;
}

main {
  margin-top: 16px;
  padding-bottom: 40px;

  .main__stepper {
    margin-top: 24px;
    display: flex; //讓 step 橫向排列

    .step {
      display: flex; //讓 circle, line 橫向排列
      flex: 1; //讓每個 step分成三等份
      position: relative;
      text-align: center; //讓數字置中
      @include getStepNums(3);

      &:nth-child(1) .step__line {
        left: calc(32px + 32px);
        right: calc(-50% + 16px + 32px);
      }

      &:nth-child(2) {
        justify-content: center;

        .step__line {
          left: calc(50% + 16px + 32px);
          right: calc(-100% + 32px + 32px);
        }
      }

      &:nth-child(3) {
        justify-content: flex-end;
      }

      .step__circle {
        width: 32px;
        height: 32px;
        border: 1px solid var(--stepper-color);
        color: var(--stepper-color);
        border-radius: 50%;
        font-weight: 700;
        line-height: 32px;
      }

      .step__label {
        display: none;
      }

      .step__line {
        height: 2px;
        background-color: var(--stepper-line);
        position: absolute;
        top: 50%;
      }

      &.active,
      &.checked {
        .step__circle {
          border-color: var(--stepper-circle-bg);
          background: var(--stepper-circle-bg);
          color: var(--stepper-circle-text);
        }

        .step__line {
          background: var(--stepper-text-active);
        }
      }

      &.checked {
        .step__circle::after {
          content: "\2714";
        }
      }
    }
  }

  .main__form {
    .form__parts {
      .part {
        .part__title {
          margin: 24px auto;
          font-size: 24px;
        }

        .part__wrapper {
          .form-row {
            margin-bottom: 24px;

            label {
              display: block;
              color: var(--form-text);
              padding-bottom: 8px;
              font-size: 12px;
              font-weight: 700;
            }

            input {
              @extend %input-style;
              background: var(--main-bg);
              color: var(--main-color);
            }

            .select-wrapper {
              position: relative;
              z-index: 0;

              &::after {
                position: absolute;
                top: 50%;
                right: 18px;
                transform: translateY(-50%);
                z-index: -1;
                content: "\25BE";
                color: var(--form-triangle);
              }

              select {
                @extend %input-style;
                -webkit-appearance: none;
                color: var(--main-color);
                background: transparent;
                cursor: pointer;

                &:invalid {
                  color: #747474;
                }
              }
            }

            &.standard,
            &.dhl {
              position: relative;
              border: 1px solid var(--form-border-disable);
              border-radius: 4px;
              height: 60px;
              display: flex;
              align-items: center;

              &.active {
                border-color: var(--form-border-active);
              }

              label {
                .text {
                  color: var(--form-deliver-text);
                  font-size: 14px;
                  line-height: 20px;
                }

                .description {
                  color: var(--form-deliver-description);
                  font-size: 12px;
                  line-height: 16px;
                }
              }

              span {
                position: absolute;
                top: 13px;
                right: 20px;
                color: var(--form-deliver-text);
                font-size: 12px;
                line-height: 16px;
              }

              input[type="radio"] {
                -webkit-appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: auto 20px;
                cursor: pointer;

                &:checked {
                  box-shadow: inset 0 0 0 6px var(--form-radio);
                }
              }
            }
          }

          &.address {
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-column-gap: 8vw;

            .title {
              grid-column: 1 / 2;
            }

            .name {
              grid-column: 2 / 3;
            }

            .phone,
            .email,
            .city,
            .address {
              grid-column: 1 / 3;
            }
          }

          &.payment {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 8vw;

            .cardname,
            .cardnumber {
              grid-column: 1 / 3;
            }

            .cardexpire {
              grid-column: 1 / 2;
            }

            .cardcvc {
              grid-column: 2 / 3;
            }
          }
        }
      }
    }
  }

  .main__cart {
    width: 100%;
    border: 1px solid var(--cart-border);
    border-radius: 8px;
    padding: 1rem;
    background: var(--cart-bg);

    .cart__title {
      display: none;
    }

    .cart__products {
      .product:first-child {
        padding-bottom: 18px;
      }

      img {
        width: 26.7vw;
        height: 26.7vw;
      }

      .product__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        .product__info__count {
          width: 31vw;

          .count__icon {
            position: relative;
            width: 7vw;
            height: 7vw;
            background: var(--cart-btn-bg);
            border-radius: 50%;
            cursor: pointer;

            &:first-child::after {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              content: "\2212";
            }

            &:last-child::after {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              content: "\002B";
            }
          }

          .count__number {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }

        .product__info__price {
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }

    .cart__total {
      font-size: 14px;
      display: flex;
      align-items: end;
      border-top: 1px solid var(--cart-border);
      margin-top: 1rem;
      width: 100%;
      height: 37px;

      .cart__subtitle {
        line-height: 20px;
      }

      .amount {
        font-weight: 700;
        line-height: 17px;
      }
    }
  }

  .main__button {
    padding-top: 24px;
    border-top: 1px solid var(--other-border);
    margin-top: 32px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    &__previous,
    &__next {
      width: 100%;
      height: 46px;
    }

    &__previous {
      justify-content: start;
      align-items: center;
      color: var(--main-color);

      span::before {
        content: "\2190";
        padding-right: 12.5px;
      }
    }

    &__next {
      background: $button-bg;
      padding: 11px 39.5px 11px 38.5px;
      border-radius: 8px;
      color: $button-color;

      span::after {
        content: "\2192";
        padding-left: 13.5px;
      }
    }
  }
}

/*  >= 375px RWD  */
@media screen and (min-width: 375px) {

  main {
    margin-top: 48px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: repeat(12, 4.6vw);
    grid-template-rows: 24px 390px 81px;
    grid-column-gap: 2.08vw;

    .main__stepper {
      margin-top: 0;
      grid-column: 1 / 7;
      grid-row: 1 / 2;

      .step {
        align-items: center;

        &:nth-child(1) .step__line {
          left: calc(24px + 0.5vw + 64px + 32px);
          right: calc(-50% + (24px + 0.5vw + 64px) / 2 + 32px);
        }

        &:nth-child(2) {
          .step__line {
            left: calc(50% + (24px + 0.5vw + 64px) / 2 + 32px);
            right: calc(-100% + 64px + 0.5vw + 24px + 32px);
          }
        }

        .step__circle {
          width: 24px;
          height: 24px;
          font-size: 12px;
          line-height: 24px;
        }

        .step__label {
          display: block;
          margin-left: 0.5vw;
          color: var(--stepper-color);
        }

        &.active,
        &.checked {
          .step__label {
            color: var(--stepper-text-active);
          }
        }
      }
    }

    .main__form {
      flex: 1;
      grid-column: 1 / 7;
      grid-row: 2 / 3;

      .form__parts {
        .part {
          .part__title {
            margin: 64px auto 24px auto;
            font-size: 24px;
          }

          .part__wrapper {
            &.address {
              grid-template-columns: repeat(6, 1fr);
              grid-column-gap: 2.1vw;

              .title,
              .city {
                grid-column: 1 / 3;
              }

              .name,
              .address {
                grid-column: 3 / 7;
              }

              .phone {
                grid-column: 1 / 4;
              }

              .email {
                grid-column: 4 / 7;
              }
            }

            &.payment {
              grid-template-columns: repeat(6, 1fr);
              grid-column-gap: 2.1vw;

              .cardname {
                grid-column: 1 / 5;
              }

              .cardnumber {
                grid-column: 1 / 5;
              }

              .cardexpire {
                grid-column: 1 / 4;
              }

              .cardcvc {
                grid-column: 4 / 7;
              }
            }
          }
        }
      }
    }

    .main__cart {
      grid-column: 8 / 13;
      grid-row: 1 / 4;
      width: 100%;
      padding: 32px 1.67vw;

      .cart__title {
        display: block;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 34px;
      }

      .cart__products {
        .product:first-child {
          padding-bottom: 34px;
        }

        img {
          width: 100px;
          height: 100px;
        }

        .product__info {
          position: relative;
          flex: 1;
          align-items: start;
          padding: 0 0 0 2.9vh;

          .product__info__count {
            position: absolute;
            top: 50%;
            left: 2.9vh;
            width: 8.1vw;

            .count__icon {
              width: 26px;
              height: 27px;
            }

            .count__number {
              font-weight: 700;
              font-size: 16px;
              line-height: 17px;
            }
          }

          .product__info__price {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }

      .cart__total {
        margin-top: 2rem;
      }
    }

    .main__button {
      grid-column: 1 / 7;
      grid-row: 3 / 4;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      &__previous,
      &__next {
        width: 174px;
        height: 46px;
      }

      &__previous {
        span::before {
          content: "\2190";
          padding-right: 12.5px;
        }
      }

      &__next {
        background: var(--button-bg);
        padding: 11px 39.5px 11px 38.5px;
        border-radius: 8px;
        color: var(--button-color);

        span::after {
          content: "\2192";
          padding-left: 13.5px;
        }
      }
    }
  }
}
</style>