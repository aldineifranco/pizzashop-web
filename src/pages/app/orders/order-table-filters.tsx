import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">filtros</span>
        <Input placeholder="ID do Cliente" className="h-8 w-auto"/>
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger>
          <SelectValue /> 
        </SelectTrigger>
        <SelectContent>

        </SelectContent>
        </Select>
    </form>
  )
}