<template>
<div>

</div>
</template>

<script>
import { onMounted } from "vue";
import useTodos from "@/store/todos0";


export default {
  name: "App",
  setup() {
    const { state } = useTodos();

    onMounted(() => {
      fetchTodos();
    });

    return {
      state
    };
  },
};
</script>
