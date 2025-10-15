import Table from "@/components/common/table";
import { Button } from "@ecommerce/ui/components/button";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// sample data shape
type Order = {
  id: number;
  itemName: string;
  date: string;
  total: number;
  status: string;
};

const sampleOrders: Order[] = [
  {
    id: 1,
    itemName: "Monochromatic Wardrobe",
    date: "Sep 21, 2024",
    total: 26.99,
    status: "Shipped",
  },
  {
    id: 2,
    itemName: "Monochromatic Wardrobe",
    date: "Sep 24, 2024",
    total: 53.98,
    status: "Processing",
  },
];

function Orders() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // simple filter for demo
  const rows = sampleOrders.filter((r) =>
    r.itemName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div></div>
      </div>

      <Table.Toolbar>
        <h2 className="text-lg font-semibold">Orders</h2>
        <Button variant="outline" className="shadow-none p-5 rounded-sm">
          Filter by
        </Button>
      </Table.Toolbar>

      <Table.Wrapper>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>
              <ArrowUpDown className="size-4" />
            </Table.HeadCell>
            <Table.HeadCell>Ordered Item</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Total</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell align="center">Action</Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>

        <Table.Body>
          {rows.slice((page - 1) * pageSize, page * pageSize).map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell>
                <div className="w-10 h-10 bg-gray-50 rounded-md flex items-center justify-center">
                  {/* product thumbnail */}
                  <img
                    src="/placeholder.png"
                    alt={order.itemName}
                    className="w-9 h-9 object-cover rounded"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="text-sm">{order.itemName}</div>
              </Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>${order.total.toFixed(2)}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/orders/${order.id}`} className="underline">
                  View details
                </Link>
              </Table.Cell>
              <Table.Cell align="center">
                <div className="flex items-center justify-center">
                  <Button variant="ghost" className="px-2">
                    ...
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Wrapper>

      {rows.length <= 10 ? (
        ""
      ) : (
        <div className="m-4 flex items-center justify-end">
          <Table.Pagination
            page={page}
            pageSize={pageSize}
            total={rows.length}
            onChange={(p) => setPage(p)}
          />
        </div>
      )}
    </div>
  );
}

export default Orders;
