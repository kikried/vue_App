<template>
    <div id="app">
      <HeaderMenu />
      <router-view></router-view>
      <Footer/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  <style  scoped>
  /* 隐藏滚动条 */
.hide-scrollbar::-webkit-scrollbar {
    display: none; /* 隐藏 WebKit 内核浏览器的滚动条 */
  }
.hide-scrollbar {
    -ms-overflow-style: none;  /* 隐藏 IE 和 Edge 的滚动条 */
    scrollbar-width: none;  /* 隐藏 Firefox 的滚动条 */
  }

</style>