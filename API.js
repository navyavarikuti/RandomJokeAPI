const loadJoke = async ()=>{
    try{
        const fetchJoke = await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{
                Accept : 'application/json'
            }
        });
         const jokeData = await fetchJoke.json()
         document.getElementById('loadingJoke').innerHTML=jokeData.value;
       
    }
    catch(error){
        console.log(error)
    }
   
}
document.getElementById('loadJokeBtn').addEventListener("click",loadJoke)