<template>
  <div class="article">
    <nuxt-link :to="'news/' + title">
      <b-card :title="date" :img-src="image" img-alt="Image" img-top>
        <b-card-text class="text-left" v-if="title.length < 70">{{
          title
        }}</b-card-text>
        <b-card-text class="text-left" v-else>{{
          title.substring(0, 70) + "..."
        }}</b-card-text>

        <template #footer>
          {{ author }}
        </template>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "image", "author", "id"],
};
</script>

<style lang="scss" scoped>
</style>