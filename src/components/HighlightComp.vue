<template>
<!--  data-aos="fade-up" data-aos-easing="linear"-->
<!--  data-aos-duration="1500"-->
  <div class="slots" >
    <div class="slot_heading">
      <img :src="slot_header_img"/>
      <h2>{{ slot_header }}</h2>
    </div>
    <div class="slot_text">
      <p>{{ slot_text }} </p>
    </div>
    <br>
    <hr>

  </div>


</template>

<script>
export default {
  name: "HighlightComp",
  props: {
    slot_header_img: {
      type: String,
      required: true
    },
    slot_header: {
      type: String,
      required: true
    },
    slot_text: {
      type: String,
      required: true
    },

  }
}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.slots {
  cursor: pointer;
  border-radius: 12px;
  padding: 15px;
  max-width: 100%;
  -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
  box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
  width: 100%;
  background: lighten(#dfe4ea, 8%);

  border: none;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;

  transition: 0.3s ease-in-out;

  .slot_heading {
    display: flex;
    grid-gap: 10px;

    h2 {
      padding-left: 20px;
      font-weight: normal;

    }

    img {
      width: 40px;
    }

  }

  .slot_text {
    font-size: 14px;
    color: lighten($textColor, 4%);
    margin-top: 15px;


  }

  .slot_image {

    display: flex;
    justify-content: end;
    padding: 10px;
    cursor: pointer;

    img {
      width: 30px;
      border-radius: 6rem;


    }

  }

  &:hover {
    background: $textColor;

    .slot_text {
      color: $white_text;
      transition: ease-in-out;
    }

    .slot_heading {
      color: $white_text;
    }

    img {
      background: #a8b0b7;

    }
  }
}

.cards {
  margin-top: 5vh;
}

@media all and(max-width: 480px) {

  .slots {
  cursor: pointer;

  padding: 10px;
  max-width: 100%;
  -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
  box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
  width: 100%;
  background: lighten(#dfe4ea, 8%);
  border: none;
  text-align: center;
  font-size: 16px;
  margin: 2px 2px;
  transition: 0.3s ease-in-out;
  .slot_heading {
    display: flex;
    grid-gap: 5px;

    h2 {
    text-align: center;
      font-weight: normal;

    }

    img {
      width: 40px;
    }

  }

  .slot_text {
    font-size: 14px;
    color: lighten($textColor, 4%);
    margin-top: 15px;
  }

  .slot_image {
    display: flex;
    justify-content: end;
    padding: 5px;
    cursor: pointer;

    img {
      width: 30px;
      border-radius: 6rem;


    }

  }

  &:hover {
    background: $textColor;

    .slot_text {
      color: $white_text;
      transition: ease-in-out;
    }

    .slot_heading {
      color: $white_text;
    }

    img {
      background: #a8b0b7;

    }
  }
}

}

</style>