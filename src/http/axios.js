const axios = require('axios').default;

export async function AxiosGet(url="https://api.github.com/users/taixingbi"){
    console.log(url);
    let response= await axios.get(url)
    console.log(response.data);
    return response.data;
}

export async function AxiosPost(){
    let payload = { name: 'John Doe', occupation: 'gardener' };
    let url= 'http://httpbin.org/post';
    console.log(url);
    let res = await axios.post(url, payload);
    let data = res.data;
    console.log(data);
}




export default 
{
    AxiosGet,
    AxiosPost
};