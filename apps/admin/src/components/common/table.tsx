import React from "react";
import { Button } from "@ecommerce/ui/components/button";
import { Input } from "@ecommerce/ui/components/input";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------- Toolbar & Search ---------- */

type ToolbarProps = React.PropsWithChildren<{ className?: string }>;

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between gap-3 bg-white p-6 rounded-t-md">
      {children}
    </div>
  );
};
type SearchProps = {
  placeholder?: string;
  value?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

export const TableSearch: React.FC<SearchProps> = ({
  placeholder = "Search...",
  value = "",
  onSearch,
  className,
}) => {
  const [q, setQ] = React.useState(value);
  React.useEffect(() => setQ(value), [value]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-64"
      />
      <Button
        className="whitespace-nowrap"
        onClick={() => onSearch?.(q)}
        variant="default"
      >
        Search
      </Button>
    </div>
  );
};
/* ---------- Table core elements ---------- */

export const TableWrapper: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-b-md border-t bg-white overflow-hidden",
        className ?? ""
      )}
    >
      <table className="min-w-full divide-y">{children}</table>
    </div>
  );
};

export const TableHead: React.FC<React.PropsWithChildren> = ({ children }) => (
  <thead className="bg-white">{children}</thead>
);

export const TableHeadRow: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <tr className="text-left text-sm font-medium text-gray-600">{children}</tr>
);

export const TableHeadCell: React.FC<
  React.PropsWithChildren<{
    className?: string;
    align?: "left" | "center" | "right";
  }>
> = ({ children, className, align = "left" }) => (
  <th
    scope="col"
    className={cn(
      "px-6 py-4 whitespace-nowrap border-b text-xs uppercase tracking-wider",
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-left",
      className ?? ""
    )}
  >
    {children}
  </th>
);

export const TableBody: React.FC<React.PropsWithChildren> = ({ children }) => (
  <tbody className="bg-white divide-y">{children}</tbody>
);

export const TableRow: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <tr className={cn("hover:bg-gray-50 transition-colors", className ?? "")}>
    {children}
  </tr>
);

export const TableCell: React.FC<
  React.PropsWithChildren<{
    className?: string;
    align?: "left" | "center" | "right";
  }>
> = ({ children, className, align = "left" }) => (
  <td
    className={cn(
      "px-6 py-5 align-middle text-sm whitespace-nowrap",
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-left",
      className ?? ""
    )}
  >
    {children}
  </td>
);

/* ---------- Footer & Pagination helper (simple) ---------- */

export const TableFooter: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={cn("mt-4 flex items-center justify-between", className ?? "")}
  >
    {children}
  </div>
);

type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
};

export const TablePagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 items-center">
        <Button
          variant="ghost"
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page <= 1}
        >
          <ChevronLeft />
        </Button>
        <div className="text-sm text-muted-foreground">
          {Math.min((page - 1) * pageSize + 1, total)}-
          {Math.min(page * pageSize, total)} of {total}
        </div>
        <Button
          variant="ghost"
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export const Table = {
  Toolbar,
  Wrapper: TableWrapper,
  Head: TableHead,
  HeadRow: TableHeadRow,
  HeadCell: TableHeadCell,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Footer: TableFooter,
  Pagination: TablePagination,
  Search: TableSearch,
};

export default Table;
