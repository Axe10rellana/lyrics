//redux
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

//componentes
import { Error, Loader, SongCard } from "../components";

const TopCharts = () => {
  //redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  //validaciones
  if (isFetching)
    return <Loader title="Cargando la lista de los más destacados..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Descubre La Lista De Los Más Destacados
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
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

export default TopCharts;
