<template>
  <div class="page">
    <div class="page__heron">
      <b-row class="page__heron__content">
        <h1>
          Read interesting facts<br />
          from IT world
        </h1>
      </b-row>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,256L120,250.7C240,245,480,235,720,192C960,149,1200,75,1320,37.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div class="page__news">
      <p>Curiosity</p>
      <h2>News and <b>trends</b></h2>
    </div>

    <div class="page__news__cards">
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
</template>

<script>
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightGray from "../../assets/icons/arrow-right-gray.svg";
import playCircle from "../../assets/icons/play-circle-regular.svg";
export default {
  data() {
    return {
      posts: [],
    };
  },
  head: {
    title: "Blog | asioso",
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
      "https://newsapi.org/v2/everything?q=it&from=2022-01-25&pageSize=12&sortBy=publishedAt&apiKey=4034ae4301114cab8d922e665ff0fd2f"
    ).then((res) => res.json());
    // console.log(this.posts);
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
.page {
  &__heron {
    position: relative;
    height: 650px;

    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      height: inherit;
      padding: 0 15%;
      color: $primary;
      margin: 0;

      p:first-child {
        font-weight: 400;
        font-family: $font-cursive;
        font-size: 25px;
      }

      p {
        font-size: 25px;
        letter-spacing: 0.025em;
      }

      h1 {
        font-weight: 90px;
        font-size: 70px;
        font-family: "Poppins", sans-serif;
        color: $primary;
      }

      &__btn {
        margin: 0;

        button {
          margin-top: 1.5em;
          margin-right: 1em;
          background: transparent;
          color: $primary;
          border: 1px solid #b9b9b9;
          border-radius: 5px;
        }

        button:nth-child(2) {
          color: $primary;
          border: none;
          font-weight: bold;

          img {
            margin-right: 0.3em;
          }
        }

        button:focus {
          outline: none;
          box-shadow: none;
        }
      }
    }

    svg {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 999;
    }
  }

  &__heron::before {
    content: "";
    background-image: url("assets/images/blog.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.3) opacity(0.9);
    width: 100%;
    height: 650px;
  }
  &__news {
    margin: 50px 10%;
    padding: 0;
    width: inherit;
    &__cards {
      margin: 50px 10% 0px 10%;
    }
  }
}

@media only screen and (max-width: 480px) {
  .page {
    &__heron {
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

    &__heron::before {
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
    &__news {
      &__cards {
        display: flex;
        flex-direction: column;
      }
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