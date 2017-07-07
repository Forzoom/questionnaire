import Questionnaire from './questionnaire.vue';

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
}