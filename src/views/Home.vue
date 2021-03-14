<template>
  <div class="home">
    <p>Homepage</p>
    <div>Test: {{ filters.uppercase(name) }}</div>
    <test msg="message goes here"/>
    <editinput value="xxx"/>
  </div>
  <div v-on:click="$globalHelper">Click me (global helper)</div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src
import test from '@/components/test.vue'
import editinput from '@/components/clickeditinput.vue'
import filters from "@/filters"

export default {
  name: 'Home',
  components: {
    test,
    editinput
  },
  setup() {
    let name = ref("Leanne");
    let price = ref(123);
    return {
     name,
     filters,
     price
   }
 }
}
</script>
