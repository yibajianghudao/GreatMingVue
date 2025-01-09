<script setup lang="ts">
import router from '@/router';
// import Menu from '../components/AdminMenu.vue';
import Menu from '../components/SiteMenu.vue';
import { ref } from 'vue'
import { submitGameLog, submitHandleGameLog } from '@/api/admin/submit';
import { getGameLogs } from '@/api/admin/getgamelogs';
import { getalluserspage } from '@/api/user/getallusers';
import { registeruser } from '@/api/user/register';
import { deleteuserbyid } from '@/api/user/deleteuser';
import { updateuserapi } from '@/api/user/update';

const textarea = ref('')
const date = ref('')
const language = ref('')
language.value = "chinese"

const submit = async () => {
    const localDate = new Date(date.value); // 转换为本地时间
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000); // 转换为 UTC
    const formattedDate = utcDate.toISOString().split('T')[0];
    const result = await submitGameLog(formattedDate, language.value, textarea.value)
    console.log(result)
}

const date2 = ref('')
const name = ref('')

const search = async () => {
    if (date2.value !== '') {
        const localDate = new Date(date2.value); // 转换为本地时间
        const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000); // 转换为 UTC
        date2.value = utcDate.toISOString().split('T')[0];
    }
    const result = await getGameLogs(name.value, date2.value, "");
    console.log(result)


}

const searchbyid = async () => {
    const result = await getGameLogs("", "", "1");
    console.log(result)


}
const textarea3 = ref('')
const date3 = ref('')

const submitHandle = async () => {
    const localDate = new Date(date3.value); // 转换为本地时间
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000); // 转换为 UTC
    const formattedDate = utcDate.toISOString().split('T')[0];
    const result = await submitHandleGameLog(formattedDate, textarea3.value)
    console.log(result)
}

const userdata = ref([])
const pages = ref(0)
const editid = ref(0)
const editname = ref("")
const editcompany = ref("")
const editranks = ref("")
const editattendance = ref(0)
const editkills = ref(0)
const editbalance = ref(0.0)
const edittag = ref("")
const dialogVisible = ref(false)

const submitgetalluserspage = async () => {
    const result = await getalluserspage(1);
    userdata.value = result.data.items
    // console.log(userdata.value)
}

const edituser = (index: number, row: any) => {
    console.log(index)
    console.log(row)
    console.log(row.name)
    console.log(row.id)
    editid.value = row.id
    editname.value = row.name
    editcompany.value = row.company
    editranks.value = row.ranks
    editattendance.value = row.attendance
    editkills.value = row.kills
    editbalance.value = row.balance
    edittag.value = row.tag
    dialogVisible.value = true
}
const deleteuser = async (row: any) => {
    console.log(row.id)
    const result = await deleteuserbyid(row.id);

}
const changepages = async () => {
    const result = await getalluserspage(pages.value);
    userdata.value = result.data.items
    console.log(userdata.value)
}
const handleeditClose = ()=>{
    dialogVisible.value = false
}
const canceledit = ()=>{
    dialogVisible.value = false
}
const updateuser = async ()=>{
    const result = await updateuserapi(editid.value,editname.value,edittag.value,editranks.value,editcompany.value,editkills.value,editattendance.value,editbalance.value)
    submitgetalluserspage()
    dialogVisible.value = false
}




const name2 = ref('')
const ranks = ref('')
const company = ref('')
const register = async () => {
    const result = await registeruser(name2.value, ranks.value, company.value);
}

</script>
<template>
    <Menu></Menu>
    <div class="demo-date-picker">
        <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker v-model="date" type="date" placeholder="Pick a day" size="small" />
        </div>
    </div>
    <el-input v-model="textarea" style="width: 240px" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
        placeholder="Input Game Log" />
    <el-button @click="submit" type="primary">submlit</el-button>

    <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker v-model="date2" type="date" placeholder="Pick a day" size="small" />
    </div>
    <el-input v-model="name" style="width: 240px" placeholder="Please input name" />
    <el-button @click="search" type="primary">search</el-button>

    <el-button @click="searchbyid" type="primary">searchbyid</el-button>

    <div>
        <div class="demo-date-picker">
            <div class="block">
                <span class="demonstration">Default</span>
                <el-date-picker v-model="date3" type="date" placeholder="Pick a day" size="small" />
            </div>
        </div>
        <el-input v-model="textarea3" style="width: 240px" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
            placeholder="Input Game Log" />
        <el-button @click="submitHandle" type="primary">submlitHandleLog</el-button>
    </div>
    <div>
        <el-button @click="submitgetalluserspage" type="primary">getalluserspage</el-button>
        <el-table :data="userdata" height="500" style="width: 100%">
            <el-table-column fixed prop="name" label="名称" width="150" />
            <el-table-column prop="company" label="军营" width="120" />
            <el-table-column prop="ranks" label="军衔" width="120" />
            <el-table-column prop="attendance" label="出勤" width="120" />
            <el-table-column prop="kills" label="击杀" width="120" />
            <el-table-column prop="balance" label="军饷" width="120" />
            <el-table-column prop="tag" label="标签" width="120" />

            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small"
                        @click="edituser(scope.$index, scope.row)">Edit</el-button>
                    <el-button link type="primary" size="small" @click="deleteuser(scope.row)">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="50" v-model:current-page=pages
            @current-change="changepages" />
    </div>

    <el-dialog v-model="dialogVisible" title="Edit User" width="500" :before-close="handleeditClose">
        <div>
            <el-label>id:</el-label>
            <el-input v-model="editid" disabled style="width: 240px" /><br>
            <el-label>name:</el-label>
            <el-input v-model="editname" style="width: 240px" placeholder="Please input name" /><br>
            <el-label>company:</el-label>
            <el-input v-model="editcompany" style="width: 240px" placeholder="Please input editcompany" /><br>
            <el-label>ranks:</el-label>
            <el-input v-model="editranks" style="width: 240px" placeholder="Please input editranks" /><br>
            <el-label>attendance:</el-label>
            <el-input v-model="editattendance" style="width: 240px" placeholder="Please input editattendance" /><br>
            <el-label>kills:</el-label>
            <el-input v-model="editkills" style="width: 240px" placeholder="Please input editkills" /><br>
            <el-label>balance:</el-label>
            <el-input v-model="editbalance" style="width: 240px" placeholder="Please input editbalance" /><br>
            <el-label>tag:</el-label>
            <el-input v-model="edittag" style="width: 240px" placeholder="Please input edittag" /><br>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="canceledit">Cancel</el-button>
                <el-button type="primary" @click="updateuser">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>

    <div>
        <el-input v-model="name2" style="width: 240px" placeholder="Please input name" />
        <el-input v-model="ranks" style="width: 240px" placeholder="Please input 军衔" />
        <el-input v-model="company" style="width: 240px" placeholder="Please input 军营" />
        <el-button @click="register" type="primary">register</el-button>
    </div>

</template>