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
         
              <!-- 轮播图 -->
      <el-carousel type="card" height="300px" class="carousel">
        <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="轮播图" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
  
      <!-- 商品列表 -->
      <div class="product-list">
        <h2 class="product-list-title">热门商品</h2>
        <div class="product-grid">
          <div v-for="(product, index) in products" :key="index">
            <el-card class="product-card">
              <template #header>
                <div class="product-title">{{ product.name }}</div>
              </template>
              <img :src="product.image" alt="商品图片" class="product-image">
              <div class="product-price">价格: {{ product.price }} 元</div>
              <el-button type="primary" @click="addToCart(product)" class="add-to-cart-button">加入购物车</el-button>
            </el-card>
          </div>
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
  // 轮播图数据
  const carouselImages = ref([
  new URL('@/assets/c.png', import.meta.url).href,
  new URL('@/assets/c1.png', import.meta.url).href,
  new URL('@/assets/c2.png', import.meta.url).href,
  new URL('@/assets/c3.png', import.meta.url).href

  ]);
  
  // 商品数据
  const products = ref([
    {
      id: 1,
      name: '商品 1',
      image:  new URL('@/assets/c.png', import.meta.url).href,
      price: 99
    },
    {
      id: 2,
      name: '商品 2',
      image: new URL('@/assets/c1.png', import.meta.url).href,
      price: 199
    },
    {
      id: 3,
      name: '商品 3',
      image: new URL('@/assets/c2.png', import.meta.url).href,
      price: 299
    },
    {
      id: 4,
      name: '商品 4',
      image:  new URL('@/assets/c3.png', import.meta.url).href,
      price: 399
    }
  ]);
    

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

.mall-home {
    padding: 2rem;
  }
  
  .nav-menu {
    background-color: #3b82f6; /* 对应 bg-blue-500 */
    color: white;
    display: flex;
    justify-content: center;
  }
  
  .nav-menu-item {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .nav-menu-item:hover {
    background-color: #2563eb; /* 对应 hover:bg-blue-600 */
  }
  
  .carousel {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-list-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  
  .product-card {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* 对应 shadow-md */
    transition: box-shadow 300ms ease;
  }
  
  .product-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* 对应 hover:shadow-lg */
  }
  
  .product-title {
    font-size: 1.125rem;
    font-weight: bold;
  }
  
  .product-image {
    width: 100%;
  }
  
  .product-price {
    color: #ef4444; /* 对应 text-red-500 */
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .add-to-cart-button {
    width: 100%;
  }
  </style>