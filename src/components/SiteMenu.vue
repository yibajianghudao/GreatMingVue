<script lang="ts" setup>
import router from '@/router';
import { computed, onUpdated, ref } from 'vue'

const index = ref("/")
const handleSelect = (key: string, keyPath: string[]) => {
    // 如果是退出登录
    if (key === "/user/exit") {
        localStorage.removeItem('token') // 清除token
        localStorage.removeItem('admin')
        router.push('/')
        setTimeout(() => { router.go(0) }, 3000)
    } else {
        index.value = (key)
        router.push(key)
    }

}
const menuList = new Map<string, string>([
    ['/', 'GreatMingWeb'],
    ['/store', 'Store'],
])
const userMenuList = new Map<string, string>([
    ['/admin', 'Admin'],
    ['/user/info', 'UserInfo'],
    ['/user/changepasswd', 'ChangePasswd'],
    ['/user/exit', 'Exit']
])

// 判断是否登录
// localStorage.removeItem('token');　// 清除token
const logined = ref(false)
const token = localStorage.getItem('token')
const admin = localStorage.getItem('admin')
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
            <template v-for="userMenu in userMenuList">
                <el-menu-item v-if="admin === 'true' || userMenu[1] !== 'Admin'" :index=userMenu[0]>{{ userMenu[1] }}</el-menu-item>
            </template>
            
        </el-sub-menu>
        <el-menu-item v-if="!logined" index="/login">登录</el-menu-item>
    </el-menu>
</template>



<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu-demo {
    background-color: rgb(198, 198, 198);
}

.el-menu {
    background-color: rgb(198, 198, 198);
}
</style>