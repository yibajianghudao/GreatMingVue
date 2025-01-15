import { userInfo } from '@/api/user/userinfo';
import { onMounted, onUpdated, ref, watch } from 'vue';
import router from '@/router';
export const useUserInfo = () => {

    const Info = ref(new Map())
    const GetInfo = async () => {
        const result = await userInfo()
        

        // console.log(componentKey)
        if (result.code === 1) {
            // console.log("查询成功")
            // console.log(result.data)

            // 设置admin,决定是否显示admin页面按钮
            SetAdmin(result.data.tag)

            Info.value.set("名称", result.data.name)
            // Info.value.set("tag", result.data.tag)
            Info.value.set("军营", result.data.company)
            Info.value.set("军衔", result.data.ranks)
            Info.value.set("出勤", result.data.attendance)
            Info.value.set("击杀", result.data.kills)

            Info.value.set("军饷余额", result.data.balance)
            // Info.value.set("userpic", result.data.userpic)
            // console.log(Info.value)
            // console.log(Info.value.get("name"))
            // console.log('成功发出请求');
            return Info.value;

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

    const SetAdmin = (tag: String) => {
        if (tag === "Admin") {
            localStorage.removeItem('admin') // 清除token
            localStorage.setItem('admin', "true");
        } else {
            localStorage.removeItem('admin') // 清除token
            localStorage.setItem('admin', "false");
        }
    }

    return {Info, GetInfo};
}