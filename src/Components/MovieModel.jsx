import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { options } from "../utils/Constant";

const MovieModal = ({ movie, onClose }) => {
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
        if (!movie) return;

        const fetchTrailer = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
                    options
                );
                const json = await res.json();
               const trailer = json.results.find((v) => v.type === "Clip"|| json.results.find((v) => v.type === "Trailer") 
                         );

                console.log("trailer:", trailer);
                if (trailer) setTrailerKey(trailer.key);
            } catch (err) {
                console.error("Error fetching trailer:", err);
            }
        };
        fetchTrailer();
    }, [movie]);

    if (!movie) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-[90%] h-[80%] bg-black rounded-lg overflow-hidden">
                <button
                    onClick={() => {
                        console.log("close clicked");
                        onClose();
                    }}
                    className="absolute top-3 right-3 text-white z-10"
                >
                    <X size={30} />
                </button>
                {trailerKey ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen"
                    ></iframe>
                ) : (
                    <div className="flex items-center justify-center h-full text-white">
                        No Trailer Available 😔
                    </div>
                )}
            </div>
        </div >
    );
};

export default MovieModal;
