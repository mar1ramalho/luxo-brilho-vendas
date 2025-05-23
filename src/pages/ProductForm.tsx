
import { useParams, useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/AdminSidebar";
import { ProductForm } from "@/components/ProductForm";
import { ProductProps } from "@/components/ProductCard";
import { toast } from "sonner";

// Sample products data (same as in AdminProducts.tsx)
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
  }
];

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const isNewProduct = id === "novo";
  const pageTitle = isNewProduct ? "Adicionar Novo Produto" : "Editar Produto";
  
  // Find the product if editing
  const currentProduct = isNewProduct 
    ? undefined 
    : productsData.find(product => product.id === id);
  
  const handleSubmit = (productData: Omit<ProductProps, "id">) => {
    // Here you would typically send the data to an API
    // For now, just show a success message and redirect
    
    // In case of edit, if product not found
    if (!isNewProduct && !currentProduct) {
      toast.error("Produto não encontrado");
      return;
    }
    
    setTimeout(() => {
      navigate("/admin/produtos");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
          
          <div className="bg-white p-6 rounded-lg border">
            <ProductForm product={currentProduct} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormPage;
