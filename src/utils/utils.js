import axios from "axios"

const base_url = "http://api.themoviedb.org/3"

const headers = {
    Authorization: "Bearer " + import.meta.env.VITE_APP_TOKEN
}

export const fetchData = async (url, params) => {
        try{
            const {data} = await axios.get(base_url + url, {
                headers,
                params
            })
            // const {data} = await axios.get(base_url + url + "?api_key=" + import.meta.env.VITE_APP_API_KEY, {
            //     params
            // })
            return data
        }catch(e){
            console.log(e);
            return e;
        }
};