<template>
  <div id="side-left" class="layout">
    <div id="icon">
      xdiary
    </div>
    <div class="tab">
      a
    </div>
    <div class="tab">
      b
    </div>
    <div class="tab">
      c
    </div>
    <div id="statistic">
      statistic
    </div>
    <div id="calendar">
      calendar
    </div>
  </div>
</template>

<script>
export default {
    name: "Menu",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.tab{
  height :50px;
  width :auto;
  background-color: aqua;
  border: 1px solid white;
  text-align: center;
}
#side-left{
  background-color: black;
  height: 100%;
  width: 200px;
}
#calendar{
  margin-top: 10px;
  background-color: wheat;
  height: 200px;
}
#statistic{
  margin-top: 10px;
  background-color: white;
  height: 200px;
}
#icon{
  height: 70px;
}
</style>