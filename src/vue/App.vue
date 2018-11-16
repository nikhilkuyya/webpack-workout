<template >
    <div :id='rootId'>{{framework}}</div>
</template>

<script>
export default {
  data() {
    return {
      rootId: "app",
      framework: "Vue"
    }
  }
}
</script>