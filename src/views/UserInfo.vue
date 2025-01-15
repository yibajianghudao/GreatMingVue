<script setup lang="ts">

import Menu from '../components/SiteMenu.vue';
import { onMounted, onUpdated, ref, watch } from 'vue';
import { useUserInfo } from '@/composables/GetuserInfo';
// const componentKey = ref(0)

const {Info, GetInfo} = useUserInfo();

onMounted(() => {
    GetInfo();
})

</script>

<template>
    <Menu></Menu>
    <div class="center fontinit">
        <!-- <el-descriptions title="Your Info" class="descriptions" column=1>
            <el-descriptions-item v-for="item in Info.keys()" :label="item">{{
                Info.get(item)
                }}</el-descriptions-item>
        </el-descriptions> -->
        <ul>
            <li class="li-style-none" v-for="item in Info.keys()">{{ item + "\t\t" + Info.get(item) }}</li>
        </ul>
    </div>
</template>

<style scoped>
.center {
    margin: 0 auto;
    text-align: center;
}

.fontinit {
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
    font-size: large;
}

.li-style-none {
    list-style-type: none;
}
</style>