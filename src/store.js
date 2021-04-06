import { reactive } from 'vue'

const store = reactive({
  cart:{
    items: [ {title: "Ice Cream"} ],
    add(item){
      store.cart.items.push(item)
    }
  },

})
export default {store}
