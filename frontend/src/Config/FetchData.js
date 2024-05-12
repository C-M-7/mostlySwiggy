import { useSelector } from 'react-redux'

async function FetchData() {
    const {lat, long} = useSelector(state => state.UserLocation);
    if(!lat || !long){
        console.log('Location needs to be configured!')
        return;
    }
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    const main_url = "https://thingproxy.freeboard.io/fetch/"+url;
    try{
        const response = await fetch(main_url);
        console.log('FD ' + response);
        return response;
    }
    catch(err){
        console.error(err.message);
    }    
}

export default FetchData;