<script lang="ts" setup>
import router from '@/router';
import { computed, onUpdated, ref } from 'vue'

const index = ref("/")
const handleSelect = (key: string, keyPath: string[]) => {
    // 如果是退出登录
    if (key === "/user/exit") {
        localStorage.removeItem('token') // 清除token
        router.push('/')
        window.location.reload(); // 刷新页面
    } else {
        // console.log(key, keyPath)
        index.value = (key)
        // console.log(router.currentRoute.value.path)
        // console.log(`index:${index.value}`)
        router.push(key)
    }

}
const menuList = new Map<string, string>([
    ['/', 'GreatMingWeb'],
    ['/store', 'Store'],
])
const userMenuList = new Map<string, string>([
    ['/user/info', 'UserInfo'],
    ['/user/changepasswd', 'ChangePasswd'],
    ['/user/exit', 'Exit']
])

// 判断是否登录
// localStorage.removeItem('token');　// 清除token
const logined = ref(false)
const token = localStorage.getItem('token')
// console.log(token)
if (token) {
    logined.value = true
    // console.log("Have Token")
}

</script>
<template>
    <el-menu :index=index :default-active=router.currentRoute.value.path class="el-menu-demo" mode="horizontal"
        :ellipsis="false" @select="handleSelect">
        <el-menu-item v-for="menu in menuList" :index=menu[0]>{{ menu[1] }}</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu v-if="logined" index="user">
            <template #title>User</template>
            <el-menu-item v-for="userMenu in userMenuList" :index=userMenu[0]>{{ userMenu[1] }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item v-if="!logined" index="/login">登录</el-menu-item>
    </el-menu>
</template>



<style>
.flex-grow {
    flex-grow: 1;
}
</style>