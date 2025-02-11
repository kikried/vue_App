<!-- src/components/HeaderMenu.vue -->
<template>
    <div>
      <el-header height="60px">
        <div class="logo">
          <span>公司名称</span>
        </div>
        <div class="login">
          <el-button @click="loginClick">登录</el-button>
        </div>
      </el-header>
      <el-menu :default-active="activeIndex" class="nav-container" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in menuItems" :key="item.index01" :index="item.index01">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElHeader, ElMain, ElFooter, ElMenu, ElMenuItem } from 'element-plus';
  import { useRouter } from 'vue-router';
  
  // 定义菜单项数组
  const menuItems = ref([
    { index01: '/', title: '首页' },
    { index01: '/about', title: '关于我们' },
    { index01: '/products', title: '产品' },
    { index01: '/store', title: '产品购买' },
    { index01: '/contact', title: '联系我们' }
  ]);
  // 定义默认激活的菜单项
  const activeIndex = ref('/');
  const router = useRouter();
  
  // 处理菜单项选择事件
  const handleSelect = (index) => {
    // 这里可以添加路由跳转逻辑
    console.log(`选中的菜单项索引是: ${index}`);
    activeIndex.value = index;
    router.push(index);
  };
  
  // 登录点击事件（这里只是占位，你可以根据需求实现具体逻辑）
  const loginClick = () => {
    console.log('登录按钮被点击');
  };
  </script>
  
  <style scoped>
  .page {
      display: flex;
  flex-direction: column;
  min-height: 100vh;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #409EFF;
    color: white;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  .nav-container {
    @apply flex justify-center items-center bg-neutral-50 text-white h-16;
  }
  .el-menu-item {
    @apply mx-4 cursor-pointer;
  }
  .el-menu-item:hover {
    @apply text-blue-200;
  }
  </style>