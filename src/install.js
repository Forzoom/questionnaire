import Questionnaire from './questionnaire.vue';
import ROChoice from './choice.js';
import ROMultipleChoice from './multipleChoice.js';

export let _Vue;
export let _options;

export function install(Vue, options) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    _Vue = Vue;
    _options = options;

    if (!options.AMAP_KEY) {
        console.log('[questionnaire warning] lost AMAP_KEY, address components cannot work correctly');
    }

    console.log('[questionnaire] installed');

    Vue.component('Questionnaire', Questionnaire);
    Vue.component('ROChoice', ROChoice);
    Vue.component('ROMultipleChoice', ROMultipleChoice);
}