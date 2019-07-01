<template>
  <div class="signup">
    <!--SIGNUP BUTTON-->
    <CustomButton @click="showModal = true">
      SIGNUP
    </CustomButton>

    <!--MODAL-->
    <transition name="modal" :leave-to-class="leaveTo" @after-leave="reset()">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" :class="{success: showSuccess}">

            <!--FORM-->
            <transition name="generic" @after-leave="showSuccess = true">
              <div v-if="showForm" class="form">
                <SignupForm :games="games" @success="success" @cancel="close()"></SignupForm>
              </div>
            </transition>

            <!--SUCCESS SCREEN-->
            <transition name="generic" @after-enter="drawCheckmark = true">
              <div v-if="showSuccess" class="success-screen">
                <div class="header">
                  <h3>SUCCESS</h3>
                </div>

                <div class="body">
                  <div class="checkmark" :class="{draw: drawCheckmark}">
                    <svg
                      version="1.1"
                      id="tick"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 37 37"
                      style="enable-background:new 0 0 37 37;"
                      xml:space="preserve">

                      <path
                        class="circ path"
                        style="fill:none;stroke:#39F06A;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"
                        d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                      />

                      <polyline
                        class="tick path"
                        style="fill:none;stroke:#39F06A;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"
                        points="11.6,20 15.9,24.2 26.4,13.8 "/>

                    </svg>
                  </div>
                  <p v-if="name">Thanks, {{name}}!</p>
                  <p>You'll receive an email closer to the event confirming your registration and providing details on how to attend the event. Feel free to invite your friends in the meantime. See you there!</p>
                </div>

                <div class="footer">
                  <CustomButton class="submit success" @click="close()">
                    CLOSE
                  </CustomButton>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm';
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'Signup',

  props: [
    'games'
  ],

  data () {
    return {
      showModal: false,
      showForm: true,
      showSuccess: false,
      leaveTo: 'close-leave-to',
      drawCheckmark: false,
      name: false
    };
  },

  methods: {
    close () {
      this.showModal = false;
    },

    success (data) {
      if (data && data.name) {
        this.name = data.name;
      }

      // Hide form (success screen will automatically show after it has gone)
      this.showForm = false;

      // Setup leave animation for when user choses to close success screen
      this.leaveTo = 'success-leave-to';
    },

    reset () {
      this.showForm = true;
      this.showSuccess = false;
      this.drawCheckmark = false;
      this.leaveTo = 'close-leave-to';
      this.name = false;
    }
  },

  components: {
    SignupForm,
    CustomButton
  }
};
</script>

<style lang="scss" scoped>
.signup {
  margin-bottom: 50px;
}

/** MODAL
********/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .9);
  display: table;
  color: black;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: darken($secondary,30%);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  color: #fff;
  text-align: left;

  display: flex;
  align-items: center;

  height: 605px;
}

/** MODAL TRANSITION
*******************/
.modal-enter, .close-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(.9);
  }
}

.success-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(1.1);
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}

.modal-enter-to, .modal-leave {
  opacity: 1;

  .modal-container {
    transform: scale(1);
  }
}

/** GENERIC TRANSITIONS
******************/
.generic-leave-to, .generic-enter, .generic-quick-leave-to, .generic-quick-enter {
  opacity: 0;
}

.generic-leave-active, .generic-enter-active {
  transition: opacity .8s;
}

.generic-quick-leave-active, .generic-quick-enter-active {
  transition: opacity .3s;
}

/** SUCCESS SCREEN
*****************/
.modal-container.success {
  height: 420px;

  .success-screen {
    text-align: center;

    .header h3 {
      font-weight: 200;
      font-size: 30px;
      margin-top: 0;
      margin-bottom: 10px;
      color: $primary;
    }

    .body {
      height: 310px;

      .checkmark {
        width: 50%;
        margin: auto;

        .circ {
          opacity: 0;
          stroke-dasharray: 130;
          stroke-dashoffset: 130;
          transition: all 1s;
        }

        .tick {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          transition: stroke-dashoffset 1s 0.2s ease-out;
        }

        &.draw svg {
          .path {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }
      }
    }

    .footer {
      height: 60px;
    }
  }
}

</style>
