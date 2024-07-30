<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue';
import Menu from '../components/Menu.vue';
import { userInfo } from '@/api/user/userinfo';
import router from '@/router';

const Info = ref(new Map())
// const componentKey = ref(0)

const GetInfo = async () => {
    const result = await userInfo()

    // console.log(componentKey)
    if (result.code === 1) {
        // console.log("查询成功")
        // console.log(result.data)
        Info.value.set("name", result.data.name)
        Info.value.set("tag", result.data.tag)
        Info.value.set("ranks", result.data.ranks)
        Info.value.set("company", result.data.company)
        Info.value.set("kills", result.data.kills)
        Info.value.set("attendance", result.data.attendance)
        Info.value.set("balance", result.data.balance)
        Info.value.set("userpic", result.data.userpic)
        // console.log(Info.value)
        // console.log(Info.value.get("name"))
        // console.log('成功发出请求');

    } else {
        if (result.message.split(" ")[3] === "expired") {
            // componentKey.value += 1
            // console.log(result.message)
            // console.log("登录已过期,请重新登录.")
            alert("登录已过期,请重新登录.")
            localStorage.removeItem('token') // 清除token
            // console.log("跳转到login")
            router.push("/login")
            // window.location.reload(); // 刷新页面
            // router.go(0)
        }

    }

}
// watch(componentKey, (newcomponentKey) => {
//     if (componentKey.value == 1) {
//         window.location.reload();
//     }

// })

onMounted(() => {
    // console.log('组件已经被挂载');
    GetInfo()


})

</script>

<template>
    <Menu></Menu>
    <div>
        <el-descriptions title="Your Info">
            <!-- <el-descriptions-item label="Username">kooriookami</el-descriptions-item> -->
            <el-descriptions-item v-for="item in Info.keys()" :label="item">{{ Info.get(item)
                }}</el-descriptions-item>
        </el-descriptions>
        <!-- <p v-for="infos in Info.keys()" :key="infos" class="text item">{{ infos }}</p> -->
    </div>
</template>