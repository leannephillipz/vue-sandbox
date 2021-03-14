<template>
  <div>{{ global.state.count }}
  <button @click="global.increment">Increment</button>
</template>
<script>
export default {
  inject: ["global"]
}
</script>
