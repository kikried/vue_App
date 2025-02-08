<template>
    <div class="service-page">
      <el-header height="60px">
        <div class="logo">
          <span>公司名称</span>
        </div>
        <div class="login">
          <el-button @click="loginClick">登录</el-button>
        </div>
      </el-header>   
      <el-menu :default-active="activeIndex" class="nav-container"  mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/products">产品</el-menu-item>
          <el-menu-item index="/store">产品购买</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      <el-main>
        <div class="service-content">
          <h1>我们的服务</h1>
          <p>我们提供以下服务：</p>
          <ul>
            <li>服务 1：[服务 1 描述]</li>
            <li>服务 2：[服务 2 描述]</li>
            <li>服务 3：[服务 3 描述]</li>
          </ul>
        </div>
      </el-main>
      <el-footer height="60px">
        <div class="footer-content">
            <span>版权所有 © 2025 公司名称预留位置</span>
        </div>
      </el-footer>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import { ElHeader, ElMain, ElFooter, ElMenu, ElMenuItem } from 'element-plus';
  
  
  const activeIndex = ref(window.location.pathname);
  
  
  const handleSelect = (index) => {
    activeIndex.value = index;
    router.push(index);
  };
  
  
  import { useRouter } from 'vue-router';
  const router = useRouter();
  </script>
  
  
  <style scoped>
  .service-page {
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
  .service-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    text-align: center;
  }
  .service-content h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .service-content p,.service-content ul {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .el-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;
    color: white;
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