//redux
import { useSelector } from "react-redux";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

//react-router-dom
import { useParams } from "react-router-dom";

//componentes
import { Error, Loader, SongCard } from "../components";

const Search = () => {
  //react-router-dom
  const { searchTerm } = useParams();

  //redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  //variables
  const songs = data?.tracks?.hits?.map((song) => song.track);

  //validaciones
  if (isFetching)
    return <Loader title={`Buscando resultados para ${searchTerm}...`} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Mostrando Los Resultados Para{" "}
        <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
