<template>
  <div id="app">
    <div class="home-container">
      <div class="home-top">
        <div class="home-top-left"></div>
        <div class="home-top-middle">
          <menus v-for="(section,key) in menus" :key="key" :label="key">
              <menu-item v-for="(menu,index) in section" :key="index" :icon="menu.icon" :is-active="true" :to="{ path: menu.path, query: {}}">
                <span>{{menu.title}}</span>
              </menu-item>
            </menus>
        </div>
        <div class="home-top-right"></div>
      </div>
      <div class="home-center">
        <router-vie>
        <div class="home-center-top"></div>
        <div class="home-center-middle"></div>
        <div class="home-center-foot"></div>
        </router-vie>
      </div>
      <div class="home-foot">
        <div class="home-foot-top">
          <div class="home-foot-top-left"></div>
          <div class="home-foot-top-right"></div>
        </div>
        <div class="home-foot-bottom">
          <div class="home-foot-bottom-left"></div>
          <div class="home-foot-bottom-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.home-top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
