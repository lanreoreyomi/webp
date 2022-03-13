
<template>
  <div class="mainSkill">
    <div class="skillSet" id="skillSet">

      <div class="skillSection1">
      </div>
      <div class="skillSection2" data-aos="zoom-in-right">
        <div class="skill " v-for="(skills, index) in skillSet" :key="skills[index]">
          <h4>{{ skills.name }} </h4>
          <p v-html="skills.skillText">
            {{ skills.skillText }}
          </p>
        </div>
      </div>
    </div>

    <div class="skillCont">
      <div class="search-input" style="justify-content:center; text-align:center;">
        <div class="container">
          <input placeholder='Search...' class='js-search' type="text" v-model="userSearch" id="userSearch">
          <span class="clearFilters">
          <img src="../assets/Image/cancel.svg" width="40" v-on:click="restFilter" style="width:30px; " alt="Cancel"
               id="cancelIcon"/>
        </span>
        </div>
      </div>

      <div class="skillDesc">
        <div class="viewSkills">
          <div class="skillDetails" v-for="skillPage in filteredGallery" :key="skillPage[0]" data-aos="fade-up"
               data-aos-duration="2000">
            <img :src="skillPage.image" alt="skills_image">
            <h4>{{ skillPage.tittle }}</h4>
            <p v-html="skillPage.description">{{ skillPage.description }}</p>
            <a :href="skillPage.link" target="_blank" class="button1" v-if="skillPage.link">View Live</a>
            <a :href="skillPage.github" target="_blank" class="button2" v-if="skillPage.github">Code</a>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "skills_comp",
  data() {
    return {
      filterSet: " ",
      filter: ' ',
      userSearch: '',
      bgColor: this.generateRandomColors(),
      skillSet: [
        {
          name: "Java & Spring Framework",
          skillText:  "I am skilled in using core Java, and its related ecosystem to develop and maintain Web applications, I have hands-on experience using object-oriented principles to create and manage Java objects. \n" +
              "<br>I am also proficient in using MVC, N-Tier JDBC, JSP, Servlet, Connection Manager, Prepared Statements, and ORM technologies like Hibernate and Mybatis to persist user data into the database \n" +
              "<br> I have developed web applications using Spring Boot . I am skilled using SPring Framework, Spring Data JPA, Spring Web, Spring Security to develop secured web applications " +
              "I am confident in using J Unit, Selenium, Mockito to write both unit and integration tests. "
        },
        {
          name: "Javascript/Vue Js",
          skillText: "I am skillful using Javascript, HTML, CSS, Sass, Bootstrap to create responsive websites and SPAs. <br> I have developed a couple of web applications, using  Axios and Async await,  fetching and parsing data from external and internal APIs.\n" +
              " <br>I leverage the power of Vue Js to develop scalable Web applications. I have used using some Vue Js features like Components, data binding, Props, Event handlings, Slot, Vue Router, Mixins and Vue Ex to manage and control the flow within a Vue .js app. I use web asset bundlers like Webpack and package managers like NPM and YARN to manage and maintain project dependencies."
        },
        {
          name: "Database",
          skillText: "I have solid years of experience using several database engines, both SQL and NoSQL databases. <br> I am very comfortable creating DDL, ERD, store procedures, indexes, and connecting front-end applications to the database.\n" +
              "<br> I have hands-on experience using both embedded and external databases to persist user data. I have worked with databases like Postgres, MySql, Oracle, PHPmyAdmin"
        },
        {
          name: "CI/CD",
          skillText: "I have hands-on experience in CI/CD, using tools like Docker, Gitlab, and Jenkins to set up and manage the CI pipeline.\n" +
              "<br>I am experienced using Minikube to manage Kubernetes Clusters, kubectl to perform operations on a K8 cluster I am also experienced using pods, deployments, services and manager communications between different microservices in a cluster",
        },
        {
          name: "Agile/Jira",
          skillText: " I have a good understanding of Agile and its practices. I am also involved in daily standups, Sprint and PI planning.\n" +
              "<br> In addition to Agile, I have also developed a good habit of writing documentation both in my code (Java doc) or on Confluence to preserve and transfer knowledge within the team",
        },
        {
          name: "Wordpress",
          skillText: "I have developed a couple of websites using WordPress. I created an eCommerce website using woo-commerce." +
              "I also have experience using plug-ins to add functionalities to a WordPress website\n" +
              " Additionally, I have used Plug-ins like Elementor and Brizy to power the front end. I am skilled in persisting data from user forms into the PhpmyAdmin database"
        },
      ],
      skillDec: [
        {
          skillName: "Programming",
          tittle: "Java",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Framework</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Apache Tomcat</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Payara</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Hibernate</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>myBatis</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java 8</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Servlet</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>RESTApi</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Selenuim</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Microservices</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>J Unit</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Mockito</span> ",
          image: require("../assets/Image/swfsolutions.png"),
          github: "https://github.com/lanreoreyomi/cloudstorage",
        },
        {
          skillName: "Spring Boot",
          tittle: "Spring Boot",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring MVC</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Data JPA</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Security</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring JPARepository</span> ",
          image: require("../assets/Image/triviaapp.png"),
          github: "https://github.com/lanreoreyomi/eCommerceApp"
        },
        {
          skillName: "Programming",
          tittle: "Javascript",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ES5</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ES6</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>WCAG</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Front End</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>NPM</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Yarn</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Babel</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Webpack</span> ",
          image: require("../assets/Image/Jaavascriptgame.png"),
          github: "https://github.com/lanreoreyomi/Budgety",
          link: "https://mybudgetyapp.netlify.app/",
        },
        {
          skillName: "Programming",
          tittle: "Node Js",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nodejs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Backend</span> ",
          image: require("../assets/Image/swfsolutions.png"),
          github: "https://github.com/lanreoreyomi/CovidCases",
        },
        {
          skillName: "Programming",
          tittle: "Vue Js",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nodejs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Vuetify</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>VueJs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>VueRouter</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>FrontEnd</span> ",
          image: require("../assets/Image/Kola.png"),
          github: "https://github.com/lanreoreyomi/dementiacare",
          link: "https://www.diversifieddementiacare.com",
        },
        {
          skillName: "Database",
          tittle: "SQL",
          description: "" +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Database</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nateeza</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Msqlwork</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Oracle</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PostgreSQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>MongoDB</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ERD</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>GraphQL</span> ",
          image: require("../assets/Image/idrisapp.png"),
          github: "https://github.com/lanreoreyomi/SQLite-Database"
        },
        {
          skillName: "Programming Web",
          tittle: "PHP ",
          description: "" +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PHP</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PHPMyAdmin</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PostgreSQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Boot</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Framework</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Node Js</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java</span> ",
          image: require("../assets/Image/nikkihairstudio.png"),
          github: "https://github.com/lanreoreyomi/Resturant",
        },
        {
          skillName: "Android Dev",
          tittle: "Android",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Android</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Data Warehouse</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Material Design</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Mobile Application</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Picasso</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQLiteDatabase</span> ",
          image: require("../assets/Image/tripvault.png"),
          github: "https://github.com/lanreoreyomi/TripVault",
        },
        {
          skillName: "Dev Ops",
          tittle: "Dev Ops",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>GitLab</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Jenkins</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Docker</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Kubernetes</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Kubectl</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Minikube</span> " ,
          image: require("../assets/Image/planetsoccer.png"),
        }
      ],
    }
  },
  methods: {
    getUserSearch(txt) {
      this.filterSet = txt.split(" ");
      this.userSearch = this.filterSet[0];
    },
    restFilter() {
      this.userSearch = '';
    },
    generateRandomColors() {
      var num = Math.floor(Math.random() * 10 + 1);
      var colorCodes = ["#ffc0eb", "#25CCF7", "#D980FA", "#148893", "#D6A2E8", "#323264", "#FA3232", "#FD7272", "#6D214F", "#f6b93b"];
      return colorCodes[num];
    }
  },
  created() {
    this.generateRandomColors();
    console.log(this.bgColor);
  },
  computed: {
    filteredGallery() {
      return this.skillDec.filter(skills => {
        return (skills.tittle.match(this.userSearch) || skills.description.match(this.userSearch))
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
* {
  box-sizing: border-box;
}
.mainSkill {
  .skillSet {
    z-index: 999999;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .skillSection1 {
      background: $white_text;
      clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
    }
    .skillSection2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      margin: 10px;
      grid-column-start: 2;
      grid-column-end: 5;
    }
    .skill {
      background: transparent;
      //border: 2px solid $alt-bg;
      border-radius: 1rem;
      cursor: pointer;
      padding: 20px;
      height: auto;
      h4 {
        text-align: center;
        font-family: $headerFont2;
        font-size: 30px;
        font-weight: bold;
        padding: 8px;
        margin: 0 !important;
      }
      p {
        padding: 5px;
        margin: 0;
        font-family: $textFont;
        font-weight: normal;
        color: #576574;
      }
      &:hover {
        transition: all 0.7s ease 0s;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
  .skillCont {
    .search-input {
      position: relative;
      margin-top: 40px;
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        input[type=text] {
          @include inputTextField();
          background: #F1F2F6;;
        }
        #cancelIcon {
          position: relative;
          left: -37px;
          color: #8233C5;
          width: 30px;
          top: 5px;
        }
      }
    }
    .skillDesc {
      .viewSkills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 2px;
        grid-gap: 20px;
        .skillDetails {
          position: relative;
          border-radius: 2em;
          text-align: center;
          padding: 20px;
          max-width: 100%;
          img {
            max-width: 100%;
            height: auto;
          }
          h4 {
            font-family: $headerFont2;
            font-size: 30px;
            padding: 0;
            margin: 0;
          }
          p {
            color: $textColor;
            padding: 20px;
            margin: 0 auto;
            display: block;
            font-family: $textFont;
          }
          .button1 {
            display: none;
            @include Button();
            position: absolute;
            cursor: pointer;
            top: 150px;
            z-index: 1;
            left: 50px;
            padding: 5px;
            color: $headerColor;
            background: $textHighlight;
            &:hover {
              background: lighten($textHighlight, 10%);
            }
          }
          .button2 {
            display: none;
            position: absolute;
            top: 150px;
            padding: 5px !important;
            @include Button();
            background: white;
            color: $headerColor;
            &:hover {
              &:hover {
                background: darken(white, 10%);
              }
            }
          }
          &:hover {
            img {
              filter: blur(2px);
            }
            a {
              z-index: 1;
              display: unset;
            }
          }
        }
      }
    }
  }
  .clearFilters {
    text-align: end;
    img {
      cursor: pointer;
    }
  }
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mainSkill {
    .skillSet {
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
            "b b b";
      .skillSection1 {
        grid-area: a;
        background: $white_text;
        clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
      }
      .skillSection2 {
        grid-template-columns: 1fr;
      }
    }
    .skillCont {
      .search-input {
        position: relative;
        input[type="text"] {
          width: 90%;
        }
        img {
          width: 40px;
          cursor: pointer;
        }
      }
      .skillDesc {
        .viewSkills {
          display: grid;
          grid-template-columns: 1fr;
          h4 {
            font-family: $headerFont2;
            font-size: 25px !important;
            font-weight: bolder;
          }
          .skillDetails {
            //overflow: auto;
            width: unset;
            p {
              overflow: auto;
              padding: 5px;
            }
            padding: 0;
            h4 {
              font-size: 30px;
            }
            img {
              padding: 0;
              margin: 0;
              width: 400px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .mainSkill {
    .skillSet {
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
            "b b b";
      .skillSection1 {
        grid-area: a;
        background: $white_text;
        clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
      }
      .skillSection2 {
        grid-template-columns: 1fr;
      }
    }
    .skillCont {
      .search-input {
        position: relative;
        input[type="text"] {
          width: 90%;
        }
        img {
          width: 40px;
          cursor: pointer;
        }
      }
      .skillDesc {
        .viewSkills {
          display: grid;
          grid-template-columns: 1fr;
          h4 {
            font-family: $headerFont2;
            font-size: 30px;
          }
          .skillDetails {
            //overflow: auto;
            width: unset;
            p {
              overflow: auto;
              padding: 5px;
            }
            padding: 0;
            h4 {
              font-size: 30px;
            }
            img {
              padding: 0;
              margin: 0;
              width: 400px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-device-width: 772px) and (max-device-width: 1024px) {
  .mainSkill {
    .skillCont {
      .skillDesc {
        .viewSkills {
          display: grid;
          grid-template-columns: 1fr 1fr !important;
        }
      }
    }
  }
}
</style>