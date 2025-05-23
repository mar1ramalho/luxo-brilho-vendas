
import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { StatCards } from "@/components/StatCards";
import { SalesChart } from "@/components/SalesChart";
import { SalesList, SalesData } from "@/components/SalesList";
import { Button } from "@/components/ui/button";

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
  }
];

const AdminDashboard = () => {
  // Stats for the dashboard
  const [totalProducts] = useState(32);
  const [totalSales] = useState(68);
  const [totalRevenue] = useState(12753.90);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <StatCards 
            totalProducts={totalProducts}
            totalSales={totalSales}
            totalRevenue={totalRevenue}
          />
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Vendas por Mês</h2>
            <div className="bg-white p-4 rounded-lg border">
              <SalesChart />
            </div>
          </div>
          
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Últimas Vendas</h2>
              <Button variant="outline" asChild>
                <a href="/admin/vendas">Ver todas</a>
              </Button>
            </div>
            <div className="bg-white rounded-lg border">
              <SalesList sales={salesData.slice(0, 5)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
