<script setup lang="ts">
import { ref, watch } from 'vue';
import { userlogin } from '@/api/login/index'
import router from '@/router'
import { useUserInfo } from '@/composables/GetuserInfo';

const {Info, GetInfo} = useUserInfo();
const uname = ref("")
const passwd = ref("")
let unameerr = ref("")
let passwderr = ref("")
// let errorAlertVisible = ref(true);
// let errorMessage = ref("");
function unameinput(e: any) {
    uname.value = e.target.value
}
function passwdinput(e: any) {
    passwd.value = e.target.value
}

const login = async () => {
    // console.log(`${uname.value},${passwd.value}`)
    const result = await userlogin(uname.value, passwd.value)
    // console.log(`result: ${result}`)
    // console.log(`result.date: ${result.data}`)
    if (result.code === 1) {
        // console.log("登录成功!")
        localStorage.removeItem('token') // 清除token
        localStorage.setItem('token', result.data);
        GetInfo(); // 调用GetInfo将admin的信息储存进去.
        router.push({ name: 'home' })
        setTimeout(() => { router.go(0) }, 3000)

    } else {
        console.error(`登录失败,${result.message}`)
        alert("用户名或密码错误,忘记密码可以联系管理员重置.")
        // errorAlertVisible.value = true
        // errorMessage.value = "用户名或密码错误,忘记密码可以联系管理员重置."
    }

}

const register = () => {
    router.push({ path: '/register' })
}




</script>

<template>
    <div class="container">
        <!-- <el-affix target=".affix-container" :offset="80">
            <el-alert v-if="errorAlertVisible" title="Login Error" type="error" center show-icon>{{ errorMessage
                }}</el-alert>
        </el-affix> -->
        <div>
            <h1>this is the login page </h1>
        </div>
        <div>
            <label for="uname"><b>用户名</b></label>
            <input type="text" :value="uname" @input="unameinput" placeholder="输入你的用户名" name="uname" required>
            <p>{{ unameerr }}</p><br>
            <!-- <p>{{ uname }}</p> -->
            <label for="passwd"><b>密码</b></label>
            <input type="password" :value="passwd" @input="passwdinput" placeholder="输入你的密码" name="passwd" required>
            <p>{{ passwderr }}</p><br>
            <el-button @click="login" type="primary">登录</el-button>
            <el-button @click="register" type="primary">注册</el-button>



        </div>
    </div>
</template>