
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b py-4 bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-playfair text-2xl font-semibold tracking-tight">
          Brilho Eterno
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/produtos" className="text-sm hover:text-gold transition-colors">
            Produtos
          </Link>
          <Link to="/sobre" className="text-sm hover:text-gold transition-colors">
            Sobre Nós
          </Link>
          <Link to="/contato" className="text-sm hover:text-gold transition-colors">
            Contato
          </Link>
          <Link to="/admin" className="text-sm hover:text-gold transition-colors">
            Admin
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent hover:text-gold"
            aria-label="Carrinho de compras"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent hover:text-gold md:hidden"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b z-50 animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/produtos" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/sobre" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              to="/admin" 
              className="text-sm px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
