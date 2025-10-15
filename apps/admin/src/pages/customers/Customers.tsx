import Table from "@/components/common/table";
import { Button } from "@ecommerce/ui/components/button";
import { ArrowUpDown, Check, X } from "lucide-react";
import { useState } from "react";

// sample data shape
type Customer = {
  id: number;
  image: string;
  email: string;
  name: string;
  address: string;
};

const sampleCustomers: Customer[] = [
  {
    id: 1,
    image: "/placeholder.png",
    email: "test@gmail.com",
    address: "Lagos, Nigeria, Ile-Ife, Osun State, 220001",
    name: "Onifade Beatrice",
  },
  {
    id: 2,
    image: "/placeholder.png",
    name: "Dola Onifade",
    email: "anothertest@gmail.com",
    address: "Lagos, Nigeria, Ikeja, Lagos State, 220001",
  },
];

function Customers() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // simple filter for demo
  const rows = sampleCustomers.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div></div>
      </div>

      <Table.Toolbar>
        <h2 className="text-lg font-semibold">Customers</h2>
        <Table.Search
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers"
        />
      </Table.Toolbar>

      <Table.Wrapper>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>
              <ArrowUpDown className="size-4" />
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Shipping Address</Table.HeadCell>
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
                    alt={order.name}
                    className="w-9 h-9 object-cover rounded"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="text-sm">{order.name}</div>
              </Table.Cell>
              <Table.Cell>{order.email}</Table.Cell>
              <Table.Cell>{order.address}</Table.Cell>
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

export default Customers;
