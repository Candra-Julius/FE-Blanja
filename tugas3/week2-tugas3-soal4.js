fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => data.map(({name})=>{console.log(name)}))