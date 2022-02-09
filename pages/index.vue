<template>
  <div class="page">
    <!-- Hero section start -->
    <div class="page__hero">
      <b-row class="page__hero__content">
        <p class="desktop">We are Asioso</p>
        <h1>
          We make digital <br />
          business simple
        </h1>
        <p class="desktop">
          In everything we do, we simply want to inspire people. Through our
          ideas we strengthen brands and inspire their customers. We create
          digital experiences for your visitors.
        </p>

        <b-row class="page__hero__content__btn">
          <b-button
            >Explore More
            <img :src="arrowRight" />
          </b-button>

          <b-button class="grow" @click="$bvModal.show('bv-modal-example')">
            <b-modal id="bv-modal-example" hide-footer>
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/TmAu3-y9Lyg"
                allowfullscreen
              ></b-embed>
            </b-modal>
            <img :src="playCircle" />
            Watch Video
          </b-button>
        </b-row>
      </b-row>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,256L120,250.7C240,245,480,235,720,192C960,149,1200,75,1320,37.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <!-- Hero section end -->
    </div>

    <!-- Our focus section start -->
    <div class="page__focus">
      <p>What Do We Do?</p>
      <h2>Our <b>focus</b></h2>

      <div class="page__focus__box">
        <div class="page__focus__box__customer" @click="activeTab = 'customer'">
          <h3>Customer</h3>
          <p>Lorem ipsum dolor sit.</p>
          <b-button class="grow"
            >View Details
            <img :src="arrowRightGray" />
          </b-button>
        </div>

        <div class="page__focus__box__content" @click="activeTab = 'content'">
          <h3>Content</h3>
          <p>Lorem ipsum dolor sit.</p>
          <b-button class="grow"
            >View Details
            <img :src="arrowRightGray" />
          </b-button>
        </div>

        <div
          class="page__focus__box__touchpoints"
          @click="activeTab = 'touchpoints'"
        >
          <h3>Touchpoints</h3>
          <p>Lorem ipsum dolor sit.</p>
          <b-button class="grow"
            >View Details
            <img :src="arrowRightGray" />
          </b-button>
        </div>
      </div>
    </div>

    <!-- <Tab /> -->

    <!-- Technologise section start -->
    <div class="page__technologies" v-show="activeTab === 'customer'">
      <b-row>
        <b-col class="page__technologies__image">
          <img src="../assets/images/pimcore.png" alt="customer" />
        </b-col>
        <b-col class="page__technologies__info">
          <p>Technologies</p>
          <h3>Impressing our <b>customers</b></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vel in atque deleniti beatae.
          </p>
          <ul>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>FreeSpirit Services</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto illo quisquam unde iste similique.
              </p>
            </li>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>Pimcore</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto illo quisquam unde iste similique.
              </p>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>

    <div class="page__technologies" v-show="activeTab === 'content'">
      <b-row>
        <b-col class="page__technologies__image">
          <img src="../assets/images/content-tab.jpeg" alt="content" />
        </b-col>
        <b-col class="page__technologies__info">
          <p>Marketing strategy</p>
          <h3>
            Defining your visual<br />
            <b>identity</b>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi,
            ipsum possimus iusto sed voluptatibus tenetur molestiae dignissimos
            esse quia debitis cumque odio!
          </p>
          <ul>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>UX Concept</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus eos deleniti libero ducimus. Impedit magni dicta
                nemo ipsa esse?
              </p>
            </li>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>Design</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto illo quisquam unde iste similique.
              </p>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>

    <div class="page__technologies" v-show="activeTab === 'touchpoints'">
      <b-row>
        <b-col class="page__technologies__image">
          <img src="../assets/images/touchpoints.jpeg" alt="touchpoints" />
        </b-col>
        <b-col class="page__technologies__info">
          <p>E-Commerce</p>
          <h3>Improving online <b>business</b></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam
            modi perspiciatis mollitia ipsum doloremque delectus doloribus.
          </p>
          <ul>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>PIM</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto illo quisquam unde iste similique.
              </p>
            </li>
            <li>
              <span>
                <b-icon-pie-chart></b-icon-pie-chart>
                <h4>B2B</h4>
              </span>
              <p class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto illo quisquam unde iste similique.
              </p>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>

    <!-- News section start -->
    <div class="page__news">
      <p>Curiosity</p>
      <h2>News and <b>trends</b></h2>

      <div class="page__news__cards">
        <!-- <b-card-group>
          <b-card
            v-for="article in posts.articles"
            :key="article.id"
            :title="article.publishedAt"
            :img-src="article.urlToImage"
            img-alt="Image"
            img-top
          >
            <b-card-text class="text-left">{{ article.title }}</b-card-text>
            <template #footer>
              <small>{{ article.author }}</small>
            </template>
          </b-card>
        </b-card-group> -->

        <Article
          v-for="article in posts.articles"
          :key="article.id"
          :url="article.url"
          :date="article.publishedAt"
          :image="article.urlToImage"
          :title="article.title"
          :author="article.author"
        />
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
import arrowRight from "../assets/icons/arrow-right.svg";
import arrowRightGray from "../assets/icons/arrow-right-gray.svg";
import playCircle from "../assets/icons/play-circle-regular.svg";

export default {
  name: "IndexPage",
  data() {
    return {
      posts: [],
      activeTab: "customer",
    };
  },
  head: {
    title:
      "Digital agency / Internet agency from Munich - digital business simple | asioso",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Digital agency Banja Luka for strategy, UX design, development, hosting, online marketing, FirstSpirit and Pimcore. ☎ +49 89 9545706 10",
      },
    ],
  },
  async fetch() {
    this.posts = await fetch(
      "https://newsapi.org/v2/everything?q=it&from=2022-01-31&pageSize=3&sortBy=publishedAt&apiKey=4034ae4301114cab8d922e665ff0fd2f"
    ).then((res) => res.json());
    console.log(this.posts);
  },
  computed: {
    arrowRight() {
      return arrowRight;
    },
    arrowRightGray() {
      return arrowRightGray;
    },
    playCircle() {
      return playCircle;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 480px) {
  .page {
    &__hero {
      height: 550px;
      &__content {
        justify-content: center;
        padding-top: 2em;
        h1 {
          font-size: 3em;
        }

        p {
          font-size: 1.2em;
        }

        p:first-child {
          font-size: 1em;
        }

        &__btn {
          justify-content: center;
          button:nth-child(2) {
            padding-left: 0;
          }
        }
      }
    }

    &__hero::before {
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      filter: brightness(0.3) opacity(0.9);
      width: 100%;
      height: 550px;
    }

    &__focus {
      padding: 0 10%;
      p {
        font-size: 0.8em;
      }

      h2 {
        font-size: 2.2em;
      }
      &__box {
        width: 100%;
        display: block;
        margin: 2em 0;

        &__customer,
        &__content,
        &__touchpoints {
          width: 100%;
        }

        &__content,
        &__touchpoints {
          margin-top: 1em;
        }
      }
    }

    &__technologies {
      padding: 0 10%;
      .row {
        display: flex;
        flex-direction: column;
      }
      &__info {
        margin-top: 1em;
        p:nth-of-type(1) {
          font-size: 0.8em;
          text-align: center;
        }

        h3 {
          font-size: 2.2em;
        }

        ul {
          padding-left: 0;
          li {
            p {
              padding-left: 2.5em;
            }
          }
        }
      }
    }

    &__news {
      padding: 0 10%;
      p {
        font-size: 0.8em;
      }

      h2 {
        font-size: 2.2em;
      }
      &__cards {
        .card-group {
          .card {
            flex: 100% !important;
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
