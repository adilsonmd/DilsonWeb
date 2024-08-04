<template>
    <div>
        <h1>App Assistente</h1>

        <table class="table" v-if="listOfTodos">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <template v-for="(todo, index) in listOfTodos" :key="index">
                    <tr>
                        <td>{{ todo.title }}</td>
                        <td>{{ new Date(todo.create_date).toLocaleString() }}</td>
                    </tr>
                </template>
            </tbody>
        </table>

        <button class="btn btn-primary" @click="AdicionarTodo()">Teste</button>
    </div>


</template>

<script>
import { ref, reactive, toRefs, onMounted } from "vue";
import api from "../js/DilsonAPI";

export default {
    setup() {
        const listOfTodos = ref([]);
        const ObterTodos = async () => {
            api.obterTodos()
            .then((resp) => {
                console.log("Obtendo lista", resp.data);
                listOfTodos.value = resp.data;
            })
            .catch((ex) => {
                console.error("[DilsonAPI][obterTodos]: " + ex.message)
            })

        };
        const AdicionarTodo = async () => {
            await api.adicionarTodo({
                title: "O que é um primal?",
                create_date: "2024-08-04T18:02:00"
            });
        };

        onMounted(() => {
            console.log("OI");
            ObterTodos();
        })

        return {
            listOfTodos,
            AdicionarTodo
        }
    }
}
</script>