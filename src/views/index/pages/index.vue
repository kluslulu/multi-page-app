<template>
  <div class="index-container">
    this is index page
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'Index',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.index-container {
  overflow: scroll;
  height: 100%;
  position: relative;
  padding-bottom: 1rem;
  font-weight: bold;
  background: tomato;
}
</style>
