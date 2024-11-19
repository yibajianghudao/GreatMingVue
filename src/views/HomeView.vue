<script setup lang="ts">
import Menu from '../components/SiteMenu.vue';
</script>

<template>
    <Menu></Menu>
    <!-- <div>
        <h1>this is the home page.</h1>
    </div> -->
    <div class="common-layout">
        <div class="name" width="300px">
            <img src="https://pic.imgdb.cn/item/651b3268c458853aef2b3f8f.jpg" alt="Paris"></img>
            <h1>大明军团</h1>
            <h2>日月昭昭，惟我大明</h2>
        </div>
        <div class="announcement">
            <h1>公告</h1>
            <h2>我队已于2024年7月27日举行十周年队庆活动!</h2>
            <h1>网站正在重构中</h1>
            <p>如果你遇到bug,反馈给江湖刀获得1军饷奖励</p>
            <p>如果你有好的建议,提供给江湖刀,采纳后获得2军饷奖励</p>
            <P>注意:请用发邮件的方式发送到:w202707535@outlook.com</P>
        </div>
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


@media (min-width: 600px) {
    .common-layout {
        display: flex;
    }

    .name {
        width: 30%;
    }

    .announcement {
        width: 70%;
    }
}

@media (max-width: 1000px) {
    .common-layout {
        flex-wrap: wrap;
    }

    .name {
        width: 100%;
    }

    .announcement {
        width: 100%;
    }
}
</style>