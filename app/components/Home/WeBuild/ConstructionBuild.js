import React from "react";

const ConstructionBuild = () => {

  const constructionData = [
    {
      "id": 1,
      "title": "Highway Expansion",
      "description": "Expansion of the main highway with two additional lanes to improve traffic flow and include updated signals and sound barriers.",
      "image": "https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?s=612x612&w=0&k=20&c=nsHUDbyjIO1rFRpkgsug51nz-39zPx470CF6vIlcsg8="
    },
    {
      "id": 2,
      "title": "Bridge Construction",
      "description": "Completion of a 500-meter suspension bridge, enhancing connectivity over the river and providing a crucial link for the local transportation network.",
      "image": "https://cdn.vectorstock.com/i/500p/35/81/bridge-construction-transportation-partnership-vector-47213581.jpg"
    },
    {
      "id": 3,
      "title": "Building Construction",
      "description": "Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.",
      "image": "https://i.postimg.cc/65jLmqg5/building-construction-icon-vector-26319088.webp"
    },
    {
      "id": 4,
      "title": "Road Construction",
      "description": "Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.",
      "image": "https://media.istockphoto.com/id/1330212296/vector/way-logo-vector-icon-design-illustration.jpg?s=612x612&w=0&k=20&c=aLz-15PCLMUYpKBHqEmXLSlQR81OIOpuQmSo4RSWIGs="
    },
    {
      "id": 5,
      "title": "Drainage & Sewerage System Construction",
      "description": "Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.",
      "image": "https://t3.ftcdn.net/jpg/02/89/21/22/360_F_289212263_3U2UQ0o6ugFGzrBOj0Swe1U4SK0WdAlW.jpg"
    }
  ]



  return (
    <div className="bg-slate-50">
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <section className="py-8 sm:py-16 lg:py-24">
          <div className="flex justify-center">
            <h2 className="text-2xl text-center lg:text-left font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
              What We Build
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-12">
              {constructionData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 min-h-[350px] flex flex-col items-center relative group" 
                >
                  {/* Top-left border */}
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 border-l-4 border-t-4 border-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Bottom-right border */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-2/3  border-r-4 border-b-4 border-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="flex flex-col items-center justify-start flex-grow">
                    <img src={item.image} className="w-24 h-24 mb-4" alt={item.title} />
                    <h3 className="text-lg h-14 font-semibold text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>
      </div>
    </div>
  );
};

export default ConstructionBuild;
