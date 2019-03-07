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

  .Loading {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
     transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
