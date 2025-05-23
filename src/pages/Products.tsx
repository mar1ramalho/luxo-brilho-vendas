
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard, ProductProps } from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample products data
const productsData: ProductProps[] = [
  {
    id: "1",
    name: "Colar Elegance",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Colares",
    description: "Colar banhado a ouro com pingente delicado. Perfeito para ocasiões especiais."
  },
  {
    id: "2",
    name: "Brinco Delicado",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Brincos",
    description: "Brincos pequenos com design minimalista. Combina com qualquer look."
  },
  {
    id: "3",
    name: "Pulseira Charme",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Pulseiras",
    description: "Pulseira ajustável com detalhes em zircônia. Elegante e confortável."
  },
  {
    id: "4",
    name: "Anel Solitário",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: "Anéis",
    description: "Anel delicado com pedra central. Perfeito para uso diário."
  },
  {
    id: "5",
    name: "Colar Gota Cristal",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Colares",
    description: "Colar com pingente em formato de gota. Elegância e sofisticação."
  },
  {
    id: "6",
    name: "Conjunto Harmonia",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    category: "Conjuntos",
    description: "Conjunto de colar e brincos combinando. Para momentos especiais."
  },
  {
    id: "7",
    name: "Brinco Argola",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1610694955371-d4a34a34e84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Brincos",
    description: "Brincos em formato de argola média. Versátil e moderno."
  },
  {
    id: "8",
    name: "Pulseira Riviera",
    price: 119.90,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
    category: "Pulseiras",
    description: "Pulseira com design único e acabamento impecável. Ideal para presentes."
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("categoria");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "");
  const [sortBy, setSortBy] = useState<string>("default");

  const categories = ["Colares", "Brincos", "Anéis", "Pulseiras", "Conjuntos"];

  // Filter products based on category and search term
  let filteredProducts = [...productsData];
  
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product => 
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
  
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort products
  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value) {
      searchParams.set("categoria", value.toLowerCase());
    } else {
      searchParams.delete("categoria");
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSortBy("default");
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Nossos Produtos</h1>
            <p className="text-gray-600">
              Descubra nossa coleção de semi jóias exclusivas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Buscar</h3>
                <div className="relative">
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Categorias</h3>
                <div className="space-y-2">
                  <Select
                    value={selectedCategory}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todas as categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todas as categorias</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Ordenar por</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar ordem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Padrão</SelectItem>
                    <SelectItem value="price-asc">Menor preço</SelectItem>
                    <SelectItem value="price-desc">Maior preço</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={clearFilters}
              >
                Limpar filtros
              </Button>
            </div>
            
            {/* Products grid */}
            <div className="col-span-1 md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Nenhum produto encontrado</h3>
                  <p className="text-gray-600 mt-1">
                    Tente ajustar seus filtros ou realizar uma nova busca.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
