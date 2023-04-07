import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer UMDXVTo0SNtTh59K-2LzNLGCh5oi2t4NNiD9yxkBdkt0vCBQUMCvAADIx14H_tKwJZrFmG6ow_H32ego5l_4GPCUfmhkC8wDyxGEAkBMOYv4e-nBrwKPuRQsu04kZHYx`,
  },
});
