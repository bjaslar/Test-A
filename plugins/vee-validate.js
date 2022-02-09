import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';


extend('required', {
  ...required,
  message: '*This field is required'
});

extend('email', {
  ...email,
  message: 'Invalid Email address'
});

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)