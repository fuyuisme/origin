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
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <el-menu
      :router="true"
      background-color="#373d41"
      text-color="#fff"
      active-text-color="#399bfb">
      <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
          <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item1.path">
          <i class="el-icon-location"></i>
          <span>{{item1.authName}}</span>
          </el-menu-item>
      </el-submenu>
    </el-menu>

    </el-aside>
    <el-main>
      <!-- 子组件容器 -->
      <router-view>
      </router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: []
    }
  },
  async created () {
    // 获取左侧数据
    const menus = await this.axios.get('/menus')
    console.log(menus)
    if (menus.data.meta.status !== 200) return this.$message.error('获取菜单列表失败')
    this.menuList = menus.data.data
  },
  methods: {
    logout () {
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
