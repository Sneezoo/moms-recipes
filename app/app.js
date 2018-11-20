import Vue from 'nativescript-vue';

import RecipesList from './components/RecipesList';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(RecipesList)])

}).$start();
