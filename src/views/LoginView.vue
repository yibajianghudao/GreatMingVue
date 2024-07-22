<script setup lang="ts">
import { ref } from 'vue';
const uname = ref("")
const passwd = ref("")
let unameerr = ref("")
let passwderr = ref("")
function unameinput(e) {
    uname.value = e.target.value
}
function passwdinput(e) {
    passwd.value = e.target.value
}

function login() {
    console.log(`${uname.value},${passwd.value}`)

}


</script>

<template>
    <div class="container">
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
            <button @click="login" type="submit">登录</button>
        </div>
        <div>
            <p>加战队请加QQ群:XXXXXXXX(需要有拿破仑正版dlc)</p>
        </div>
    </div>
</template>