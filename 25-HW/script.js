const postId = document.getElementById('postId');
const sendPostId = document.getElementById('sendPostId');
let trueCount=0;
let falseCount=0
sendPostId.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId.value}`)
        .then (response =>{
            if (response.ok) {
                trueCount++;
                return response.json();
            }
            else{
                falseCount++;
                throw new Error(response.status)
            }
        })
        .then(data => {
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`ID: ${data.id}, title: ${data.title}, body: ${data.body}`));
            document.body.appendChild(h2);
        })
        .catch(e => {

            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`O-o-ops ${e.message}`));
            document.body.appendChild(h2);
        })
    const stats= document.createElement('p');
    stats.textContent=`True count: ${trueCount}, False count: ${falseCount}`;
    document.body.appendChild(stats);

}