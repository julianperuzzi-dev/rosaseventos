import React from "react";

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      name: "Juan Pérez",
      comment: "¡Excelente servicio, me encantó el evento!",
      timestamp: "Hace 2 días",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // URL de la imagen
    },
    {
      id: 2,
      name: "María López",
      comment: "Muy bien organizado, volveré sin duda.",
      timestamp: "Hace 5 días",
      image: "https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // URL de la imagen
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      comment: "Todo estuvo increíble, aunque el sonido podría mejorar un poco.",
      timestamp: "Hace 1 semana",
      image: "https://images.pexels.com/photos/3379263/pexels-photo-3379263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // URL de la imagen
    },
  ];

  return (
    <div className="min-h-[75vh] py-16">
      <div className="container mx-auto px-6">
        {/* Título de los comentarios */}
        <h2 className="text-4xl font-extralight text-white text-center mb-12">
          Comentarios
        </h2>

        {/* Lista de comentarios */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-zinc-800/90 md:p-8 p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-transparent hover:border-yellow-500 flex items-center"
            >
              {/* Contenedor para texto y estrella */}
              <div className="flex-1 text-white">
                <h3 className="text-2xl font-semibold">{comment.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{comment.timestamp}</p>
                <p className="mt-2 text-lg">{comment.comment}</p>
                <p className="mt-6 text-lg">⭐⭐⭐⭐⭐</p>
              </div>

              {/* Imagen, solo visible en pantallas grandes */}
              <div className="hidden lg:block ml-6">
                <img
                  src={comment.image}
                  alt={`Imagen de ${comment.name}`}
                  className="w-96 h-32 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
