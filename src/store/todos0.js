// store/todos.js
import { reactive, toRefs } from "vue";

const url = 'https://jsonplaceholder.typicode.com/todos';

const state = reactive({
    todos: [],
    loading: true,
    selectedTodo: null
});

function Todos() {
    const fetchTodos = async () => {
        state.loading = true;
        state.todos = await (await fetch(url)).json();
        state.loading = false;
    }


    return {
        ...toRefs(state), // convert to refs when returning
        fetchTodos
    }
}



export default { Todos, state };
