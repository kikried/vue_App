<template>
    <div class="login-container">
      <div class="login-box">
        <h1 class="login-title">用户登录</h1>
        <el-form :model="loginForm" :rules="rules" ref="formRef" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
  
  // 登录表单数据
  const loginForm = ref({
    username: '',
    password: ''
  });
  
  // 表单引用
  const formRef = ref(null);
  
  // 表单验证规则
  const rules = ref({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符之间', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能少于 6 个字符', trigger: 'blur' }
    ]
  });
  
  // 登录处理函数
  const handleLogin = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        // 模拟登录请求，实际开发中可替换为真实的 API 请求
        // console.log('登录信息:', loginForm.value);
        ElMessage.success('登录成功');
      } else {
        ElMessage.error('登录失败');
      }
    });
  };
  

  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  
  .login-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 360px;
  }
  
  .login-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .el-button {
    margin-right: 10px;
  }
  </style>