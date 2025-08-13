"use client";

import {
  TablePagination,
  TablePaginationContent,
  TablePaginationItem,
  TablePaginationLink,
  TablePaginationNext,
  TablePaginationPrevious,
} from "@/components/ui/table-pagination";

export function DataTablePagination({ table }) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    <TablePagination>
      <TablePaginationContent>
        <TablePaginationItem>
          <TablePaginationPrevious
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </TablePaginationItem>

        {Array.from({ length: pageCount }, (_, i) => (
          <TablePaginationItem key={i}>
            <TablePaginationLink
              isActive={currentPage === i + 1}
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </TablePaginationLink>
          </TablePaginationItem>
        ))}

        <TablePaginationItem>
          <TablePaginationNext
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </TablePaginationItem>
      </TablePaginationContent>
    </TablePagination>
  );
}
