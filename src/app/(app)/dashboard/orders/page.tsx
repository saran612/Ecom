import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { orders } from "@/lib/placeholder-data";
  
  export default function DashboardOrdersPage() {
    return (
      <>
        <h1 className="font-headline text-2xl font-bold">Orders</h1>
  
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>A list of recent orders from your customers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          order.status === 'Delivered' ? 'default' : 
                          order.status === 'Cancelled' ? 'destructive' : 
                          'secondary'
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.itemCount}</TableCell>
                    <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
    );
  }
  