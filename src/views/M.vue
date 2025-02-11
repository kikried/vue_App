<template>
    <div class="mall-home">
      <!-- 导航栏 -->
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="nav-menu">
        <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path" class="nav-menu-item">
          {{ menu.title }}
        </el-menu-item>
      </el-menu>
  
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 导航栏数据
  const menuList = ref([
    { path: '/', title: '首页' },
    { path: '/category1', title: '商品分类 1' },
    { path: '/category2', title: '商品分类 2' },
    { path: '/cart', title: '购物车' }
  ]);
  
  // 默认激活的导航栏项
  const activeIndex = ref('/');
  
  // 处理导航栏选择事件
  const handleSelect = (index) => {
    activeIndex.value = index;
    // 这里可以添加路由跳转逻辑
    console.log(`选中的导航栏项: ${index}`);
  };
  
  // 轮播图数据
  const carouselImages = ref([
    'https://example.com/slide1.jpg',
    'https://example.com/slide2.jpg',
    'https://example.com/slide3.jpg'
  ]);
  
  // 商品数据
  const products = ref([
    {
      id: 1,
      name: '商品 1',
      image: 'https://example.com/product1.jpg',
      price: 99
    },
    {
      id: 2,
      name: '商品 2',
      image: 'https://example.com/product2.jpg',
      price: 199
    },
    {
      id: 3,
      name: '商品 3',
      image: 'https://example.com/product3.jpg',
      price: 299
    },
    {
      id: 4,
      name: '商品 4',
      image: 'https://example.com/product4.jpg',
      price: 399
    }
  ]);
  
  // 加入购物车方法
  const addToCart = (product) => {
    console.log(`已将 ${product.name} 加入购物车`);
    // 这里可以添加实际的加入购物车逻辑
  };
  </script>
  
  <style scoped>
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