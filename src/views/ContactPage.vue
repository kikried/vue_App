<template>
    <div class="contact-page">
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
        <div class="contact-content">
          <h1>联系我们</h1>
          <p>如果您有任何问题或需要帮助，请随时联系我们。</p>
          <el-form :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="信息">
              <el-input type="textarea" v-model="form.message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
          </el-form>
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
  import axios from 'axios';
  import { ElHeader, ElMain, ElFooter, ElMenu, ElMenuItem, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  
  
  const activeIndex = ref(window.location.pathname);
  
  
  const handleSelect = (index) => {
    activeIndex.value = index;
    router.push(index);
  };
  
  
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  /**
  const submitForm = () => {
    axios.post('/api/contact', form.value)
    .then(response => {
        console.log(response.data);
        alert('信息已成功提交！');
      })
    .catch(error => {
        console.error(error);
        alert('提交信息时出现错误，请稍后再试。');
      });
  };
  **/
  </script>
  
  
  <style scoped>
  .contact-page {
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
  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    text-align: center;
  }
  .contact-content h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .contact-content.el-form {
    width: 300px;
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