<template>
  <div class="form">
    <transition name="generic">
      <div v-if="submitButtonShow" class="close-button" @click="$emit('cancel')">
        <i class="fas fa-times"></i>
      </div>
    </transition>

    <div class="header">
      <h3>Signup Sheet</h3>
    </div>

    <div class="body">
      <form>
        <p class="question">Name <span class="required"> *</span></p>
        <input v-model="formData.name" ref="name" placeholder="Barry Chuckle" required maxlength="255">

        <p class="question">Email <span class="required"> *</span></p>
        <input v-model="formData.email" ref="email" type="email" placeholder="barry@chuckle.co.uk" required maxlength="255">

        <!--DAYS-->
        <p class="question">Which day(s) will you be attending? <span class="required"> *</span></p>
        <select v-model="formData.days" ref="days" style="margin-bottom: 2px" required>
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
        <input v-model="formData.games.other" ref="other" placeholder="Other..." maxlength="255">

        <!--CONFIRMATION BOX-->
        <p class="question">
          By checking the box below I confirm that I will pay the £5 entry fee in cash/via PayPal on the door.
          <input v-model="formData.confirm" ref="confirm" type="checkbox" style="width: 18px; margin: 0 0" required>
        </p>

        <input type="submit" style="display: none;" ref="fakesubmit">
      </form>
    </div>
    <div class="footer">
      <transition name="generic-quick" @after-leave="loaderShow = true">
        <CustomButton v-if="submitButtonShow" class="submit" :class="{notvalid: !valid}" @click="checkForm()">
          SUBMIT
        </CustomButton>
      </transition>
      <transition name="generic-quick" @after-leave="submitButtonShow = true">
        <grid-loader v-if="loaderShow" class="loader" color="#39c0f0"></grid-loader>
      </transition>
    </div>
  </div>
</template>

<script>
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
        confirm: false
      },
      submitButtonShow: true,
      loaderShow: false
    }
    };
  },
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

.loader {
  margin: auto;
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

  .fas {
    float: none;
    color: #fff;

    width: 100%;
    line-height: 40px;
    vertical-align: middle;

    transition: 0.2s;

    &:hover {
      color: $secondary;
    }
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
