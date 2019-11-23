<template>
  <div id="nav">
    <router-view />
    <div class="logo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'App',
  components: {
  }
})
export default class extends Vue {
  private created() {
    if (+new Date() % 2 === 0) {
      this.$router.push({ path: '/christmas/home' })
    } else {
      this.$router.push({ path: '/christmas/login' })
    }
  }
}
</script>

<style lang="scss">
  #nav>a {
    display: inline;
    padding: 5px 10px;
  }
</style>
