<template>
    <!-- 头部状态栏 -->
    <div class="head">
        <div class="logo"><img src="../../assets/icons/logo.png" alt=""></div>
        <div class="other">
            <el-icon>
                <Bell />
            </el-icon>
            <el-avatar> {{ user }} </el-avatar>
        </div>
    </div>

    <!-- 侧边栏 -->
    <div class="side">
        <div class="firstpass">
            <div class="p1" @click="gotoLink(strUserHome)">
                <p><el-icon><HomeFilled /></el-icon><span>主页</span></p>
            </div>
            <div class="p2" @click="gotoLink(strDraftBox)">
                <p><el-icon><Failed /></el-icon><span>草稿箱</span></p>
            </div>
            <div class="p3" @click="gotoLink(strMessage)">
                <p><el-icon><Comment /></el-icon><span>我的消息</span></p>
            </div>
        </div>
        <div class="pass"></div>
        <div class="secondpass">
            <p><el-icon><UserFilled /></el-icon><span>{{ user }}的组织</span></p>
        </div>
        <div class="pass"></div>
        <div class="thirdpass" >
            <div class="p1" @click="gotoLink(strCreateTeam)">
            <p><el-icon><Plus /></el-icon><span>新建团队</span></p>
            </div>
        </div>
    </div>

    <!-- 主栏 -->
    <div class="main">

    </div>
</template>

<script lang="ts" setup>
import router from '@/router';

let user = window.localStorage.getItem('Acc')

// 用户详情页
const strUserHome = "userhome"
// 草稿箱
const strDraftBox = 'draftbox' 
// 我的消息
const strMessage = 'message'
// 新建团队
const strCreateTeam = 'createteam'


function gotoLink(str:string){
    router.push('/'+str)
}
</script>

<style scoped>
@import "/src/assets/css/manage.css"
</style>