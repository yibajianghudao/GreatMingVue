<script setup lang="ts">
import { userInfo } from '@/api/user/userinfo';
import Menu from '../components/Menu.vue';
import { ref } from 'vue';
import router from '@/router';

let balance = ref(0.0)

const GetInfo = async () => {
    const result = await userInfo()
    if (result.code === 1) {
        // console.log("查询成功")
        // console.log(result.data)

        balance = result.data.balance
        // console.log(Info.value)
        // console.log(Info.value.get("name"))
    } else {
        if (result.message.split(" ")[3] === "expired") {
            // console.log(result.message)
            // console.log("登录已过期,请重新登录.")
            alert("登录已过期,请重新登录.")
            localStorage.removeItem('token') // 清除token
            // router.push("/login")
            // window.location.reload(); // 刷新页面
        }

    }

}


</script>

<template>
    <Menu></Menu>
    <div>
        <h1>This is the Store Page.</h1>
    </div>
</template>