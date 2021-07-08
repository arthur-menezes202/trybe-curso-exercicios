const fetchJoke = () => {
    const myObject = [Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2),Math.pow(Math.floor(Math.random() * 50),2)]
    const soma = myObject.reduce((acc, add) => acc + add)
    
     fetch( myObject)
       .then(response => response > 8000)
       .then(data => h2.innerText = data.joke );
   };
   return soma;
console.log(fetchJoke());