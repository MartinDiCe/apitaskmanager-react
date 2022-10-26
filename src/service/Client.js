import axios from "axios";

export default class Client{
    
    baseURL = "http://localhost:8080/tasks"
    getTasks(){
        //utilizamos axios para responder la data de la api
        return axios.get(this.baseURL).then(res=>{return res.data});
    }

    delTasks(id){
        return axios.delete(`http://localhost:8080/tasks/deleteTask/${id}`);
    }

    postTasks(data){
        return axios.post('http://localhost:8080/tasks',data);
    }

    patchTask(id){
        return axios.patch(`http://localhost:8080/tasks/mark-as-completed/${id}`)
    }
}
