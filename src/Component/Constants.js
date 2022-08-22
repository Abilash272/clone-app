require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY;

export const TRENDING = "https://api.themoviedb.org/3/trending/movie/day?api_key="+API_KEY;
export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key="+API_KEY+"&language=en-US&page=1";
export const UP_COMING = "https://api.themoviedb.org/3/movie/upcoming?api_key="+API_KEY+"&language=en-US&page=1";
export const POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key="+API_KEY+"&language=en-US&page=1";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const SMALL_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const VIDEO_LIST_1 = "https://api.themoviedb.org/3/movie/";
export const VIDEO_LIST_2 = "/videos?api_key="+API_KEY+"&language=en-US";
export const ANIMATION = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&page=1&include_adult=false&include_video=false&with_genres=16";
export const FAMILY = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&page=1&include_adult=false&include_video=false&with_genres=10751";
export const SCIFI = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&page=1&include_adult=false&include_video=false&with_genres=878";
export const MUSIC = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&page=1&include_adult=false&include_video=false&with_genres=10402";
export const HISTROY = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&page=1&include_adult=false&include_video=false&with_genres=36";