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
            <div class="p1">
                <p><el-icon><HomeFilled /></el-icon><span><a href="/">主页</a></span></p>
            </div>
            <div class="p2">
                <p><el-icon><Failed /></el-icon><span><a href="/">草稿箱</a></span></p>
            </div>
            <div class="p3">
                <p><el-icon><Comment /></el-icon><span><a href="/">我的消息</a></span></p>
            </div>
        </div>
        <div class="pass"></div>
        <div class="secondpass">
            <p><el-icon><UserFilled /></el-icon><span>{{ user }}的组织</span></p>
        </div>
        <div class="pass"></div>
        <div class="thirdpass">
            <div class="p1">
            <p><el-icon><Plus /></el-icon><span><a href="/">新建团队</a></span></p>
            </div>
        </div>
    </div>

    <!-- 主栏 -->
    <div class="main">

    </div>
</template>

<script lang="ts" setup>
let user = window.localStorage.getItem('Acc')
</script>

<style scoped>
@import "/src/assets/css/manage.css"
</style>