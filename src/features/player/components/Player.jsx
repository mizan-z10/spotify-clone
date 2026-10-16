import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { play, pause } from "../state/PlayerSlice";

const formatTime = (sec = 0) => {
  if (!sec || isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = String(Math.floor(sec % 60)).padStart(2, "0");
  return `${m}:${s}`;
};

// Reusable slider: bhara hua hissa dikhata hai
const Slider = ({ value, max, onChange, disabled, className = "", label }) => {
  const pct = max ? (value / max) * 100 : 0;
  return (
    <input
      type="range"
      min="0"
      max={max}
      step="0.1"
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-label={label}
      className={`range ${className}`}
      style={{
        background: `linear-gradient(to right, #fff ${pct}%, #4d4d4d ${pct}%)`,
      }}
    />
  );
};

const Icon = ({ d, className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path d={d} />
  </svg>
);

const Player = () => {
  const dispatch = useDispatch();
  const { currentplayingsong: song, isplaying } = useSelector((s) => s.player);

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    const audio = audioRef.current;
    if (!song || !audio) return;
    audio.src = song.preview;
    setCurrentTime(0);
    audio.play().catch(() => {});
  }, [song?.id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!song || !audio) return;
    if (isplaying) audio.play().catch(() => {});
    else audio.pause();
  }, [isplaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const iconBtn = "text-gray-400 hover:text-white transition";

  return (
    <div className="fixed bottom-0 left-0 w-full h-[90px] bg-black text-white px-4 flex items-center justify-between gap-4 z-50 border-t border-[#282828]">
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={() => dispatch(pause())}
      />

      {/* Left: Song details */}
      <div className="flex items-center gap-3 w-[30%] min-w-0">
        {song ? (
          <img src={song.image} alt={song.title} className="w-14 h-14 rounded object-cover" />
        ) : (
          <div className="w-14 h-14 rounded bg-neutral-800" />
        )}
        <div className="min-w-0">
          <h4 className="text-sm font-semibold truncate">
            {song ? song.title : "Koi song select nahi"}
          </h4>
          <p className="text-xs text-gray-400 truncate">{song ? song.artist : ""}</p>
        </div>
        <button className="text-gray-400 hover:text-[#1ed760] ml-2" aria-label="Like song">
          <Icon d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.51z" />
        </button>
      </div>

      {/* Center: Controls + timeline */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[600px]">
        <div className="flex items-center gap-5">
          <button className={iconBtn} aria-label="Shuffle">
            <Icon d="M17 3h4v4h-2V6.41l-4.29 4.3-1.42-1.42L17.59 5H17zM3 7h3c3.5 0 5 3 7 6s3.5 4 5 4h1v-2h2v4h-4v-2h1c-2.5 0-4.5-2-6.5-5S6.5 9 6 9H3zm0 10h3c1 0 2-.7 3-2l1.3 1.5C9.9 18 8 19 6 19H3z" />
          </button>
          <button className={iconBtn} aria-label="Previous">
            <Icon d="M6 5h2v14H6zm13 0v14L8 12z" />
          </button>

          <button
            disabled={!song}
            onClick={() => dispatch(isplaying ? pause() : play())}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition disabled:opacity-50"
            aria-label={isplaying ? "Pause" : "Play"}
          >
            {isplaying ? (
              <Icon d="M6 4h4v16H6zm8 0h4v16h-4z" />
            ) : (
              <Icon d="M7 4v16l13-8z" />
            )}
          </button>

          <button className={iconBtn} aria-label="Next">
            <Icon d="M16 5h2v14h-2zM5 5v14l11-7z" />
          </button>
          <button className={iconBtn} aria-label="Repeat">
            <Icon d="M7 7h11l-2-2 1.4-1.4L22 8l-4.6 4.4L16 11l2-2H7a2 2 0 0 0-2 2v2H3v-2a4 4 0 0 1 4-4zm10 10H6l2 2-1.4 1.4L2 16l4.6-4.4L8 13l-2 2h11a2 2 0 0 0 2-2v-2h2v2a4 4 0 0 1-4 4z" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-[11px] text-gray-400 w-8 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={currentTime}
            max={duration || 30}
            onChange={handleSeek}
            disabled={!song}
            className="w-full"
            label="Song progress"
          />
          <span className="text-[11px] text-gray-400 w-8">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Volume */}
      <div className="hidden md:flex items-center justify-end gap-3 w-[30%]">
        <button className={iconBtn} aria-label="Lyrics">
          <Icon d="M4 4h16v2H4zm0 5h16v2H4zm0 5h10v2H4zm0 5h7v2H4z" />
        </button>
        <button className={iconBtn} aria-label="Queue">
          <Icon d="M3 5h12v2H3zm0 5h12v2H3zm0 5h8v2H3zm14-1 5 4-5 4z" />
        </button>
        <Icon
          className="w-5 h-5 text-gray-400"
          d="M3 9v6h4l5 4V5L7 9zm13-1v8a4 4 0 0 0 0-8zm0-4v2a8 8 0 0 1 0 12v2a10 10 0 0 0 0-16z"
        />
        <Slider
          value={volume}
          max={100}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24"
          label="Volume"
        />
      </div>
    </div>
  );
};

export default Player;