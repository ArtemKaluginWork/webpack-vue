<template>
    <div>
        <img src="../assets/img/logo.svg">
        <p class="text">{{`${msg}  ${count}`}}</p>
        <button class="btn" @click="count = count + 1"> + </button>
        <button class="btn" @click="count = count - 1"> - </button>
    </div>
</template>

<script>
  export default {
    name: 'Hello',
    data() {
      return {
        msg: 'Hello!',
        count: 0
      };
    },
  }
</script>
<style>
    .text {
        color:red;
        font-size: 2rem;
    }
    .btn {
        height: 30px;
        width: 40px;
        background-color: white;
        border-radius: 5px;
        outline: none;
    }
</style>