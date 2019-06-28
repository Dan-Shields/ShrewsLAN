<template>
  <div class="signup">
    <!--SIGNUP BUTTON-->
    <CustomButton @click="showModal = true">
      SIGNUP
    </CustomButton>

    <transition name="modal" :leave-to-class="leaveTo" @after-leave="reset()">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" :class="{success: success}">
            <transition name="generic" @after-leave="success = true">
              <div class="form" v-if="formOpen">
                <transition name="generic">
                  <div v-if="submitButtonShow" class="modal-close-button" @click="close_cancel()">
                    <i class="fas fa-times"></i>
                  </div>
                </transition>

                <div class="modal-header">
                  <h3>Signup Sheet</h3>
                </div>

                <div class="modal-body">
                  <SignupForm :games="games" v-model="formData"></SignupForm>
                </div>

                <div class="modal-footer">
                  <transition name="generic-quick" @after-leave="loaderShow = true">
                    <div v-if="submitButtonShow" class="modal-submit-button" @click="submit()">
                      SUBMIT
                    </div>
                  </transition>
                  <transition name="generic-quick">
                    <grid-loader v-if="loaderShow" class="loader" color="#39c0f0"></grid-loader>
                  </transition>
                </div>
              </div>
            </transition>
            <transition name="generic" @after-enter="drawCheckmark = true">
              <div v-if="success" class="show-success">

                <div class="modal-header">
                  <h3>SUCCESS</h3>
                </div>

                <div class="modal-body">
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
                  <p>You will shortly receive an email confirming your registration and providing details on how to attend the event. See you there!</p>
                </div>

                <div class="modal-footer">
                  <CustomButton class="submit success" @click="finish()">
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
import GridLoader from 'vue-spinner/src/GridLoader.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'Signup',

  props: [
    'games'
  ],

  data () {
    return {
      showModal: false,
      leaveTo: 'close-leave-to',
      formOpen: true,
      success: false,
      submitButtonShow: true,
      loaderShow: false,
      drawCheckmark: false
    };
  },

  methods: {
    close_cancel () {
      this.showModal = false;
    },

    close_success () {
      this.showModal = false;
    },

    submit () {
      this.submitButtonShow = false;

      // This needs to be on a small delay to allow for the css class change to propagate to the transition
      window.setTimeout(() => {
        this.formOpen = false;

        this.leaveTo = 'success-leave-to';
      }, 1500);
    },

    reset () {
      this.loaderShow = false;
      this.submitButtonShow = true;
      this.formOpen = true;
      this.success = false;
      this.drawCheckmark = false;
      this.leaveTo = 'close-leave-to';
    }
  },

  components: {
    SignupForm,
    GridLoader
  }
};
</script>

<style lang="scss" scoped>
.signup {
  margin-bottom: 50px;
}

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

  &.success {
    height: 383px;
  }

  .show-success {
    text-align: center;
  }
}

.modal-header h3 {
  font-weight: 200;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
  color: $primary;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  height: 60px;

  .loader {
    margin: auto;
  }
}

}

/** SUCCESS
**********/
.checkmark {
  width: 50%;
  margin: auto;
}

.circ {
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  transition: all 1s;
}

.tick{
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  transition: stroke-dashoffset 1s 0.2s ease-out;
}

.draw svg .path {
  opacity: 1;
  stroke-dashoffset: 0;
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
</style>
