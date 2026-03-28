import axios from 'axios';
import { useEffect } from 'react'; // 1. useEffect import karo
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieById = (movieId) => { // 2. Yahan se 'async' hata do
    const dispatch = useDispatch();

    useEffect(() => {
        // 3. Ek internal async function banao
        const getMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                
                const trailers = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                });

                dispatch(getTrailerMovie(trailers.length > 0 ? trailers[0] : res.data.results[0]));
            } catch (error) {
                console.log(error);
            }
        };

        if (movieId) {
            getMovieById();
        }

    }, [movieId, dispatch]); // 4. Dependency array zaroori hai loop rokne ke liye
}

export default useMovieById;