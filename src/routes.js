/* API routes to fetch different stuff */

const routes =  {
    getTop20: "https://api.giphy.com/v1/gifs/trending?api_key=7CnQwmmmyzdPxKtpT93N9IIm4Q17rBLs&limit=20&rating=g",
    getSearch: (query) => { return `https://api.giphy.com/v1/gifs/search?api_key=7CnQwmmmyzdPxKtpT93N9IIm4Q17rBLs&q=${query}&limit=25&offset=0&rating=g` },
    getRandom: "https://api.giphy.com/v1/gifs/random?api_key=7CnQwmmmyzdPxKtpT93N9IIm4Q17rBLs&rating=g"
}

export default routes;