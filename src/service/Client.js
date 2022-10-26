import axios from "axios";

export default class Client{
    
    baseURL = "http://localhost:8080/tasks"
    getTasks(){
        //utilizamos axios para responder la data de la api
        return axios.get(this.baseURL).then(res=>{return res.data});
    }
}
