<template>
  <div class="about-page">
      <el-header height="60px">
          <div class="logo">
              <span>公司名称</span>
          </div>
          <div class="login">
              <el-button @click="loginClick">登录</el-button>
          </div>
      </el-header>
      <el-menu :default-active="activeIndex" class="nav-container" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/products">产品</el-menu-item>
          <el-menu-item index="/store">产品购买</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
      <el-main>
          <div class="news-layout">
              <!-- 公司的基本简介 -->
              <div class="news-section">
                  <h2>公司的基本简介</h2>
                  <p>这里是关于我们公司的详细信息，包括公司的历史、使命、愿景等。</p>
                  <p>我们是一家专注于[业务领域]的公司，拥有多年的行业经验，致力于为客户提供[具体服务]。</p>
              </div>
              <!-- 公司亮点 -->
              <div class="news-section">
                  <h2>公司亮点</h2>
                  <p>我们在行业内拥有领先的技术和创新的解决方案，为客户带来卓越的体验。</p>
                  <p>专业的团队和优质的服务是我们的核心竞争力。</p>
              </div>
              <!-- 发展历程 -->
              <div class="news-section">
                  <h2>发展历程</h2>
                  <ul>
                      <li>2020 年：公司成立，专注于技术研发。</li>
                      <li>2022 年：推出第一款核心产品，获得市场认可。</li>
                      <li>2024 年：拓展业务领域，服务更多客户。</li>
                  </ul>
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
.about-page {
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
.news-layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.news-section {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.news-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.news-section p {
  font-size: 16px;
  line-height: 1.5;
}
.news-section ul {
  list-style-type: disc;
  padding-left: 20px;
}
.news-section li {
  font-size: 16px;
  margin-bottom: 5px;
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