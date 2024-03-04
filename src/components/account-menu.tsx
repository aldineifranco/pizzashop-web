import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";


export function AccountMenu() {
  return (
    <DropdownMenu>
      
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className="flex items-center gap-2 select-none">
          Pizza Shop
          <ChevronDown className="h-4 w-4"/>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col p-2">
          <span>Aldinei Franco</span>
          <span className="text-xs font-normal text-muted-foreground">aldineifranco@gmail.com</span>
        </DropdownMenuLabel>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}