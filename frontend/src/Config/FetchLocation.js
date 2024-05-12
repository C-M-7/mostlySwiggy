const FetchLocation = ()=>{
    if(navigator.geolocation){
        try{
          navigator.geolocation.getCurrentPosition(
            position =>{
                const { latitude, longitude } = position.coords;
                console.log({ latitude, longitude });
                return {latitude, longitude};
            }
          )
        }
        catch(err){
          console.error(err.message);
        }
      } 
}
export default FetchLocation;