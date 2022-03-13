export const getGifs = async(category)=>{

    const apiKey = 'nUNgLP4RYxtAgr3tAnCPCKAUmX1gM6dy';
    const url = 'http://api.giphy.com/v1/gifs/search'
    const resp   = await fetch(`${url}?q=${encodeURI(category)}&limit=10&api_key=${ apiKey }`);
    const { data } = await resp.json(); 
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}