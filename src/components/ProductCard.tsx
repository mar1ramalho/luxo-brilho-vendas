
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export function ProductCard({ id, name, price, image, category }: ProductProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/produtos/${id}`} className="hover:underline">
          <h3 className="font-medium tracking-tight truncate">{name}</h3>
        </Link>
        <p className="text-lg font-semibold mt-2">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2 bg-gold hover:bg-gold-dark text-black"
          size="sm"
        >
          <ShoppingBag className="h-4 w-4" />
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
