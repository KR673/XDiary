<template>
  <div class="home">
    <!-- <Menu /> -->
    <div>aaa</div>
    <!-- <ManuRight></ManuRight> -->
    <div style="">
      <TextArea />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Menu from "@/components/Menu.vue";
import TextArea from "@/components/TextArea.vue";
import ManuRight from "@/components/MenuRight.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Menu,
    ManuRight,
    TextArea
  },
};
</script>

<style>
.el-aside {
  color: #333333;
  background-color: #333333;
}
</style>