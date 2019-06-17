<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-close-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
            </div>

          <div class="modal-header">
            <slot name="header">
              <h3>Signup Sheet</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p class="question">Name</p>
              <input name="name">

              <p class="question">Email</p>
              <input name="email" type="email" placeholder="divdav@ballbag.co.uk">

              <p class="question">What day(s) will you be attending?</p>
              <select style="margin-bottom: 2px">
                <option value="">Select Option</option>
                <option value="Sat">Saturday 20th July</option>
                <option value="Sun">Sunday 21th July</option>
                <option value="Both">Both Days</option>
              </select>

              <p class="question">What games will you be playing?</p>
              <p class="checkbox-text"><input class="question" type="checkbox" name="games" style="width: 18px; margin: 0 0" value="csgo">CS:GO</p>
              <p class="checkbox-text"><input class="question" type="checkbox" name="games" style="width: 18px; margin: 0 0" value="tf2">Team Fortress 2</p>
              <p class="checkbox-text"><input class="question" type="checkbox" name="games" style="width: 18px; margin: 0 0" value="aos">Ace of Spades</p>
              <p class="checkbox-text"><input class="question" type="checkbox" name="games" style="width: 18px; margin: 0 0" value="CS:GO">CS:GO</p>
              <p class="checkbox-text"><input class="question" type="checkbox" name="games" style="width: 18px; margin: 0 0" value="CS:GO">CS:GO</p>

              <p class="question">By checking the box below I confirm that I will pay £5 cash on the door entry fee to enter the building</p>
              <input type="checkbox">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <div class="modal-default-button" @click="$emit('submit')">
                OK
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SignupModal'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

  input,select{
    width: 100%;
  }
}

.question {
  font-weight: 200;
  margin: 10px 0;
  font-style: italic;
}

.checkbox-text{
  font-size: 14px;
  font-weight: 200;
  margin: 3px 0;
}

$width: 60px;
$height: 50px;

.modal-close-button {
  float: right;
  cursor: pointer;
  .fas {
    margin-top: 10px;
    color: #fff;

    transition: 0.2s;

  &:hover {
    color: $secondary;
  }
  }
}

.modal-default-button {
  border-color: $primary;
  border-radius: 5px;
  border-width: 5px;
  border-style: solid;

  background-color: rgba(0,0,0,0);

  margin: auto;

  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  line-height: $height;
  vertical-align: middle;

  width: $width;
  height: $height;

  transition: 0.2s;

  &:hover {
    color: black;
    width: $width + 15px;
    background-color: $primary;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
}

.modal-enter-to {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
