import Table from "@/components/common/table";
import { Button } from "@ecommerce/ui/components/button";
import { ArrowUpDown, Check, X } from "lucide-react";
import { useState } from "react";

// sample data shape
type Order = {
  id: number;
  image: string;
  sku: string;
  itemName: string;
  price: number;
  status: boolean;
  featured: boolean;
};

const sampleOrders: Order[] = [
  {
    id: 1,
    image: "/placeholder.png",
    sku: "MW-001",
    itemName: "Monochromatic Wardrobe",
    price: 26.99,
    status: true,
    featured: true,
  },
  {
    id: 2,
    image: "/placeholder.png",
    sku: "MW-002",
    itemName: "Monochromatic Wardrobe",
    price: 53.98,
    status: false,
    featured: false,
  },
];

function Products() {
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
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="flex gap-2 items-center">
          <Table.Search
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
          <Button variant="default" className="shadow-none p-5 rounded-sm">
            Add Product
          </Button>
        </div>
      </Table.Toolbar>

      <Table.Wrapper>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>
              <ArrowUpDown className="size-4" />
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>SKU</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
            <Table.HeadCell align="center">Is Featured</Table.HeadCell>
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
              <Table.Cell>{order.sku}</Table.Cell>
              <Table.Cell>${order.price}</Table.Cell>
              <Table.Cell>
                {order.status === true ? "In Stock" : "Out of Stock"}
              </Table.Cell>
              <Table.Cell align="center">
                {order.featured === true ? (
                  <Check className="size-5 w-full" />
                ) : (
                  <X className="size-5 w-full" />
                )}
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

export default Products;
