<template>
  <div class="newsletter">
    <b-row class="newsletter__content">
      <b-col class="newsletter__content__subscribe">
        <h4>Subscribe to our</h4>
        <h4>Newsletter!</h4>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </b-col>

      <b-col class="newsletter__content__email">
        <div class="newsletter__content__email__inline">
          <ValidationObserver v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    v-model="email"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
              <b-button type="submit" variant="primary" @click="onSubmit"
                >Subscribe</b-button
              >
            </b-form>
          </ValidationObserver>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
  }),
  methods: {
    onSubmit() {
      console.log(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>