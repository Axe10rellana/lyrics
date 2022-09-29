//redux
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

//componentes
import { ArtistCard, Loader, Error } from "../components";

const TopArtists = () => {
  //redux
  const { data, isFetching, error } = useGetTopChartsQuery();

  //validaciones
  if (isFetching)
    return <Loader title="Cargando la lista de los mejores artistas..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Descubre La Lista De Los Mejores Artistas
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
