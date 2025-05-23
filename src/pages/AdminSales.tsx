
import { AdminSidebar } from "@/components/AdminSidebar";
import { SalesList, SalesData } from "@/components/SalesList";

// Sample sales data
const salesData: SalesData[] = [
  {
    id: "PED-001",
    customer: "Maria Silva",
    date: "2023-05-15",
    status: "concluído",
    total: 189.80,
    items: [
      { id: "1", product: "Colar Elegance", quantity: 1, price: 129.90 },
      { id: "2", product: "Brinco Delicado", quantity: 1, price: 59.90 }
    ]
  },
  {
    id: "PED-002",
    customer: "João Oliveira",
    date: "2023-05-17",
    status: "concluído",
    total: 99.90,
    items: [
      { id: "4", product: "Anel Solitário", quantity: 1, price: 99.90 }
    ]
  },
  {
    id: "PED-003",
    customer: "Ana Santos",
    date: "2023-05-18",
    status: "pendente",
    total: 259.80,
    items: [
      { id: "3", product: "Pulseira Charme", quantity: 1, price: 79.90 },
      { id: "6", product: "Conjunto Harmonia", quantity: 1, price: 179.90 }
    ]
  },
  {
    id: "PED-004",
    customer: "Carlos Mendes",
    date: "2023-05-19",
    status: "cancelado",
    total: 149.90,
    items: [
      { id: "5", product: "Colar Gota Cristal", quantity: 1, price: 149.90 }
    ]
  },
  {
    id: "PED-005",
    customer: "Juliana Costa",
    date: "2023-05-20",
    status: "concluído",
    total: 199.80,
    items: [
      { id: "7", product: "Brinco Argola", quantity: 1, price: 69.90 },
      { id: "8", product: "Pulseira Riviera", quantity: 1, price: 129.90 }
    ]
  },
  {
    id: "PED-006",
    customer: "Marcela Lima",
    date: "2023-05-21",
    status: "pendente",
    total: 329.70,
    items: [
      { id: "5", product: "Colar Gota Cristal", quantity: 1, price: 149.90 },
      { id: "1", product: "Colar Elegance", quantity: 1, price: 129.90 },
      { id: "2", product: "Brinco Delicado", quantity: 1, price: 49.90 }
    ]
  },
  {
    id: "PED-007",
    customer: "Ricardo Souza",
    date: "2023-05-22",
    status: "concluído",
    total: 179.80,
    items: [
      { id: "3", product: "Pulseira Charme", quantity: 2, price: 79.90 }
    ]
  },
  {
    id: "PED-008",
    customer: "Fernanda Dias",
    date: "2023-05-23",
    status: "pendente",
    total: 249.80,
    items: [
      { id: "4", product: "Anel Solitário", quantity: 1, price: 99.90 },
      { id: "8", product: "Pulseira Riviera", quantity: 1, price: 149.90 }
    ]
  }
];

const AdminSales = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Vendas</h1>
          
          <div className="bg-white p-6 rounded-lg border">
            <SalesList sales={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSales;
