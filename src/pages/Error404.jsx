//assets
import error404 from "../assets/icons/error404.svg";

const Error404 = () => {
  return (
    <div className="flex flex-col text-center">
      <img className="w-full object-cover" src={error404} alt="Error404" />
      <h2 className="font-bold text-3xl text-white mt-4 mb-4">
        Página No Encontrada
      </h2>
      <p className="text-gray-400 text-base my-1">
        Esta página está perdida en el limbo. Lo sentimos no hemos podido
        encontrar la página que buscas.
      </p>
    </div>
  );
};

export default Error404;
