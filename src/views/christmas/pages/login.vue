<template>
  <div class="login-container">
    this is login page
    <div @click="goHome">I want to go homepage</div>
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
  private goHome() {
    this.$router.push({ path: '/christmas/home' })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background: green;
  div {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
