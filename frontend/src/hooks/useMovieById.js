import axios from 'axios';
import { useEffect } from 'react'; 
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieById = (movieId) => { 
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                
                // 1. Pehle trailers filter karo
                const trailers = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                });

                // --- YE WALI JAGAH HAI ---
                // 2. Check karo agar trailer mila, nahi toh pehli video uthao
                const trailer = trailers.length > 0 ? trailers[0] : res.data.results[0];

                // 3. Agar trailer (ya koi bhi video) mil gayi hai, tabhi dispatch karo
                if (trailer) {
                    dispatch(getTrailerMovie(trailer));
                }
                // -----------------------

            } catch (error) {
                console.log("Error fetching movie videos:", error);
            }
        };

        if (movieId) {
            getMovieById();
        }

    }, [movieId, dispatch]); 
}

export default useMovieById;