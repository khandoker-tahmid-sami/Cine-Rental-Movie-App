import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { toast, Slide } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    console.log(movie);

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success(`Movie ${movie.title} added successfully`, {
        position: "bottom-right",
        transition: Slide,
      });
      // setCartData([...cartData, movie]);
    } else {
      toast.error(`Movie ${movie.title} has been added to the cart already`, {
        position: "bottom-right",
        transition: Slide,
      });
      // alert(`The movie ${movie.title} has been added to the cart already`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1 text-black dark:text-white ">
              {movie.title}
            </h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-3 px-28 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
