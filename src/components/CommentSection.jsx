import React from "react";

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      name: "Matías Fernández",
      comment: "La verdad que quedé re contento con todo. La organización fue impecable, el ambiente estaba re copado y la atención fue de primera. El DJ la rompió toda la noche, perreo intenso. Recomendadisimo!",
      timestamp: "Hace 2 meses",
      location: "Santa Lucía, San Juan",
      image: "https://i.pinimg.com/736x/bd/bb/a9/bdbba923f80a65ceb3778751b4a78a76.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Valentina Bianchi",
      comment: "Muy lindo todo! La decoración estaba re linda, como sacada de revista. La música tremenda. Se nota que saben lo que hacen. Ya les dije a mis amigas que si hacen algo, los llamen a ustedes. Gracias por todo!",
      timestamp: "Hace 15 días",
      location: "Rivadavia, San Juan",
      image: "https://i.pinimg.com/736x/3c/4d/5f/3c4d5fc80d9dbad325c0369667917aad.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Joaquín Andrade",
      comment: "¡Qué noche! La pasé genial, todo estuvo perfecto. El dj un crack, la comida estaba riquísima y el lugar quedó espectacular. Se nota que le ponen onda a lo que hacen. ¡Los felicito y los recomiendo!",
      timestamp: "Hace 3 semanas",
      location: "Zonda, San Juan",
      image: "https://i.pinimg.com/736x/d2/5b/72/d25b72639324b555c66da3c7698c7e4d.jpg",
      rating: 5
    },

   
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white text-center mb-8 sm:mb-16">
          Experiencias Inolvidables
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-zinc-800/90 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex flex-col sm:flex-row md:h-64">
                <div className="sm:w-full lg:w-2/3 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white break-words">
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
                  
                  <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                    {comment.comment}
                  </p>
                  
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="text-lg sm:text-xl">
                      {renderStars(comment.rating)}
                    </div>
                    <div className="text-yellow-500 text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100">
                      Cliente verificado
                    </div>
                  </div>
                </div>
                
                <div className="sm:w-full lg:w-1/3 h-48 sm:h-auto">
                  <img
                    src={comment.image}
                    alt={`Evento con ${comment.name}`}
                    className="w-full h-full object-cover rounded-b-xl sm:rounded-r-xl sm:rounded-l-none"
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