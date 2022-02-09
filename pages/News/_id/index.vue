<template>
  <div class="page">
    <div class="page__hero">
      <b-row class="page__hero__content">
        <h1>
          {{ $route.params.id }}
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

    <div
      class="page__article"
      v-for="article in post.articles"
      :key="article.title"
    >
      <p>" {{ article.description }} "</p>
      <img :src="article.urlToImage" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        laboriosam eum? Harum quos, ducimus eius ut velit culpa nobis.
        Architecto, molestiae nam tempora voluptatibus fuga error totam itaque
        accusamus, laboriosam nulla deserunt doloremque ad necessitatibus
        incidunt dolores sapiente, amet quasi nihil vitae illum praesentium.
        Consequuntur porro eum officia, assumenda reiciendis obcaecati
        asperiores modi odit velit sunt ipsa, autem voluptate commodi nam unde
        debitis quis. Explicabo nesciunt blanditiis fugit illo, aliquid incidunt
        hic dolorum delectus eaque quam rerum iusto a cupiditate consectetur
        culpa impedit placeat reprehenderit expedita perspiciatis vel rem quos
        ipsum. Doloremque amet impedit nam dignissimos, qui officiis veritatis
        sapiente, repellendus sint ut cum aliquam ipsa, eos suscipit sed
        incidunt aut minima quae dolorum porro rem voluptatibus saepe nesciunt
        magni? Et perferendis amet vitae earum nihil, culpa harum vero
        architecto, nulla, laudantium neque. Dolor dignissimos natus obcaecati
        distinctio hic fugiat laudantium tenetur nam, magni voluptatibus libero,
        temporibus aliquam accusamus amet?
      </p>
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
    };
  },
  head: {
    title: "News | asioso",
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
    this.post = await fetch(
      `https://newsapi.org/v2/everything?q=${this.$route.params.id}&from=2022-01-25&pageSize=1&t&apiKey=4034ae4301114cab8d922e665ff0fd2f`
    ).then((res) => res.json());
    console.log(this.post);
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  &__hero {
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
        font-size: 2.5em;
        font-family: "Poppins", sans-serif;
        color: $primary;
        line-height: 2;
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

        button:hover {
          background: transparent;
        }

        button:focus {
          outline: none;
          box-shadow: none;
          background: transparent;
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

  &__hero::before {
    content: "";
    background-image: url("assets/images/zen.jpeg");
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

  &__article {
    margin: 0px 10% 50px 10%;
    background: #ffffff;
    z-index: 9999;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }

    p:first-child {
      margin: 2em 0;
      color: $headline-color;
      font-size: 1.5em;
      font-style: italic;
      letter-spacing: 0.025em;
      text-align: justify;
    }

    img {
      box-sizing: border-box;
      width: 85vw;
      max-height: 500px;
      padding: 0 5%;
    }

    p:nth-of-type(2) {
      margin-top: 2em;
      letter-spacing: 0.025em;
    }
  }
}

@media only screen and (max-width: 480px) {
  .page {
    &__hero {
      height: 500px;
      h1 {
        font-size: 1.7em;
      }
    }

    &__hero::before {
      height: 500px;
    }
  }
}
</style>