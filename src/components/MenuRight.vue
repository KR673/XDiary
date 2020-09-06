<template>
  <div id="side-right" class="layout">
    <div class="tab">
      click
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
  </div>
</template>

<script>
export default {
    name: "MenuRight",
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
  width :auto;
  background-color: aqua;
  border: 1px solid white;
  text-align: center;
}
#side-right{
  background-color: black;
  height: 100%;
  width: 180px;
}
</style>