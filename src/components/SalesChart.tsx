
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    vendas: 4000,
  },
  {
    name: "Fev",
    vendas: 3000,
  },
  {
    name: "Mar",
    vendas: 5000,
  },
  {
    name: "Abr",
    vendas: 2780,
  },
  {
    name: "Maio",
    vendas: 1890,
  },
  {
    name: "Jun",
    vendas: 2390,
  },
  {
    name: "Jul",
    vendas: 3490,
  },
  {
    name: "Ago",
    vendas: 2000,
  },
  {
    name: "Set",
    vendas: 2780,
  },
  {
    name: "Out",
    vendas: 4890,
  },
  {
    name: "Nov",
    vendas: 3490,
  },
  {
    name: "Dez",
    vendas: 6000,
  },
];

export function SalesChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              }).format(value)
            }
          />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(value))
            }
          />
          <Legend />
          <Bar dataKey="vendas" fill="#D4AF37" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
