<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" :placeholder="mergeSource.placeholder" v-model="val" />
            </div>
            <div class="weui-cell__ft" @click="onClickLocation">
                点击获取
            </div>
        </div>
    </div>
</template>

<script>
import {
    getLocation,
} from './lib/wx';

import {
    _options,
} from './install.js';

export default {
    name: 'ROAddressLocation',
    props: {
        id: {
            required: true,
            type: String,
        },
        source: {
            type: Object,
            default: function() {
                return {
                    placeholder: '',
                };
            },
        },
        result: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            mutableSource: {
                placeholder: '',
            },
        };
    },
    computed: {
        val: {
            get: function() {
                return this.result;
            },
            set: function(val) {
                this.$emit('item', {
                    id: this.id,
                    result: val,
                });
            },
        },
        mergeSource() {
            return Object.assign(Object.assign({
                placeholder: '',
            }, this.source), this.mutableSource);
        },
    },
    methods: {
        regeo: function() {
            var vm = this;
            return getLocation()
                .then(function({ status, data: location, }) {
                    if (status !== 0) {
                        throw new Error('getLocation fail');
                    }
                    return location;
                })
                .then(function(location) {
                    var key = _options.AMAP_KEY;
                    var url = `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${location.longitude},${location.latitude}`;
                    return vm.axios.get(url);
                })
                .then(function(response) {
                    var data = response.data.regeocode.addressComponent;
                    var province = data.province;
                    var city = data.city;
                    vm.val = `${province}${city}`;
                });
        },
        // 当点击按钮进行定位
        onClickLocation: function() {
            var vm = this;
            vm.$emit('load');
            vm.regeo().then(function() {
                vm.$emit('finish');
            }, function() {
                vm.mutableSource.placeholder = '自动获取失败，请手动输入';
                vm.$emit('finish');
            });
        },
    },
};
</script>