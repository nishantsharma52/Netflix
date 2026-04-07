import axios from "axios";
import { getNowPlayingMovie } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react"; // 1. useEffect import karna zaroori hai

const useNowPlayingMovies = () => { // 2. Yahan se 'async' hata do
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const res = await axios.get(Now_Playing_Movie, options);
            // Redux store mein movies save karo
            dispatch(getNowPlayingMovie(res.data.results));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // 3. API call ko useEffect ke andar rakho
        getNowPlayingMovies();
    }, []); // 4. Ye [] array sabse zaroori hai, taaki loop na bane
}

export default useNowPlayingMovies;