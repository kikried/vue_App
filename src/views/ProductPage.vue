<template>
    <div class="product-page">
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
        <div class="product-content">
          <h1>我们的产品</h1>
          <div class="product-item">
            <!-- <img src="product1.jpg" alt="Product 1"> -->
            <h3>产品 1</h3>
            <p>产品 1 的详细信息，包括功能、优势等。</p>
          </div>
          <div class="product-item">
            <!-- <img src="product2.jpg" alt="Product 2"> -->
            <h3>产品 2</h3>
            <p>产品 2 的详细信息，包括功能、优势等。</p>
          </div>
          <div class="product-item">
            <!-- <img src="product3.jpg" alt="Product 3"> -->
            <h3>产品 3</h3>
            <p>产品 3 的详细信息，包括功能、优势等。</p>
          </div>
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
//   import { ref } from 'vue';
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
  .product-page {
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
  .product-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  }
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  .product-item img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  .product-item h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .product-item p {
    font-size: 16px;
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
}  .nav-container {
  @apply flex justify-center items-center bg-neutral-50 text-white h-16;
}
.el-menu-item {
  @apply mx-4 cursor-pointer;
}
.el-menu-item:hover {
  @apply text-blue-200;
}
  </style>