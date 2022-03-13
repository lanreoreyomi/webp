<template>
  <div class="introduction" id="about">
    <div class="contain" data-aos="zoom-in" data-aos-duration="1000">
      <div class="introLeftText">

        <h1>TOOLS </h1>
        <br>
        <div class="techStack">
          <div class="tech" v-for="skillSet in techStacks" :key="skillSet[0]">
            <img :src="skillSet.image" alt="">
            <p>{{ skillSet.text }}</p></div>

        </div>
        <div class="environment">
          <div class="ideIUse" v-for="env in envStack" :key="env[0]">
            <img :src="env.image" width="40" alt="ide">
            <p>{{ env.text }}</p>
          </div>

        </div>
      </div>

      <div class="introRightText">
        <h1>Work Experience</h1>
        <div class="about-me">
          <div class="about-info" style="border-top:2px solid black;">
            <h2><span class="Highlight">Web Developer-</span> WebPexels</h2>
            <h3 class="date">2017- Present</h3>

            <h4>Website Development and maintenance </h4>
            <h4>Domain registration and Website hosting </h4>
            <h4>Developing SPA, building rest API's</h4>
            <h4>Seo, Google Analytics and Google business</h4>
            <h4>Using Web servers to serve and debug web application</h4>
          </div>
          <div class="about-info" style="border-top:2px solid black;">
            <h2><span class="Highlight">Nokia-</span> Software Developer</h2>
            <h3 class="date">Present</h3>

            <h4>Working with dockerized applications. </h4>
            <h4>Adding new features to project</h4>
            <h4>Writing unit and integration test</h4>
            <h4>Docker, Kubernetes, Git, CI/CD</h4>
            <h4>Ensuring code base is bug free </h4>
          </div>
          <div class="about-info" style="border-top:2px solid black;">
            <h2><span class="Highlight">Programmer-</span> Govt of Canada</h2>
            <h3 class="date">2020- 2021</h3>

            <h4>Working with Data warehouses.</h4>
            <h4>Business Reporting and Analysis</h4>
            <h4>SQL, Data Models and Troubleshooting</h4>
            <h4>Enterprise Database environment</h4>
            <h4>Agile Scrum </h4>
            <h4>Github </h4>

          </div>

          <div class="about-info" style="border-top:2px solid black;">
            <h2><span class="Highlight">Database Admin-</span> TD BANK</h2>
            <h3 class="date">2019</h3>

            <h4>Updating records in the system</h4>
            <h4>Adding new records to the system</h4>
            <h4>Ensuring data integrity</h4>
            <h4>Working with deadlines</h4>
          </div>

        </div>

        <div class="buttons">
          <social-button></social-button>
        </div>
      </div>

    </div>

    <Carousel data-aos="zoom-in-out">
      <Slide>
        <img src="../assets/Image/computer-and-man.png" alt="">
        <img src="../assets/Image/maintenance.png" alt="">
        <br>
        <p style="text-align: center" class="overlay">Web Development/ Maintenance</p>
      </Slide>
      <Slide>
        <img src="../assets/Image/domain-registration.png" alt="">
        <img src="../assets/Image/seo-opt.png" alt="">
        <br>
        <p style="text-align: center" class="overlay">Domain Registration/ SEO</p>

      </Slide>
      <Slide>
        <img src="../assets/Image/online-shopping.png" alt="">
        <img src="../assets/Image/profit.png" alt="">
        <br>
        <p style="text-align: center" class="overlay">E Commerce / Google Business</p>
      </Slide>

      <Slide>
        <img src="../assets/Image/customer-support.png" alt="">
        <img src="../assets/Image/insights.png" alt="">
        <br>
        <p style="text-align: center" class="overlay">Customer Support/ Insight</p>
      </Slide>


    </Carousel>
  </div>

</template>

<script>
import social_comp from './SocialComp';
import {Carousel, Slide} from 'vue-carousel';
export default {
  name: "introduction_comp",
  data() {
    return {
      techStacks: [
        {
          name: "Java",
          image: "https://img.icons8.com/color/58/000000/java-coffee-cup-logo.png",
          text: "Java"
        },
        {
          name: "Spring Boot",
          image: "https://img.icons8.com/color/50/000000/spring-logo.png",
          text: "Spring Boot"
        },
        {
          name: "Javascript",
          image: "https://img.icons8.com/color/58/000000/javascript.png",
          text: "Javascript"
        },
        {
          name: "HTML5",
          image: "https://img.icons8.com/color/58/000000/html-5.png",
          text: "HTML5"
        },
        {
          name: "CSS",
          image: "https://img.icons8.com/color/58/000000/css3.png",
          text: "CSS"
        },
        {
          name: "Sass",
          image: "https://img.icons8.com/color/58/000000/sass.png",
          text: "Sass"
        },
        {
          name: "Vue Js",
          image: "https://img.icons8.com/color/58/000000/vue-js.png",
          text: "Vue Js"
        },
        {
          name: "Node JS",
          image: "https://img.icons8.com/color/48/000000/nodejs.png",
          text: "Node JS"
        },
        {
          name: "GitHub",
          image: "https://img.icons8.com/fluent/58/000000/github.png",
          text: "GitHub"
        }, {
          name: "Gitlab",
          image: "https://img.icons8.com/color/48/000000/gitlab.png",
          text: "Gitlab"
        },
        {
          name: "JIRA",
          image: "https://img.icons8.com/color/58/000000/jira.png",
          text: "JIRA"
        },
        {
          name: "SQL",
          image: "https://img.icons8.com/ios/50/000000/sql.png",
          text: "SQL"
        },
      ],
      envStack: [
        {
          name: "InteliJ",
          image: require("../assets/Image/icon-intellij-idea.png"),
          text: "Inteli J"
        },
        {
          name: "Database",
          image: "https://img.icons8.com/fluent/48/000000/data-configuration.png",
          text: "Database"
        },
        {
          name: "Linux",
          image: "https://img.icons8.com/ios-filled/50/000000/linux.png",
          text: "Linux"
        },
        {
          name: "Docker",
          image: "https://img.icons8.com/fluency/48/000000/docker.png",
          text: "Docker"
        },
        {
          name: "Kubernetes",
          image: "https://img.icons8.com/color/48/000000/kubernetes.png",
          text: "Kubernetes"
        },
        {
          name: "Jenkins",
          image: "https://img.icons8.com/color/48/000000/jenkins.png",
          text: "Jenkins"
        }, {
          name: "VSCode",
          image: "https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png",
          text: "VSCode"
        },
      ]
    }
  },
  components: {
    social_comp,
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
.VueCarousel-inner {
  text-align: center;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  img {
    cursor: pointer;
    border-radius: 4px;
    background: white;
    width: 400px;
    max-width: 100%;
    height: 400px;
    transform: scale(0.9);
    -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
    box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
    transition: all 0.3s ease 0s;
    margin: 5px;
    &:hover {
      //padding: 5px;
      transform: scale(1);
      //background: #450777;
    }
  }
  p {
    font-size: 20px;
    text-align: center;
    margin: 0;
    content: " Remember this";
  }
}
.introduction {
  //background: lighten($alt-bg, 20%);
  background: $backgroundColor;
  transform: scale(1);
  .contain {
    //display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    .introLeftText {
      @include intoText();
      background: $backgroundColor;
      font-family: $textFont;
      h1 {
        text-align: center;
        font-weight: bolder;
      }
      .techStack {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        img {
          padding: 0;
          margin: 0;
          cursor: pointer;
        }
        .tech {
          text-align: center;
          margin: 0;
          width: 90%;
          p {
            color: $backgroundColor;
          }
          &:hover {
            text-align: center;
            animation: bounce 1s;
            p {
              color: $textColor;
            }
          }
        }
      }
      .environment {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        .ideIUse {
          text-align: center;
          margin: 0;
          width: 90%;
          img {
            padding: 0;
            margin: 0;
            cursor: pointer;
          }
          p {
            color: $backgroundColor;
          }
          &:hover {
            text-align: center;
            animation: bounce 1s;
            p {
              color: $textColor;
            }
          }
        }
      }
    }
    .introRightText {
      overflow: auto;
      grid-column-start: 2;
      grid-column-end: 4;
      @include intoText();
      font-family: $textFont;
      //background: #ebebef;
      h1 {
        text-align: center;
        margin-bottom: 5vh;
        margin-top: 5vh;
        font-weight: bold;
        font-size: 30px;
        padding: 20px;
      }
      //clip-path: polygon(89% 0, 100% 40%, 52% 350%, 0 100%, 0 0);
      .buttons {
        padding: 10px;
        .btn {
          margin: 10px;
          text-transform: uppercase;
          background: lighten($white_text, 20%);
          color: $textColor;
          font-weight: 700 !important;
          letter-spacing: 3px;
          padding: 10px;
          border: 0.6px solid white;
          cursor: pointer;
          &:hover {
            background: white;
            color: $white_text;
            -webkit-box-shadow: 0 5px 40px -10px #18071B;
            -moz-box-shadow: 0 5px 40px -10px #18071B;
            transition: all 0.3s ease 0s;
          }
        }
      }
    }
    .about-me {
      display: grid;
      grid-template-columns:  1fr 1fr;
      //font-weight: unset !important;
      .about-info {
        padding: 10px;
        width: 80%;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        text-align: left;
        h2 {
          font-size: 28px;
          text-align: start;
          font-family: 'poppins', cursive;
          .Highlight {
            color: #90079c;
          }
        }
        .date {
          font-size: 16px;
          color: #0a3d62;
          border-left: none;
          margin-bottom: 2vh;
          text-align: left;
          font-weight:bold;
        }
        h3 {
          padding: 0;
          margin: 0;
        }
        h4 {
          font-size: 16px;
          margin: 0;
          line-height: 30px;
          font-weight: unset !important;
          text-align: left;
        }
      }
    }
    .introImage {
      padding: 10px;
    }
  }
}
@keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .VueCarousel-inner {
    img {
      height: 200px !important;
    }
    p {
      font-size: 16px;
    }
  }
  .introduction {
    .contain {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
                            "b b b"
                            "c c c";
      .introRightText {
        grid-area: a;
        font-size: 12px;
        width: 100%;
        .buttons {
          .btn {
            margin: 5px !important;
            font-weight: 200 !important;
          }
        }
        p {
          width: 100%;
          overflow: auto;
        }
        h2 {
          font-size: 30px;
        }
      }
      .introLeftText {
        h2 {
          font-size: 20px;
        }
      }
      .introImage {
        grid-area: b;
        overflow: hidden;
      }
    }
  }
}
@media (max-width: 767px) {
  .VueCarousel-inner {
    text-align: center;
    img {
      margin-bottom: 20px;
      height: 300px;
    }
    p {
      font-size: 18px;
      text-align: center;
      margin: 0;
    }
  }
  .introduction {
    .contain {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
                            "b b b"
                            "c c c";
      .introLeftText {
        .techStack, .environment{
          grid-template-columns: 1fr 1fr 1fr !important;
        }
      }
      .introRightText {
        grid-area: a;
        .buttons {
          .btn {
            margin: 10px;
            font-weight: 600 !important;
          }
        }
        p {
          width: 100%;
          overflow: auto;
        }
      }
      .about-me {
        grid-template-columns: 1fr;
        .about-info {
          width: 100%;
        }
      }
      .introImage {
        grid-area: b;
        overflow: hidden;
      }
    }
  }
}
@media (min-width: 767px) and (max-width: 1024px) {
  .VueCarousel-inner {
    text-align: center;
    img {
      margin-bottom: 20px;
      width: 420px;
    }
    p {
      font-size: 25px;
      text-align: center;
      margin: 0;
    }
  }
  .introduction {
    .contain {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
                            "b b b"
                            "c c c";
      .introRightText {
        grid-area: a;
        .buttons {
          .btn {
            margin: 10px;
            font-weight: 600 !important;
          }
        }
        p {
          width: 100%;
          overflow: auto;
        }
      }
      .introImage {
        grid-area: b;
        overflow: hidden;
      }
    }
  }
}
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .contactSection {
    padding: 10px;
    margin: 10px;
  }
}
</style>