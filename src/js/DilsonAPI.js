const base_url = "http://localhost:3000/";
import axios from "axios";
class DilsonAPI {

    async adicionarTodo(todoItem) {
        await axios.post(base_url, todoItem)
        .then(() => {
            console.log("Adicionado");
        })
        .catch((ex) => {
            console.error("[DilsonAPI][adicionarTodo]: " + ex.message);
        });
    }
    async obterTodos() {
        return axios.get(base_url)
    }
}

export default new DilsonAPI();