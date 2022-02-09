<template>
  <div class="page">
    <div class="page__hero" v-if="error.statusCode === 404">
      <b-row class="page__hero__content">
        <h1>Page not found.</h1>
        <p class="desktop">
          Ich entschloss mich schon sehr früh, das Leben ohne Wenn und Aber
          einfach hinzunehmen. Ich habe nie erwartet, dass es etwas Besonderes
          für mich bereithält, und doch scheine ich weit mehr erreicht zu haben,
          als ich mir je erhofft hatte. Meistens geschah es, ohne dass ich je
          danach gesucht hätte. <br />
          Audrey Hepburn
        </p>
      </b-row>
    </div>

    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import audrey from "../assets/images/audrey.webp";
export default {
  props: ["error"],
  layout: "error",

  computed: {
    audrey() {
      return audrey;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__hero {
    position: relative;
    height: 500px;

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
        color: $secondary;
        text-align: center;
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
    background-image: url("assets/images/audrey.webp");
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.3) opacity(0.9);
    width: 100%;
    height: 999px;
  }
}

@media only screen and (max-width: 480px) {
  .page {
    &__hero {
      height: 440px;
    }

    &__hero::before {
      content: "";
      background-image: url("assets/images/audrey.webp");
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      filter: brightness(0.3) opacity(0.9);
      width: 100%;
      height: 440px;
    }
  }
}
</style>