const API_KEY = "68faa3362877b29f19e98f1c9298efd6"

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}`

}

export default requests