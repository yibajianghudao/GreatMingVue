<script setup lang="ts">
import { onMounted } from 'vue';
import Menu from '../components/Menu.vue';
import { userInfo } from '@/api/user/userinfo';
const GetInfo = async () => {
    const result = await userInfo()
    console.log(result)
}

</script>

<template>
    <Menu></Menu>
    <div>
        <el-button @click="GetInfo" type="primary">获取信息</el-button>
        <h1>This is the UserInfo Page.</h1>
    </div>
</template>