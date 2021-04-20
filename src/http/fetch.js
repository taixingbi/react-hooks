

export async function fetchGet(){
  let url= 'https://randomuser.me/api/?results=3';
  fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
    }
  );
}

export async function fetchPost(){
  let url= 'http://httpbin.org/post';
  console.log(url);

  let payload = { name: 'John Doe', occupation: 'gardener' };
  fetch(url, {
    method: 'POST',
    body: payload,
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



export default 
{
    fetchGet,
    fetchPost,

};