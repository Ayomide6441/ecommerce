import Table from "@/components/common/table";
import { Button } from "@ecommerce/ui/components/button";
import { ArrowUpDown, Check, X } from "lucide-react";
import { useState } from "react";

// sample data shape
type Review = {
  id: number;
  image: string;
  review: string;
  name: string;
  rating: number;
  submittedAt: string;
};

const sampleReviews: Review[] = [
  {
    id: 1,
    image: "/placeholder.png",
    review:
      "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    rating: 4,
    name: "Onifade Beatrice",
    submittedAt: "Dec 12, 2023",
  },
  {
    id: 2,
    image: "/placeholder.png",
    name: "Dola Onifade",
    review: "lorem ipsum dolor sit amet consectetur",
    rating: 3,
    submittedAt: "Jan 12, 2020",
  },
];

function Reviews() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // simple filter for demo
  const rows = sampleReviews.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div></div>
      </div>

      <Table.Toolbar>
        <h2 className="text-lg font-semibold">Reviews</h2>
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
            <Table.HeadCell>Review</Table.HeadCell>
            <Table.HeadCell align="right">Rating</Table.HeadCell>
            <Table.HeadCell align="right">Submitted at</Table.HeadCell>
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
              <Table.Cell className="max-w-96 overflow-x-hidden text-ellipsis">
                {order.review}
              </Table.Cell>
              <Table.Cell align="right">{order.rating}.0 / 5</Table.Cell>
              <Table.Cell align="right">{order.submittedAt}</Table.Cell>
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

export default Reviews;
