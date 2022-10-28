import axios from "axios";

export default class Client{
    
    baseURL = "http://localhost:8080/tasks"

    async getTasks(setLoading,setError,setTareas){
        
        setLoading(true);
        
        try {

            let res = await axios.get(this.baseURL);
            setTareas(res.data);

        } catch (error) {

            console.log(error.request)
            setError(error.request);

        }

        setLoading(false);
    }

    async delTasks(id,setError){

        try {

           let res = await axios.delete(`${this.baseURL}/deleteTask/${id}`);

        } catch (error) {

            setError(error.request)

        }

    }

    async postTasks(data,dataArray,setData,setError){

        try {

            let res = await axios.post(this.baseURL,data);
            
            let nuevaTarea = [...dataArray,res.data];
            setData(nuevaTarea);

        } catch (error) {

            setError(error.request);
        }

    }

    async patchTask(id,setError){
        try {

            let res = await axios.patch(`${this.baseURL}/mark-as-completed/${id}`)

        } catch (error) {

            setError(error.request);

        }
    }
}
