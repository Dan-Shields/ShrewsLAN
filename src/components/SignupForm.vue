<template>
  <div class="form">
    <transition name="generic">
      <div v-if="submitButtonShow" class="close-button" @click="$emit('cancel')">
        <font-awesome-icon class="fas" icon="times"></font-awesome-icon>
      </div>
    </transition>

    <div class="header">
      <h3>Signup Sheet</h3>
    </div>

    <div class="body">
      <form>
        <p class="question">Name <span class="required"> *</span></p>
        <input
          v-model="formData.name"
          name="name"
          ref="name"
          placeholder="Barry Chuckle"
          required
          maxlength="255">

        <p class="question">Email <span class="required"> *</span></p>
        <input
          v-model="formData.email"
          name="email"
          ref="email"
          type="email"
          placeholder="barry@chuckle.co.uk"
          required
          maxlength="255">

        <!--DAYS-->
        <p class="question">Which day(s) will you be attending? <span class="required"> *</span></p>
        <select
          v-model="formData.days"
          ref="days"
          style="margin-bottom: 2px"
          required>
          <option value="">Select an option...</option>
          <option value="20">Saturday 20th July</option>
          <option value="21">Sunday 21st July</option>
          <option value="both">Both Days</option>
        </select>

        <!--GAMES-->
        <p class="question">What games are you interested in playing?</p>
        <div v-for="game in games" :key="game.id">
          <label class="checkbox-text"><input
            type="checkbox"
            v-model="formData.games[game.id]"
            style="width: 18px; margin: 0 0"
            :value="game.id">{{game.name}}</label>
        </div>

        <!--OTHER GAMES-->
        <input
          v-model="formData.games.other"
          ref="other"
          placeholder="Other..."
          maxlength="255">

        <!--CONFIRMATION BOX-->
        <p class="question">
          By checking the box below I confirm that I will pay the £5 entry fee in cash/via PayPal on the door.
          <input
            v-model="formData.confirm"
            ref="confirm"
            type="checkbox"
            style="width: 18px; margin: 0 0"
            required>
        </p>

        <input type="submit" style="display: none;" ref="fakesubmit">
      </form>
    </div>
    <div class="footer">
      <transition name="generic-quick" @after-leave="loaderShow = true">
        <CustomButton
          v-if="submitButtonShow"
          class="submit"
          :class="{notvalid: !valid}"
          @click="checkForm()">
          SUBMIT
        </CustomButton>
      </transition>
      <transition name="generic-quick" @after-leave="submitButtonShow = true">
        <grid-loader v-if="loaderShow" class="loader" color="#39c0f0"></grid-loader>
      </transition>
      <small class="error" v-if="error">{{error}}</small>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GridLoader from 'vue-spinner/src/GridLoader.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'SignupForm',

  components: {
    GridLoader,
    CustomButton
  },

  props: [
    'games'
  ],

  data () {
    return {
      formData: {
        name: '',
        email: '',
        days: '',
        games: {
          csgo: false,
          tf2: false,
          aos: false,
          gmod: false,
          worms: false,
          other: ''
        },
        confirm: null
      },
      formValid: {
        name: false,
        email: false,
        days: false,
        other: true,
        confirm: false
      },
      submitButtonShow: true,
      loaderShow: false,
      error: false
    };
  },

  methods: {
    checkForm () {
      if (!this.valid) {
        // Fake form submission to show error popups
        this.$refs.fakesubmit.click();
        return;
      }

      this.error = false;

      // Hide submit button and show loader
      this.submitButtonShow = false;

      // Data is valid, but we need to mutate it to the correct form //
      // /////////////////////////////////////////////////////////// //

      // Create copy of form data
      const data = JSON.parse(JSON.stringify(this.formData));

      // Move 'other' game category out of games
      data.other = data.games.other; delete data.games.other;

      // Remove unnecessary confirm field
      delete data.confirm;

      // Process games into array of strings
      const games = [];
      for (const game of Object.keys(data.games)) {
        if (data.games[game]) {
          games.push(game);
        }
      }
      data.games = JSON.stringify(games);

      // Data is now in the form we need //
      // /////////////////////////////// //

      const api = process.env.VUE_APP_API_HOST || '';

      window.setTimeout(() => {
        axios
          .post(api + '/api/register', data, {
            validateStatus: status => status >= 200 && status < 500
          })
          .then(response => {
            console.log(response);
            if (response.status === 200 || response.status === 201) {
              // Success!
              this.$emit('success', response.data);
            } else if (response.status === 422) {
              // Problem with payload
              this.loaderShow = false;

              if (response.data && response.data.email && response.data.email.length > 0 && response.data.email[0] === 'The email has already been taken.') {
                this.$refs.email.setCustomValidity('This email is already in use. Please use a different one, or contact us if you think this is an error.');
                this.$refs.fakesubmit.click();
              } else {
                this.error = 'An unknown error occurred, please try again later.';
              }
            } else {
              // Other error
              this.loaderShow = false;
              this.error = 'An unknown error occurred, please try again later.';
            }
          })
          .catch(error => {
            console.log(error);
          });
      }, 800);
    }
  },

  watch: {
    'formData.name' (newVal) {
      const name = this.$refs.name;

      name.setCustomValidity('');

      this.formValid.name = name.validity.valid;
    },
    'formData.email' (newVal) {
      const email = this.$refs.email;

      email.setCustomValidity('');

      this.formValid.email = email.validity.valid;
    },
    'formData.days' (newVal) {
      const days = this.$refs.days;

      days.setCustomValidity('');

      this.formValid.days = days.validity.valid;
    },
    'formData.games.other' (newVal) {
      const other = this.$refs.other;

      other.setCustomValidity('');

      this.formValid.other = other.validity.valid;
    },
    'formData.confirm' (newVal) {
      const confirm = this.$refs.confirm;

      this.formValid.confirm = confirm.validity.valid;
    }
  },

  computed: {
    valid () {
      return this.formValid.name && this.formValid.email && this.formValid.days && this.formValid.other && this.formValid.confirm;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  height: 563px;
}

.header h3 {
  font-weight: 200;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
  color: $primary;
}

.body {
  input,select{
    width: 100%;
    font-family: sans-serif;
  }

  .question {
    font-weight: 200;
    margin: 10px 0;
  }

  .checkbox-text{
    font-size: 14px;
    font-weight: 200;
    display: block;
    user-select: none;
    margin-bottom: 5px;
  }

  .required {
    color: red;
    font-style: normal;
    margin-left: 5px;
    font-size: 20px;
  }
}

.footer {
  .loader {
    margin: auto;
  }

  .error {
    color: red;
    margin-top: 100px;
  }
}

/** BUTTONS
**********/

.close-button {
  float: right;
  cursor: pointer;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  margin-right: -15px;
  position: relative;

  .fas {
    float: none;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 100%;
    line-height: 40px;
    vertical-align: middle;

    transition: 0.2s;
  }

  &:hover .fas {
    color: $secondary;
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
