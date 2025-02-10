import React from "react";

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      name: "Matías Fernández Quiroga",
      comment: "¡Una experiencia única che! La organización fue impecable, el ambiente increíble y la atención personalizada me dejó sin palabras. El DJ la rompió toda la noche, la verdad que superó todas mis expectativas. ¡Los felicito por semejante evento!",
      timestamp: "Hace 2 meses",
      location: "Santa Lucia, San Juan",
      image: "https://i.pinimg.com/736x/bd/bb/a9/bdbba923f80a65ceb3778751b4a78a76.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Valentina Bianchi Pescarmona",
      comment: "Me quedé maravillada con todo el evento. La decoración era digna de revista, la música perfectamente seleccionada y ni hablar de la comida ¡alta cocina! Se nota que hay un equipo muy profesional detrás. Ya reservé para el próximo evento, ¡no me lo pierdo por nada!",
      timestamp: "Hace 15 días",
      location: "Rivadavia, San Juan",
      image: "https://i.pinimg.com/736x/3c/4d/5f/3c4d5fc80d9dbad325c0369667917aad.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Joaquín Lautaro Andrade",
      comment: "¡Qué noche inolvidable! Cada detalle estaba pensado, desde la recepción hasta el cierre. El personal súper atento, el catering de primer nivel y el show en vivo fue espectacular. Sin dudas el mejor evento al que asistí en mucho tiempo. ¡Los voy a recomendar a todos mis conocidos!",
      timestamp: "Hace 7 días",
      location: "Zonda, San Juan",
      image: "https://i.pinimg.com/736x/d2/5b/72/d25b72639324b555c66da3c7698c7e4d.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Luciana Benitez Sáenz",
      comment: "¡Buenísimo todo! La organización fue brillante, el lugar estaba hermoso y la música increíble. Me encantó la atención al detalle en cada aspecto del evento. El servicio de bebidas premium fue un golazo, y el personal súper amable. ¡Ya quiero que llegue el próximo!",
      timestamp: "Hace 3 meses",
      location: "Rawson, San Juan",
      image: "https://i.pinimg.com/736x/fc/c9/b0/fcc9b097ee3df2dc3e4f31bd088d27a5.jpg",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container mx-auto md:px-12 px-4">
        <h2 className="text-5xl font-light text-white text-center mb-16">
          Experiencias Inolvidables
        </h2>
        
        <div className="space-y-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-zinc-800/90 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-102 group"
            >
              <div className="flex flex-col md:flex-row h-64">
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {comment.name}
                      </h3>
                      <p className="text-yellow-500 text-sm mt-1">
                        {comment.location}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {comment.timestamp}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                    {comment.comment}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xl">
                      {renderStars(comment.rating)}
                    </div>
                    <div className="text-yellow-500 text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100">
                      Cliente verificado
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <img
                    src={comment.image}
                    alt={`Evento con ${comment.name}`}
                    className="w-full h-full object-cover rounded-b-xl md:rounded-l-none md:rounded-r-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;