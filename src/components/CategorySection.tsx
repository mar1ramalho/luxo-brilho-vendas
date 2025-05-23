
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Colares",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    link: "/produtos?categoria=colares"
  },
  {
    name: "Brincos",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    link: "/produtos?categoria=brincos"
  },
  {
    name: "Anéis",
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    link: "/produtos?categoria=aneis"
  },
  {
    name: "Pulseiras",
    image: "https://images.unsplash.com/photo-1611591437268-1b297d14af6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/produtos?categoria=pulseiras"
  }
];

export function CategorySection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-wider text-sm font-medium">Categorias</p>
          <h2 className="text-3xl font-semibold mt-1">Explore Nossa Coleção</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Descubra peças exclusivas em cada categoria, cuidadosamente selecionadas para adicionar um toque de elegância ao seu estilo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                  <p className="text-white/80 text-sm mt-2 flex items-center">
                    Ver produtos
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2 group-hover:ml-3 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
