async function fetchData(location) {
    const { latitude, longitude } = location;
    // const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    const url = `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from Swiggy API');
        }

        const responseData = await response.json();
        console.log('Response Data:', responseData);
        
        return responseData; // Returning the parsed JSON data
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Rethrow the error to propagate it back to the caller
    }
}

export default fetchData;