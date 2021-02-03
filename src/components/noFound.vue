<template>
  <div class="no_found">
    <div class="image"></div>
    <div class="text">您访问的页面出错了...</div>
    <div class="button">
      <button @click="$router.go(-1)">返回上一页</button>
      <button @click="$router.push('/')">返回首页</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .no_found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    font-size: 16px;
    .image {
      width: 100%;
      padding-bottom: 78.8%;
      background: url('../assets/image/img/404.jpg') no-repeat center center;
      background-size: 100%;
    }
    .text {
      margin-bottom: 40px;
    }
    .button {
      button {
        margin-bottom: 20px;
        padding: 8px 10px;
        background-color: transparent;
        outline: none;
        border: solid 1px #666666;
        border-radius: 5px;
        &:active {
          background-color: rgb(239, 239, 239);
        }
        &:first-child {
          margin-right: 10px;
        }
        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
</style>