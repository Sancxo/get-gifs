/* API routes to fetch different stuff */
const key = "7CnQwmmmyzdPxKtpT93N9IIm4Q17rBLs";

const routes =  {
    getTop20: `https://api.giphy.com/v1/gifs/trending?api_key=${key}`,
    getSearch: (query, number) => { return `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}` },
    getRandom: `https://api.giphy.com/v1/gifs/random?api_key=${key}`,
    upload: "upload.giphy.com/v1/gifs"
}

export default routes;