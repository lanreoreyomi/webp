<template>
  <div class="our-services">
    <!--TODO: Turn card into a component-->
    <div class="services_con " data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d1.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Development</h2>
        <h3>Modern fast, user-friendly and responsive website from scratch. Developed using
          modern web development technologies and frameworks.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con" data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d2.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Maintenance</h2>
        <h3>Do you want a partial or full website redesign?
          Do you have an idea, content, design or feature you want to
          push to your website? We are here for you.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con" data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d3.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Mobile App Development</h2>
        <h3>We create scalable and cross platform mobile apps, which runs smoothly both on Android and IOS, making you
          concentrate on business and customer retention.
        </h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con" data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d4.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>SEO Optimization</h2>
        <h3>
          We use best industry standards and practises to get your website highly ranked and increase in traffic.
          We promote your website to reach more customers.</h3>


        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
          <div class="cardContact ccCall"><a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>

          </div>
        </div>

      </div>

    </div>
    <div class="services_con" data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d5.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Google Analytics/Business</h2>
        <h3>We will analyze your website traffic. This data are transformed to a business model which
          will help you make smarter business decision,
          knowing what content to show on what section of your website.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
          <div class="cardContact ccCall">
            <a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con" data-aos="fade-up">
      <div class="services_img">
        <img src="../assets/Image/3d6.jpeg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Domain Registration</h2>
        <h3>Domain Registration and hosting plan with industry leading hosting services. We will get your domain, SSL,
          private email, DNS and everything your websites needs to be alive.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">

            <a href="">Request Quote</a>

            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>

          </div>
          <div class="cardContact ccCall">

            <a href="">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "card_Comp"
}
</script>
<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

.our-services {
  width: 90%;
  margin: 0 auto 10vh;
  padding: 50px;
  background: $bg-fill;

  .services_con {
    margin: 10px auto 20vh;
    text-align: center;
    width: 90%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    border-radius: 2rem;

    .services_img {
      text-align: center;
      -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
      box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
      border-radius: 1rem;

      img {
        max-width: 100%;
        min-height: 100%;
        background: $textColor;
        border-radius: 1rem;
      }
    }

    .services_desc {
      font-family: 'poppins', cursive;
      padding-left: 30px;
      text-align: start;
      color: #747d8c;
      margin-top: 7vh;

      h2 {
        color: black;
        font-family: 'Coda', cursive;
        font-size: 50px;
        line-height: 80px;
        margin-top: 5vh;
      }

      h3 {
        font-weight: unset;
        line-height: 30px;
        opacity: 0.9;
        position: unset;
        margin-top: 3vh;
      }
    }
    .contact_us {
      @include buttons;
    }
  }
}
@media (max-width: 768px) {
  .our-services {
    width: 100%;
    margin: 0 auto 10vh !important;
    grid-template-columns: 1fr;

    .services_con {
      width: 100%;
    }
  }
}

@media only screen and (min-device-width: 772px) and (max-device-width: 1024px) {
  .our-services {
    width: 95%;
    grid-template-columns: 1fr;

    .services_con {
      padding: 10px;
      width: 100%;
    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and(-webkit-min-device-pixel-ratio: 2) {
  .our-services {
    width: 100%;
    padding: 60px !important;
    grid-template-columns: 1fr  1fr;

    .services_con {
      width: 100%;
    }
  }
}
</style>