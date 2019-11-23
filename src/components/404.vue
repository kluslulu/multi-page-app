<template>
  <div class="404-container">
    not found
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
</style>
