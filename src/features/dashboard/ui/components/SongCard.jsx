import { useDispatch, useSelector } from "react-redux";
import { playnewsong, play, pause } from "../../../player/state/PlayerSlice"; // adjust path to your file

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const { currentplayingsong, isplaying } = useSelector((state) => state.player);

  const isCurrent = currentplayingsong?.id === song.id; // is THIS card the loaded song?
  const isThisPlaying = isCurrent && isplaying;         // and is it actually playing?

  const handleClick = () => {
    if (!isCurrent) {
      dispatch(playnewsong(song));            // different song -> load and play
    } else {
      dispatch(isplaying ? pause() : play()); // same song -> toggle
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-neutral-900 hover:bg-neutral-800 transition p-4 rounded-lg cursor-pointer group"
    >
      <div className="relative">
        <img src={song.image} alt={song.title} className="w-full aspect-square object-cover rounded-md shadow-lg" />
        <button
          className={`absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center shadow-lg transition
          ${isThisPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          {isThisPlaying ? "❚❚" : "▶"}
        </button>
      </div>

      <h3 className="text-white font-semibold mt-3 truncate">{song.title}</h3>
      <p className="text-neutral-400 text-sm truncate">{song.artist}</p>
    </div>
  );
};

export default SongCard;