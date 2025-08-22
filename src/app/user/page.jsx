"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DataTablePagination } from "@/components/TablePagination";

const usersData = [
  {
    id: 1,
    name: "Abrar Jahin",
    email: "abrarjahin@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
];

const UserPage = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Users</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4 mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[250px]"
        />
      </div>

      {/* Users Table (desktop) */}
      <div className="hidden sm:block bg-primary-foreground rounded-lg p-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === "Admin" ? "default" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Active" ? "success" : "destructive"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() => router.push(`/user/${user.name}`)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card Layout */}
      <div className="sm:hidden space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-primary-foreground rounded-lg p-4 shadow"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{user.name}</h2>
                <Button
                  size="sm"
                  onClick={() => router.push(`/user/${user.name}`)}
                >
                  View
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="flex gap-2 mt-2">
                <Badge
                  variant={user.role === "Admin" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
                <Badge
                  variant={user.status === "Active" ? "success" : "destructive"}
                >
                  {user.status}
                </Badge>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground">No users found</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <DataTablePagination
          table={{
            getFilteredSelectedRowModel: () => ({ rows: [] }),
            getFilteredRowModel: () => ({ rows: filteredUsers }),
            getState: () => ({ pagination: { pageSize: 10, pageIndex: 0 } }),
            setPageSize: () => {},
            getPageCount: () => 1,
            setPageIndex: () => {},
            getCanPreviousPage: () => false,
            getCanNextPage: () => false,
            previousPage: () => {},
            nextPage: () => {},
          }}
        />
      </div>
    </div>
  );
};

export default UserPage;
