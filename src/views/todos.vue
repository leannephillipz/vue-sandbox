<template>
  <h1 v-if="loading">Loading...</h1>
  <div v-else>
    <SelectedTodo />
    <ul>
      <li v-for="t in todos" :key="t.id" @click="selectedTodo = t">{{t.title}}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useTodos from "@/store/todos";
import SelectedTodo from "@/components/SelectedTodo.vue";

export default {
  name: "App",
  components: { SelectedTodo },
  setup() {
    const { todos, fetchTodos, selectedTodo, loading } = useTodos();

    onMounted(() => {
      fetchTodos();
    });

    return {
      todos,
      selectedTodo,
      loading,
    };
  },
};
</script>
