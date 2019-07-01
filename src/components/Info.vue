<template>
  <div class="info-wrapper">
    <div class="info">
      <div class="header">
        <h1>What is ShrewsLAN?</h1>
      </div>
      <p>ShrewsLAN is a two day PC gaming LAN party hosted at Mount Pleasant Primary School in Shrewsbury, with a variety of games being played all weekend.</p>
      <p>This event will be the 12th we've done, and until now it's only been an event between friends. This time we're trying to make it the biggest ever, so we're opening up ticket sales to the public!</p>
      <p>Above you can see the most popular games in the past, but we're always looking for new things to try.</p>
    </div>
    <div class="info faq">
      <div class="header">
        <h1>FAQ</h1>
      </div>
      <ul>
        <li><h4>How much does the event cost?</h4><p>£5 for both days! Same price if you just come for one.</p></li>
        <li><h4>What time does the event start?</h4><p>Setup from 10am, organised games normally start around 12pm.</p></li>
        <li><h4>What time does the event end?</h4><p>10pm Saturday, 8pm Sunday. The venue will be secure overnight, so you can leave your things if you like.</p></li>
        <li><h4>What can I do for food?</h4><p>Nearby there's a Coop, Morrisons and chippy. We also normally do a pizza order for lunch one of the days.</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  display: flex;
  max-width: 100%;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;

  .info {
    color: white;
    margin: 18px;
    width: 380px;

    &.faq {
      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 30px;
          h4 {
            margin-bottom: -0.5em;
          }
          p {
            font-size: 21px;
          }
        }
      }
    }

    .header {
      display:flex;
      align-items: center;
      justify-content: center;
      height: 4em;
    }

    p {
      font-size: 23px;
      font-weight: 300;
      font-style: normal;
    }
  }
}
</style>
