<script setup lang="ts">

import Menu from '../components/SiteMenu.vue';
import { onMounted, onUpdated, ref, watch } from 'vue';
import { useUserInfo } from '@/composables/GetuserInfo';
import { userblanceupdatelog } from '@/api/user/blanceupdatelog';
// const componentKey = ref(0)
const balancelog = ref([])
const {Info, GetInfo} = useUserInfo();

const getblanceupdatelog = async ()=>{
    const result = await userblanceupdatelog();
    balancelog.value = result.data
    console.log(balancelog.value)
}

onMounted(() => {
    GetInfo();
    getblanceupdatelog();
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
    <div>
        <h4>余额变更记录:</h4>
        <el-table :data="balancelog" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="isadd" label="增加" width="180" />
            <el-table-column prop="balance" label="变更数额" width="180" />
            <el-table-column prop="updatedbalance" label="剩余军饷" width="180" />
            <el-table-column prop="updatetime" label="变更时间" width="180" />
            <el-table-column prop="description" label="描述" />
            
        </el-table>
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