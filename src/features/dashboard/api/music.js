import axios from "axios";

const api = axios.create({
  baseURL: "https://itunes.apple.com",
});

export const searchSongs = async (query = "arijit singh", limit = 20) => {
  const { data } = await api.get("/search", {
    params: {
      term: query,
      media: "music",
      entity: "song",
      limit,
    },
  });

  return data.results.map((song) => ({
    id: song.trackId,
    title: song.trackName,
    artist: song.artistName,
    album: song.collectionName,
    image: song.artworkUrl100.replace("100x100", "300x300"),
    preview: song.previewUrl,
  }));
};