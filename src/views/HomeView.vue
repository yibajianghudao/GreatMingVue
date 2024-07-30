<script setup lang="ts">
import Menu from '../components/Menu.vue';
</script>

<template>
    <Menu></Menu>
    <!-- <div>
        <h1>this is the home page.</h1>
    </div> -->
    <div class="common-layout">
        <el-container>
            <el-aside width="300px">
                <div class="name">
                    <img src="https://pic.imgdb.cn/item/651b3268c458853aef2b3f8f.jpg" alt="Paris"></img>
                    <h1>大明军团</h1>
                    <h2>日月昭昭，惟我大明</h2>
                </div>
            </el-aside>
            <el-main>
                <div class="announcement">
                    <h1>公告</h1>
                    <h2>我队将于2024年7月27日举行队庆活动!</h2>
                    <p>网站正在重构中,如果你有好的意见请私聊江湖刀</p>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped lang="css">
.name {
    text-align: center;
}

.name img {
    border-radius: 25px;
    width: auto;
    height: 200px;
    object-fit: cover;
    top: 0;
    left: 0;
}

.announcement {
    text-align: center;
}
</style>