
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative">
      <div 
        className="bg-gradient-to-r from-gray-900/80 to-gray-900/60 absolute inset-0 z-10"
        aria-hidden="true"
      />
      <div 
        className="h-[70vh] bg-[url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80')] 
        bg-cover bg-center"
      />
      <div className="container absolute inset-0 flex flex-col justify-center items-start z-20 px-4 md:px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Elegância que <span className="text-gold">brilha</span> em cada momento
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Semi jóias exclusivas para valorizar sua beleza e estilo. 
            Qualidade e sofisticação para todos os momentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-black"
            >
              <Link to="/produtos">
                Ver produtos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-black"
            >
              <Link to="/sobre">
                Conheça nossa história
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
