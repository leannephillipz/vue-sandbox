<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>Number of items in Cart: {{$store.cart.items.length}} items(s)</h3>
    <ul>
    <li v-for="(item, i) in $store.cart.items" :key="i">
      <span>Selected: {{item.title}}</span>
    </li>
      <li v-for="(select, i) in selections" :key="i">
        <span>{{select.title}}</span> <button @click="$store.cart.add(select)"> Add to Cart</button>
      </li>
  </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      selections: [
        {title: "bread"},
        {title: "Toilet Paper"},
        {title: "Crisps"}
      ]
    }
  }
}
</script>
