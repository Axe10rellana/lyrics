//react-router-dom
import { useParams } from "react-router-dom";

//redux
import { useSelector } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

//componentes
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const ArtistDetails = () => {
  //react-router-dom
  const { id: artistId } = useParams();

  //redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  //validaciones
  if (isFetchingArtistDetails)
    return <Loader title="Cargando detalles del artista..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
