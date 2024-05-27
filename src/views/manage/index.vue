<template>
    <link rel="stylesheet" href="src/assets/css/manage.css">
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

    </div>

    <!-- 主栏 -->
    <div class="main">

    </div>
</template>

<script lang="ts" setup>
let user = window.localStorage.getItem('Acc')
</script>