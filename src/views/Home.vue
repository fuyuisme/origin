<template>
  <el-container class="home">
    <!-- 左侧 -->
  <el-header>
    <div class="logo-box">
    <img width ="50" src="../assets/logo.png" alt="">
    <span>电商管理系统</span>
    </div>
    <!-- 右侧 -->
    <el-button @click="logout">退出</el-button>
  </el-header>
  <el-container>
    <el-aside width="200px">
      Aside

    </el-aside>
    <el-main>
      Main

    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  methods:{
    logout() {
      sessionStorage.removeItem('token')
      this.$router.push('login')
    }
  }
}
</script>
<style>
.home .el-header {
  background-color: #373d41;
  /* flex布局*/
  display: flex;
  /* 一左一右 */
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
  /* 内容无法选择 */
  user-select: none;
  font-size:25px;
  color:#eaedf1;
}
.home .el-header img {
  /* 图片文字垂直居中对齐 */
  vertical-align: middle;
}
.el-container {
  height: 100%;
}
.home .el-aside {
  background-color:#333743;
  height:100%;
}
.home .el-main {
  background-color: #eaedf1;
}
</style>
