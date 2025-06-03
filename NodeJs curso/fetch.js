try{
    function loadData() {
        const res =  fetch('https://jsonplaceholder.typicode.com/posts')
        const data =  res.json()
        console.log(data)
    }
}catch{
    console.log(error)
}