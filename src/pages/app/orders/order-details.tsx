import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Pedido: 198798
        </DialogTitle>
        <DialogDescription>
          Detalhes do Pedido
        </DialogDescription>
      </DialogHeader>

      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Status
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Cliente
              </TableCell>
              <TableCell className="flex justify-end">
                Aldinei Souza Franco
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Telefone
              </TableCell>
              <TableCell className="flex justify-end">
                (18) 98877-6655
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                E-mail
              </TableCell>
              <TableCell className="flex justify-end">
                aldineifranco@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                5 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-rigth">Qtd.</TableHead>
              <TableHead className="text-rigth">Preço</TableHead>
              <TableHead className="text-rigth">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>
              <TableCell className="text-rigth">2</TableCell>
              <TableCell className="text-rigth">R$ 69,90</TableCell>
              <TableCell className="text-rigth">R$ 139,80</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Mussarela Família</TableCell>
              <TableCell className="text-rigth">2</TableCell>
              <TableCell className="text-rigth">R$ 59,90</TableCell>
              <TableCell className="text-rigth">R$ 119,80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>Total do Pedido</TableCell>
            <TableCell className="text-rigth font-medium">R$ 259,60</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}