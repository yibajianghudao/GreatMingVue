<script setup lang="ts">
import { userInfo } from '@/api/user/userinfo';
import Menu from '../components/Menu.vue';
import { onMounted, ref } from 'vue';
import router from '@/router';
import { getallproducts } from '@/api/product/product';
import { buyproduct } from '@/api/product/product';
let balance = ref(0.0)
let allProducts = ref([])
const buynum = ref(1)

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
            router.push("/login")
            // window.location.reload(); // 刷新页面
        }

    }

}

const GetAllProducts = async () => {
    const result = await getallproducts();
    // console.log(result)
    allProducts.value = result.data
    // console.log(allProducts.value)
    // console.log(allProducts.value[0])
    // console.log(allProducts.value[0].classification)

}


const Buy = async (id: number) => {
    // console.log(id)
    // console.log(buynum.value)
    const result = await buyproduct(id, buynum.value)
    // console.log(result)
    // console.log(result.data.code)

    if (result.data.code === 1) {
        alert("购买成功!")
        router.go(0)
    } else {
        alert(`购买失败${result.data.message}`)
    }
}

onMounted(() => {
    GetInfo()
    GetAllProducts()
}
)


</script>

<template>
    <Menu></Menu>
    <div class="demo-collapse">
        <el-collapse>
            <el-collapse-item v-for="product in allProducts" :title=product.name :name="product.id">
                <div>
                    <img :src=product.image_url width="300" height="300">

                </div>
                <div>
                    {{ product.description }}
                    <p>价格:{{ product.price }}</p>
                    <p>剩余数量:{{ product.quantity }}</p>
                </div>
                <div>
                    <el-input-number v-model="buynum" :min="1" :max="100" size="small" />
                    <button @click="Buy(product.id)">购买</button>
                </div>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<style scoped></style>