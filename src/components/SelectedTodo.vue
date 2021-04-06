<template>
  <pre>
    {{ JSON.stringify(selectedTodo, undefined, 4) }}
  </pre>
</template>

<script>
import useTodos from "../store/todos";

export default {
  setup() {
    const { selectedTodo } = useTodos();

    return {
      selectedTodo,
    };
  },
};
</script>
