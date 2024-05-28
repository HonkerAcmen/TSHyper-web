<template>
    <!-- head栏 -->
    <div class="head">
        <div class="icon"><img src="../../assets/icons/logo.png" alt=""></div>
        <p>
            <el-link type="primary" href="">产品</el-link>
        </p>
        <p>
            <el-link type="primary" href="">协作</el-link>
        </p>
        <p>
            <el-link type="primary" href="">支持</el-link>
        </p>
        <div class="buttons">
            <el-button tertiary size="large" @click="showLoginModal">
                登录
            </el-button>
            <el-button type="primary" size="large" @click="showRegisterModal">
                免费注册
            </el-button>
            <Modal :visible="store.activeModal" @close="hideModal"></Modal>
        </div>
    </div>



    <!-- cover -->
    <div class="cover">
        <div class="text">
            <h1>管理协调班级</h1>
            <h4>简单高效的管理方式，才会有更好的效率。</h4>
            <div class="button" @click="showLoginModal">
                <span>开始管理</span>
            </div>
        </div>

        <div class="cover-pic">
            <img src="../../assets/images/design-collaboration-cover.png" alt="">
        </div>
    </div>

    <div class="between">
        <h2>易协作如何快速管理班级？</h2>
        <ul>
            <li><img src="../../assets/images/ksrm.png" alt="">
                <p>入门简单</p>
            </li>
            <li><img src="../../assets/images/sjbb.png" alt="">
                <p>数据管理</p>
            </li>
            <li><img src="../../assets/images/sjfx.png" alt="">
                <p>随时访问</p>
            </li>
        </ul>
    </div>

    <div class="under-cover">
        <h2>小而美的管理平台</h2>
        <div class="button" @click="showRegisterModal">
            <p>免费使用</p>
        </div>
    </div>
    <!-- under -->
    <div class="under">
        <h6>CopyRight @ 2024 TG团队</h6>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Modal from './modal.vue';
import { useModalStore } from '@/stores/modal'

import "/src/assets/css/layout.css"


const store = useModalStore()

const showLoginModal = () => {
    store.openMoal('login')
};

const hideModal = () => {
    store.closeModal()
};

const showRegisterModal = () => {
    store.openMoal('register')
};


</script>