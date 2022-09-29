//react
import { useState, useEffect } from "react";

//axios
import axios from "axios";

//redux
import { useSelector } from "react-redux";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

//componentes
import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
  //variables de estado
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  //redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [country]);

  //validaciones
  if (isFetching && loading)
    return (
      <Loader title="Cargando la lista de canciones más escuchadas a tu alrededor..." />
    );
  if (error && country !== "") return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Descubre La Lista De Los Más Escuchados En:{" "}
        <span className="font-black">{country}</span>
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

export default AroundYou;
