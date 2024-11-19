<script setup lang="ts">
import Menu from '../components/SiteMenu.vue';
import { ref } from 'vue';
import { changepasswd } from '@/api/user/changepasswd';
import router from '@/router';
const oldpasswd = ref('')
const newpasswd = ref('')
const newpasswdcon = ref('')
const change = async () => {
    const result = await changepasswd(oldpasswd.value, newpasswd.value, newpasswdcon.value)
    console.log(result)
    if (result.code === 1) {
        alert(result.message) // 密码更新成功
        // console.log("修改成功!")
        // localStorage.setItem('token', result.data);
        localStorage.removeItem('token');   // 清除token
        router.push({ path: '/login' })
    } else {
        console.error(`修改失败,${result.message}`)
        alert(result.message)
        // errorAlertVisible.value = true
        // errorMessage.value = "用户名或密码错误,忘记密码可以联系管理员重置."
    }
}

</script>

<template>
    <Menu></Menu>
    <!-- <div>
        <h1>This is the ChangePasswd Page.</h1>
    </div> -->
    <el-input v-model="oldpasswd" style="width: 240px" type="password" placeholder="Please input your old password"
        show-password /><br>
    <el-input v-model="newpasswd" style="width: 240px" type="password" placeholder="Please input your new password"
        show-password /><br>
    <el-input v-model="newpasswdcon" style="width: 240px" type="password" placeholder="Please config your new password"
        show-password /><br>
    <el-button @click="change" type="primary">修改密码</el-button>

</template>