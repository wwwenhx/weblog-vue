<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header v-if="$router.name !== 'Login'">Header</el-header>
        <el-main><router-view/></el-main>
        <el-footer v-if="$router.name !== 'Login'">Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
