"use client";
/* eslint-disable */
import React, { useState } from "react";
import { Edit2, Trash } from "lucide-react";

// shadcn/ui components (adjust paths if your project uses a different alias)
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IconDots, IconPencil, IconTrash } from "@tabler/icons-react"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

/**
 * Generic, dynamic DataTable built with shadcn components.
 * - Accepts `columns` describing which keys to render + headers and optional custom renderers
 * - Accepts `data` as array of objects (rows)
 * - Emits `onEdit` and `onDelete` callbacks (optional) when user saves or confirms delete
 *
 * Example columns: [ { key: 'name', header: 'Nama' }, { key: 'email', header: 'Email' } ]
 */

type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  editable?: boolean; // default true
};

type DataTableProps<T extends Record<string, any>> = {
  columns: Column<T>[];
  loading: boolean;
  data: T[];
  onEdit?: (updatedRow: T) => void;
  onDelete?: (row: T) => void;
  rowKey?: keyof T | ((row: T) => string | number); // optional row identifier
};

export default function DataTable<T extends Record<string, any>>({
  loading,
  columns,
  data,
  onEdit,
  onDelete,
  rowKey,
}: DataTableProps<T>) {
  const [rows, setRows] = useState<T[]>(data);
  const [editingRow, setEditingRow] = useState<T | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [toDeleteRow, setToDeleteRow] = useState<T | null>(null);

  // keep local rows in sync if parent data changes
  React.useEffect(() => setRows(data), [data]);

  const startEdit = (row: T) => {
    setEditingRow({ ...row });
  };

  const saveEdit = () => {
    if (!editingRow) return;
    const idGetter = typeof rowKey === "function" ? rowKey : (r: any) => (rowKey ? (r as any)[rowKey as string] : undefined);
    const keyVal = idGetter(editingRow);

    const updated = rows.map((r) => {
      const val = idGetter(r as any);
      if (val === keyVal) return editingRow;
      return r;
    });
    setRows(updated);
    onEdit?.(editingRow);
    setEditingRow(null);
  };

  const confirmDelete = (row: T) => {
    setToDeleteRow(row);
    setIsDeleteOpen(true);
  };

  const doDelete = () => {
    if (!toDeleteRow) return;
    const idGetter = typeof rowKey === "function" ? rowKey : (r: any) => (rowKey ? (r as any)[rowKey as string] : undefined);
    const keyVal = idGetter(toDeleteRow);
    const filtered = rows.filter((r) => idGetter(r as any) !== keyVal);
    setRows(filtered);
    onDelete?.(toDeleteRow);
    setToDeleteRow(null);
    setIsDeleteOpen(false);
  };

  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead className="fond-bold" key={String(col.key)}>{col.header}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {loading ? (
            // Saat loading, tampilkan skeleton row
            Array.from({ length: 3 }).map((_, idx) => (
              <TableRow key={`loading-${idx}`}>
                {columns.map((col, cIdx) => (
                  <TableCell key={cIdx}>
                    <div className="h-4 w-24 bg-gray-200 bg-opacity-30 rounded animate-pulse"></div>
                  </TableCell>
                ))}
                <TableCell>
                  <div className="h-4 w-16 bg-gray-200 bg-opacity-30 rounded animate-pulse"></div>
                </TableCell>
              </TableRow>
            ))
          ) : rows.length > 0 ? (
            rows.map((row, idx) => {
              const rKey =
                typeof rowKey === "function"
                  ? rowKey(row)
                  : rowKey
                  ? (row as any)[rowKey as string]
                  : idx;

              return (
                <TableRow key={String(rKey) || idx}>
                  {columns.map((col) => (
                    <TableCell key={String(col.key)}>
                      {col.render ? col.render(row) : String((row as any)[col.key])}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded hover:bg-muted">
                            <IconDots size={18} />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => startEdit(row)}>
                            <IconPencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600 focus:text-red-600"
                            onClick={() => confirmDelete(row)}
                          >
                            <IconTrash className="mr-2 h-4 w-4" /> Hapus
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            // Kalau tidak ada data
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="text-center">
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>

      </Table>

      {/* Edit dialog */}
      <Dialog open={!!editingRow} onOpenChange={(open) => { if (!open) setEditingRow(null); }}>
        <DialogContent forceMount className="h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Edit row</DialogTitle>
          </DialogHeader>

          {editingRow && (
            <div className="grid gap-2 py-2">
              {columns.map((col) => {
                // only show editable fields
                const editable = col.editable ?? true;
                if (!editable) return null;
                const k = col.key as string;
                return (
                  <div className="grid grid-cols-1" key={k}>
                    <Label className="text-sm">{col.header}</Label>
                    <Input
                      value={editingRow[k] ?? ""}
                      onChange={(e) => setEditingRow({ ...editingRow, [k]: e.target.value })}
                    />
                  </div>
                );
              })}

              <div className="flex gap-2 justify-end pt-4">
                <Button onClick={() => setEditingRow(null)} variant="outline">Cancel</Button>
                <Button onClick={saveEdit}>Save</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm delete</DialogTitle>
          </DialogHeader>

          <div className="py-2">
            <p>Are you sure you want to delete this row?</p>
            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
              <Button onClick={doDelete}>Delete</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
