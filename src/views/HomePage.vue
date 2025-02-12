<template >
    <div class="home-page">
      <el-header height="60px">
        <div class="logo">
          <span>公司名称</span>
        </div>
        <div class="login">
          <el-button @click="loginClick">登录</el-button>
    </div>
      </el-header>
      <div>

    <el-menu :default-active="activeIndex" class="nav-container" mode="horizontal" @select="handleSelect">
      <!-- 使用 v-for 指令动态渲染菜单项 -->
      <el-menu-item 
        v-for="item in menuItems" 
        :key="item.index01" 
        :index="item.index01"
>
        {{ item.title }}
      </el-menu-item>
    </el-menu>

  </div>
      <el-main>
  <el-carousel type="card" cardScale="0.83" loop=true pause-on-hover=true>
      <el-carousel-item  v-for="(image, index) in images" :key="index">
        <img :src="image" alt="动态图片" style="width: 100%; height: 100%;"/>
    </el-carousel-item>
  </el-carousel>
        <div class="banner">
          <h1>欢迎来到我们的公司</h1>
          <p>这里是一段吸引人的公司简介，我们致力于为客户提供优质的产品和服务。</p>
          <el-button type="primary">了解更多</el-button>
        </div>
        <div class="features">
          <div class="feature-item">
            <i class="el-icon-star-on"></i>
            <h3>卓越品质</h3>
            <p>我们追求卓越品质，严格把控产品质量。</p>
          </div>
          <div class="feature-item">
            <i class="el-icon-s-check"></i>
            <h3>专业团队</h3>
            <p>拥有一支专业的团队，为您提供专业支持。</p>
          </div>
          <div class="feature-item">
            <i class="el-icon-user"></i>
            <h3>客户至上</h3>
            <p>始终将客户需求放在首位，为客户提供满意服务。</p>
          </div>
        </div>
        <h2 style="  text-align: center;">我们的产品</h2>
        <div class="products">
          
          <div class="product-item">
            <!-- <img src="product1.jpg" alt="Product 1"> -->
            <h3>产品 1</h3>
            <p>产品 1 的简介。</p>
          </div>
          <div class="product-item">
            <!-- <img src="product2.jpg" alt="Product 2"> -->
            <h3>产品 2</h3>
            <p>产品 2 的简介。</p>
          </div>
          <div class="product-item">
            <!-- <img src="product3.jpg" alt="Product 3"> -->
            <h3>产品 3</h3>
            <p>产品 3 的简介。</p>
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
  import { ref,onMounted} from 'vue';
   
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
// 处理菜单项选择事件
const handleSelect = (index) => {
  // 这里可以添加路由跳转逻辑
  console.log(`选中的菜单项索引是: ${index}`);
  activeIndex.value = index;
  router.push(index)
};  

function loginClick () {
    router.push('/login');
  }
const images = ref([
  // 这里假设使用 Vite 构建工具，使用 new URL 引入本地静态图片
  new URL('@/assets/1.jpg', import.meta.url).href,
  new URL('@/assets/2.jpg', import.meta.url).href,
  new URL('@/assets/3.jpg', import.meta.url).href
]);
  const router = useRouter();
  </script>
  
  
  <style scoped>
  .home-page {
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
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #f0f9eb;
    text-align: center;
  }
  .banner h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .banner p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .features {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    background-color: #fff;
  }
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .feature-item i {
    font-size: 48px;
    margin-bottom: 20px;
    color: #409EFF;
  }
  .feature-item h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 0;
    background-color: #f9f9f9;
  }
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-bottom: 30px;
    text-align: center;
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
}
.login {
  font-size: 24px;
  font-weight: bold;
}

  </style>