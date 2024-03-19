import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors';
import { ResponsiveContainer, Pie, PieChart } from "recharts";
import { BarChart, FlipVertical } from "lucide-react";

const data = [
  { product: 'Pepperoni', amount: 220 },
  { product: 'Mussarela', amount: 320 },
  { product: 'Portuguesa', amount: 120 },
  { product: 'Quatro Queijos', amount: 150 },
  { product: 'Catu Frango', amount: 180 }

]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>

          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}