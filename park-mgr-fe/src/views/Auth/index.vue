<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="../image/park_icon.png"/>
      <h2 class="title">停车位管理系统 后台</h2>
    </div>
    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input
              placeholder="账户"
              v-model:value="loginForm.account"
            >
              <template #prefix><UserOutlined /></template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              placeholder="密码"
              v-model:value="loginForm.password"
            >
              <template #prefix><LockOutlined /></template>
            </a-input>
          </div>

          <div class="item">
            <a href="">忘记密码</a>
          </div>

          <div class="item">
            <a-button @click="login" type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              placeholder="账户"
              v-model:value="regForm.account"
            >
              <template #prefix><UserOutlined /></template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              placeholder="密码"
              v-model:value="regForm.password"
            >
              <template #prefix><LockOutlined /></template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              v-model:value="regForm.inviteCode"
              placeholder="邀请码"
            >
              <template #prefix><MailOutlined /></template>
            </a-input>
          </div>

          <div class="item">
            <a-button @click="register" type="primary">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
