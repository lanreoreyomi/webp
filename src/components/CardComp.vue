<template>
  <div class="our-services" id="services">
    <!--TODO: Turn card into a component-->
    <!--    data-aos="fade-up"-->
    <div class="services_con ">
      <div class="services_img">
        <img src="../assets/Image/develop.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Development</h2>
        <h3>Modern fast, user-friendly and responsive website from scratch. Developed using
          modern web development technologies and frameworks.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="#" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="tel:+16136003820">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/maintainance.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Maintenance</h2>
        <h3>Do you want a partial or full website redesign?
          Do you have an idea, content, design or feature you want to
          push to your website? We are here for you.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="tel:+16136003820">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/design.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Mobile App Development</h2>
        <h3>We create scalable and cross platform mobile apps, which runs smoothly both on Android and IOS, making you
          concentrate on business and customer retention.
        </h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
          <div class="cardContact ccCall">
            <a href="tel:+16136003820">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/deploy.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>SEO Optimization</h2>
        <h3>
          We use best industry standards and practises to get your website highly ranked and increase in traffic.
          We promote your website to reach more customers.</h3>


        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
          <div class="cardContact ccCall"><a href="tel:+16136003820">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>

          </div>
        </div>

      </div>

    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/analysis.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Google Analytics</h2>
        <h3>We will analyze your website traffic. This data are transformed to a business model which
          will help you make smarter business decision.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
          <div class="cardContact ccCall">
            <a href="tel:+16138003820">Call Now</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>
          </div>
        </div>

      </div>

    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/domain-names.svg" alt="java">
      </div>
      <div class="services_desc">
        <h2>Domain Registration</h2>
        <h3>Domain Registration and hosting plan with industry leading hosting services. We will get your domain, SSL,
          private email, DNS and everything your websites needs to be alive.</h3>
        <div class="contact_us">
          <div class="cardContact ccEmail">
            <a href="" v-scroll-to="'#contact'">Request Quote</a>
            <img src="https://img.icons8.com/ios-glyphs/ffffff/long-arrow-right.png"/>

          </div>
          <div class="cardContact ccCall">

            <a href="tel:+16136003820">Call Now</a>
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
  margin: 0 auto 0;
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
        border-radius: 1rem;
      }
    }

    .services_desc {
      font-family: 'poppins', cursive;
      padding-left: 30px;
      text-align: start;
      color: #747d8c;
      margin-top: 7vh;
      font-size: 14px;

      h2 {
        text-align: center;
        color: black;
        font-family: 'Coda', cursive;
        font-size: 50px;
        line-height: 80px;
        margin-top: 5vh;


      }

      h3 {
        text-align: center;
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

@media all and(max-width: 480px) {
  .our-services {
    padding: 0px;
    width: 100% !important;

    .services_con {
      margin: 0 auto;
      grid-template-areas: " a a a"
      "b b b";
      display: grid;
      grid-template-columns: 1fr;

      .services_img {

        grid-area: a;
        text-align: center;
        margin: 0 auto;

        img {
          width: 100%;
        }
      }

      .services_desc {
        font-family: 'poppins', cursive;
        font-size: 14px;
        margin-top: 4vh auto;
        grid-area: b;

        h2 {
          font-size: 40px;
          line-height: 60px;
          margin-top: 2vh;


        }


      }

      .contact_us {
        @include responsiveButtons;

      }
    }
  }
}


@media all and(min-width: 480px) and (max-width: 768px) {
  .our-services {
    padding: 0px;
    width: 100% !important;

    .services_con {
      margin: 0 auto;
      grid-template-areas: " a a a"
      "b b b";
      display: grid;
      grid-template-columns: 1fr;

      .services_img {
        width: 100%;
        grid-area: a;
        text-align: center;
        margin: 0 auto;
        padding: 0 !important;

        img {
          width: 100%;
        }
      }

      .services_desc {
        font-family: 'poppins', cursive;
        font-size: 14px;
        //margin-top: 2vh auto;
        grid-area: b;
        padding-left: 0;
        margin: 0 !important;

        h2 {
          font-size: 30px;
          line-height: 60px;
          margin-top: 2vh;


        }


      }

      .contact_us {
        @include responsiveButtons;

      }
    }
  }
}

@media all and(min-width: 769px) and (max-width: 1261px) {
  .our-services {
    padding: 0px;
    width: 100% !important;

    .services_con {
      margin: 5vh auto;
      grid-template-areas: " a a a"
      "b b b";
      display: grid;
      grid-template-columns: 1fr;

      .services_img {
        width: 100%;
        grid-area: a;
        text-align: center;
        margin: 0 auto;
        padding: 0 !important;

        img {
         width: 60%;
        }
      }

      .services_desc {
        font-family: 'poppins', cursive;
        font-size: 14px;
        //margin-top: 2vh auto;
        grid-area: b;
        padding-left: 0;
        margin: 0 !important;

        h2 {
          font-size: 30px;
          line-height: 60px;
          margin-top: 2vh;


        }


      }

      .contact_us {
        @include buttons;

      }
    }
  }
}


</style>