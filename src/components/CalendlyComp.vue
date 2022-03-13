<template>
  <div class="booking">
    <div class="booking_text">
      <h2>Have a conversation</h2>
      <p>with Lanre</p>
      <p class="dates">{{getCurrentDate()}}</p>
    </div>
    <div class="calendly-inline-widget" data-url="https://calendly.com/webpexels/60min"
         style="min-width:320px;height:560px; "></div>
  </div>
</template>

<script>
export default {
  name: "CalendlyComp",
  mounted() {

    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)

    this.getCurrentDate();
  },
  methods:{
    getCurrentDate() {
      let dates = new Date()
      console.log(dates.getFullYear())
      return `${dates.getDate()}-${dates.getMonth() + 1}- ${dates.getFullYear()}`;
    },
  }
}


</script>

<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

.booking {
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: 10vh auto;

  .booking_text{
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    background: lighten($textColor, 10%);
    padding: 20px;
    border-left: 140px solid lighten($textColor, 20%);
    -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
    box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
    position: relative;
    h2{
      color: $bg-fill;
      font-size: 50px;
      line-height: 70px;
      margin-top: 15vh;
    }
    p{
      font-family: 'Poppins', sans-serif;
      color: $bg-fill;
      font-size: 20px;
      margin-top: 20px;
    }
    .dates{
      position: absolute;
      bottom: 20px;
      right: 20px;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;

    }
  }
}

</style>