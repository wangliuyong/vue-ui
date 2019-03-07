<template>
  <svg :class="icon" v-if="icon" class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
    export default {
        name: "Icon",
        props:['icon']
    }
</script>

<style scoped lang="scss">


</style>
