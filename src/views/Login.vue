<template>
    <div id="login">
      <h3 id="login-h3">登陆系统</h3>
      <el-form ref="form" :model="form" label-width="40%">
        <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
            <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const _this = this
      this.$http.post('/userService/login', {
        user: {
          name: _this.name,
          password: _this.password
        }
      }).then(function (response) {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang='css' scoped>
  #login{
      margin-left: 25%;
      margin-right: 25%;
      margin-top: 10%;
      width: 35%;
  }
  #login-h3{
      margin-left: 35%;
  }
</style>
