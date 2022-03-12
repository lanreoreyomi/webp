<template>

  <div class="contactsContainer" id="contactsContainer">
    <div class="contactInfo">
      <h4>Contact Us</h4>
      <br>
      <div class="form-section">
        <form target="_self"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe9LpXQbOebZWu5Nq6v75uXcCdXhG0VDICZO6X_eK42gxZSyQ/formResponse"
              method="POST" id="mG61Hd">
          <label>
            <input type="text" placeholder="Name" class="contactform" name="entry.846432274" required>
          </label>

          <label>
            <input type="text" placeholder="Email/Phone" class="contactform" name="entry.1073756748" required>
          </label>

          <label>
            <input type="text" placeholder="City" class="contactform" name="entry.289563808" required>
          </label>

          <label>
            <input type="text" placeholder="Province/State" class="contactform" name="entry.749274539" required>
          </label>

          <label>
            <input type="text" placeholder="Country" class="contactform" name="entry.317467062" required>
          </label>

          <label for="messageArea"></label>
          <textarea name="entry.2025869735" rows="4" cols="50" style="
          resize: none;" placeholder="Message"
                    required id="messageArea">
              </textarea>
          <br>
          <input type="submit" Value="Send Message" id="submit">

        </form>
      </div>
    </div>

    <div class="contact_dtl">
      <h2>How can we help? </h2>
      <br>
      <br>
      <h3>Web Development </h3>
      <p>Get free quote for website development</p>
      <hr>
      <br>
      <h3>Web Maintenance</h3>
      <p>Get free quote for website Maintenance</p>
      <hr>
      <br>
      <h3>SEO</h3>
      <p>Get free quote for SEO </p>
      <hr>
      <h3>Mobile App Development</h3>
      <p>Get free quote for Mobile App Development </p>

      <div class="connect">
        <a href="mailto:contact@webpexels.dev"><img src="../assets/Image/email-us.svg" alt="mail"></a>
        <a href="tel:+1-613-600-3820"><img src="../assets/Image/cal-us.svg" alt="phone"></a>
        <a href="https://www.facebook.com/Webpexels" target="_blank"><img src="../assets/Image/facebook-us.svg"
                                                                          alt="facebook"></a>
        <a href="https://www.linkedin.com/in/lanre-oreyomi-1012" target="_blank"><img src="../assets/Image/linkdeln.svg"
                                                                                      alt="phone"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact_comp"
}
</script>
<style lang="scss" scoped>
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

.contactsContainer {
  width: 80%;
  margin: 40px auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  .contactInfo {
    text-align: center;
    padding-top: 40px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
    box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
    background: white;

    h4 {
      font-family: $headerFont2;
      font-size: 40px;
      text-align: center;
      padding: 0;
      margin: 0;
      color: #9e939b;
    }

    .form-section {
      text-align: center;

      form {
        justify-content: center;
        align-items: center;
        text-align: center;

        input[type=text], #messageArea {
          @include inputTextField();
        }

        #submit {
          @include Button();
          padding: 15px;
          margin-bottom: 50px;
          width: 40%;

          &:hover {
            background: $textHighlight;
            transition: all 0.2s;
            color: $headerColor;
          }
        }
      }
    }
  }

  .contact_dtl {
    width: 100%;
    font-family: 'Poppins', sans-serif;

    h2 {
      margin-top: 1vh;
      font-size: 40px;
    }

    h3 {
      font-size: 25px;
      opacity: 0.9;
      margin: 0;
      padding: 0;
    }

    p {
      opacity: 0.6;
    }

    .connect {
      img {
        width: 40px;
        margin: 5px;
        cursor: pointer;
        transform: scale(0.8);

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}

@media screen and (max-width: 667px) {
  .contactsContainer {
    display: grid !important;
    grid-template-columns: 1fr !important;
    width: 100%;
    grid-template-areas:
            "a a a"
            "b b b";
    padding: 10px !important;
    margin: 0 !important;

    .contact_dtl {
      padding: 10px !important;
      grid-area: a;
      width: 100% !important;
      margin: 0 !important;

      h2 {
        margin-top: 5vh !important;;
      }
    }

    .contactInfo {
      width: 100% !important;
      grid-area: b;

      .form-section {
        text-align: center;

        form {
          justify-content: center;
          align-items: center;

          input[type=text], #messageArea {
            @include inputTextField();

            &:focus {
              border: 1px solid $headerColor;
              width: 350px !important;
            }
          }

          #submit {
            @include Button();
            padding: 15px;
            margin-bottom: 50px;
            width: 50%;

            &:hover {
              background: $textHighlight;
              transition: all 0.2s;
              color: $headerColor;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 375px) and (max-width: 667px) {
  .contactsContainer {
    display: grid !important;
    grid-template-columns: 1fr !important;
    grid-template-areas:
            "a a a"
            "b b b";
    padding: 10px !important;
    margin: 0 !important;

    .contact_dtl {
      padding: 10px !important;
      grid-area: a;
      width: 100% !important;
      margin: 0 !important;

      h2 {
        margin-top: 5vh !important;;
      }
    }

    .contactInfo {
      width: 100% !important;
      grid-area: b;

      .form-section {
        text-align: center;

        form {
          justify-content: center;
          align-items: center;

          input[type=text], #messageArea {
            @include inputTextField();

            &:focus {
              border: 1px solid $headerColor;
              width: 350px !important;
            }
          }

          #submit {
            @include Button();
            padding: 15px;
            margin-bottom: 50px;
            width: 50%;

            &:hover {
              background: $textHighlight;
              transition: all 0.2s;
              color: $headerColor;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 411px) and (max-width: 823px) {
  .contactsContainer {
    width: 100% !important;
    margin: 10px auto !important;
    padding: 10px !important;

    .contactInfo {
      padding-top: 40px;
      margin: unset;
      width: 100% !important;

      h4 {
        font-size: 30px;
        margin: unset !important;
        padding: unset !important;
      }

      .form-section {
        text-align: center;
        margin: unset !important;
        padding: unset !important;

        form {
          justify-content: center;
          align-items: center;
          text-align: center;

          input[type=text], #messageArea {
            @include inputTextField();

            &:focus {
              border: 1px solid $headerColor;
              width: 370px !important;
            }
          }

          #submit {
            @include Button();
            padding: 15px;
            margin-bottom: 50px;
            width: 50%;

            &:hover {
              background: $textHighlight;
              transition: all 0.2s;
              color: $headerColor;
            }
          }
        }
      }
    }

    .contact_dtl {
      width: 100%;
      font-family: 'Poppins', sans-serif;

      h2 {
        margin-top: 0 !important;
        font-size: 30px;
      }

      h3 {
        font-size: 25px;
        opacity: 0.9;
      }

      p {
        opacity: 0.6;
      }

      .connect {
        img {
          width: 40px;
          margin: 5px;
          cursor: pointer;
          transform: scale(0.8);

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .contactsContainer {
    width: 100%;

    .contactInfo {
      width: 100% !important;
    }

    .contact_dtl {
      margin: 0 !important;
      width: 100% !important;

      h2 {
        margin-top: 4vh !important;;
      }
    }
  }
}
</style>