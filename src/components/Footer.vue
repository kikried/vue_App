<template>
    <!-- 自定义 el-footer 组件 -->
    <el-footer :height="height" class="custom-el-footer">
      <div class="footer-content">
        <!-- 显示版权信息 -->
        <span>{{ copyrightText }}</span>
      </div>
    </el-footer>
  </template>
  
  <script setup>
  import { ElFooter } from 'element-plus';
  // 定义组件接收的属性
  defineProps({
    // 高度属性，默认值为 '60px'
    height: {
      type: String,
      default: '60px'
    },
    // 版权信息文本属性，默认值为 '版权所有 © 2025 公司名称预留位置'
    copyrightText: {
      type: String,
      default: '版权所有 © 2025 公司名称预留位置'
    }
  });
  </script>
  
  <style scoped>
  /* 自定义 el-footer 的样式 */
  .custom-el-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;
    color: white;
  }
  </style>