
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ProductProps } from "./ProductCard";

interface ProductFormProps {
  product?: ProductProps;
  onSubmit: (product: Omit<ProductProps, "id">) => void;
}

export function ProductForm({ product, onSubmit }: ProductFormProps) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price?.toString() || "");
  const [category, setCategory] = useState(product?.category || "");
  const [image, setImage] = useState(product?.image || "");
  const [description, setDescription] = useState(product?.description || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !price || !category || !image) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    setIsLoading(true);
    
    try {
      onSubmit({
        name,
        price: parseFloat(price),
        category,
        image,
        description,
      });
      
      // Reset form if it's a new product
      if (!product) {
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
        setDescription("");
      }
      
      toast.success(product ? "Produto atualizado com sucesso!" : "Produto adicionado com sucesso!");
    } catch (error) {
      toast.error("Erro ao salvar o produto");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{product ? "Editar Produto" : "Adicionar Produto"}</CardTitle>
        <CardDescription>
          {product
            ? "Atualize as informações do produto existente."
            : "Adicione um novo produto ao catálogo."}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              placeholder="Nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="price">Preço (R$) *</Label>
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Categoria *</Label>
            <Select
              value={category}
              onValueChange={setCategory}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Colares">Colares</SelectItem>
                <SelectItem value="Brincos">Brincos</SelectItem>
                <SelectItem value="Anéis">Anéis</SelectItem>
                <SelectItem value="Pulseiras">Pulseiras</SelectItem>
                <SelectItem value="Conjuntos">Conjuntos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="image">URL da Imagem *</Label>
            <Input
              id="image"
              placeholder="https://exemplo.com/imagem.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            {image && (
              <div className="mt-2 aspect-square w-40 overflow-hidden rounded-md border">
                <img
                  src={image}
                  alt="Prévia do produto"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Descreva o produto..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => window.history.back()}
          >
            Cancelar
          </Button>
          <Button 
            type="submit"
            className="bg-gold hover:bg-gold-dark text-black" 
            disabled={isLoading}
          >
            {isLoading ? "Salvando..." : product ? "Atualizar produto" : "Adicionar produto"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
