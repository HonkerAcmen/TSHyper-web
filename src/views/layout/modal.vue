<template>
    <link rel="stylesheet" href="src/assets/css/modal.css">
    <div v-if="visible === 'login'" class="modal">
        <div class="modal-overlay" @click="close"></div>
        <div class="modal-content">

            <div class="close" @click="close"><span>&times;</span></div>

            <h2>欢迎回来</h2>

            <div class="content">
                <el-input v-model="account" placeholder="账号/邮箱" :maxlength="16" size="large"></el-input>
                <el-input type="password" v-model="passwd" :show-password="true" placeholder="密码" :maxlength="16"
                    size="large"></el-input>
                <el-checkbox v-model="isCheck" label="我已阅读并同意 服务协议 和 隐私协议" />
                <div class="button" @click="Login">
                    <p>开始使用</p>
                </div>
            </div>
            <el-divider />
            <div class="under-modal">
                <el-link type="primary" href="">忘记密码</el-link>
                <div class="under-text">
                    <p>还没有账号？</p>
                    <el-link type="primary" @click="GotoRegister">去注册</el-link>
                </div>
            </div>
        </div>
    </div>

    <div v-if="visible === 'register'" class="modal">
        <div class="modal-overlay" @click="close"></div>
        <div class="modal-content">

            <div class="close" @click="close"><span>&times;</span></div>

            <h2>注册新账号</h2>

            <div class="content">
                <el-input v-model="reg_account" placeholder="账号/邮箱" :maxlength="16" size="large"></el-input>
                <el-input type="password" v-model="reg_passwd" :show-password="true" placeholder="密码" :maxlength="16"
                    size="large"></el-input>
                <el-checkbox v-model="reg_isCheck" label="我已阅读并同意 服务协议 和 隐私协议" />
                <div class="button" @click="Register">
                    <p>注册</p>
                </div>
            </div>
            <el-divider />
            <div class="under-modal">
                <div class="under-text">
                    <p>已有账号?</p>
                    <el-link type="primary" @click="GotoLogin">立即登录</el-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { useModalStore } from '@/stores/modal'
import axios from 'axios';
import { serverAddr, serverLoginAPI, serverRegisterAPI } from '@/hooks/config'
import {isValidInputName, isValidInputPassword} from '@/utils/valid'

const account = ref("")
const passwd = ref("")
const isCheck = ref(false)
const store = useModalStore()

const reg_account = ref("")
const reg_passwd = ref("")
const reg_isCheck = ref(false)


const props = defineProps<{
    visible: string,
}>()
const emit = defineEmits<{
    (e: 'close'): void
}>()

const close = () => {
    emit('close')
}


async function Login() {
    if (isCheck.value === false) {
        ElMessage({
            message: "请同意协议",
            type: 'error',
            plain: true
        })
        return
    }
    else if (account.value == "" || passwd.value == "") {
        ElMessage({
            message: "请输入账号或者密码",
            type: 'error',
            plain: true
        })
        return
    }
    else if (passwd.value.length > 6){
        ElMessage({
            message: "您输入的密码太短",
            type: 'error',
            plain: true
        })
        return
    }
    else if (!isValidInputName(account.value)){
        ElMessage({
            message: "账号只能由数字、字母、下划线、@组成",
            type: 'error',
            plain: true
        })
        return
    }
    else if (!isValidInputPassword(passwd.value)){
        ElMessage({
            message: "密码只能由数字、字母、下划线、@、*组成",
            type: 'error',
            plain: true
        })
        return
    }
    // 发送请求
    const data = {
        Acc: account.value,
        Passwd: passwd.value
    }
    const url = serverAddr + serverLoginAPI
    try {
        const res = await axios.get(url + "?Acc=" + data.Acc + "&Passwd=" + data.Passwd)

        localStorage.setItem("token", res.data.data);
        localStorage.setItem("Acc", account.value);

        router.push('/home')

        ElMessage({
            message: "登录成功",
            type: 'success',
            plain: true
        })

        window.setTimeout(() => {
            window.location.reload()
        }, 800)

    } catch (error: any) {
        ElMessage.error(error.response.data.msg);
    }

}

async function Register(){
    if (reg_isCheck.value === false) {
        ElMessage({
            message: "请同意协议",
            type: 'error',
            plain: true
        })
        return
    }
    else if (reg_account.value == "" || reg_passwd.value == "") {
        ElMessage({
            message: "请输入账号或者密码",
            type: 'error',
            plain: true
        })
        return
    }
    else if (reg_passwd.value.length > 6){
        ElMessage({
            message: "您输入的密码太短",
            type: 'error',
            plain: true
        })
        return
    }
    else if (!isValidInputName(reg_account.value)){
        ElMessage({
            message: "账号只能由数字、字母、下划线、@组成",
            type: 'error',
            plain: true
        })
        return
    }
    else if (!isValidInputPassword(reg_passwd.value)){
        ElMessage({
            message: "密码只能由数字、字母、下划线、@、*组成",
            type: 'error',
            plain: true
        })
        return
    }
    // 发送请求
    const data = {
        Acc: reg_account.value,
        Passwd: reg_passwd.value
    }
    const url = serverAddr + serverRegisterAPI

    try {
        const res = await axios.post(url, data)

        localStorage.setItem("token", res.data.data);
        localStorage.setItem("Acc", account.value);

        router.push('/home')

        ElMessage({
            message: "注册成功",
            type: 'success',
            plain: true
        })

        window.setTimeout(() => {
            window.location.reload()
        }, 800)

    } catch (error: any) {
        ElMessage.error(error.response.data.msg);
    }
}

const GotoLogin = () => {
    store.openMoal('login')
}

const GotoRegister = () => {
    store.openMoal('register')
}

</script>
