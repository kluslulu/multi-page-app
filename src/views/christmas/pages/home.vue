<template>
  <div class="home-container">
    this is home page
    <div @click="goLogin">I want to go loginpage</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'Home',
  components: {
  }
})
export default class extends Vue {
  private goLogin() {
    this.$router.push({ path: '/christmas/login' })
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  overflow: scroll;
  height: 100%;
  position: relative;
  padding-bottom: 1rem;
  font-weight: bold;
  background: tomato;
  div {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
