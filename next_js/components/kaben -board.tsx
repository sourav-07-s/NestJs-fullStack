"use client";

import { Board, Column } from "@/lib/models/model.type";

import { CalendarDays, Mic, XCircle, Award, CheckCircle2, MoreHorizontal, MoreVertical, TrashIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "@base-ui/react";
import CreateJobDialog from "./create-job-dialog";

interface kabenBoardProps {
  board: Board;
  userId: string;
}

interface columnConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<{ color: string; icon: React.ReactNode }> = [
  {
    color: "bg-pink-500",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-emerald-600",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-amber-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-rose-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

function DroppableColumn({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: columnConfig;
  boardId: string;
  sortedColumns: Column[];
}) {
  return (
   <Card className="overflow-hidden border-gray-700 bg-gray-800">
  <CardHeader
    className={`${config.color} flex flex-row items-center justify-between gap-3 p-4`}
  >
    {/* Column title and icon */}
    <div className="flex min-w-0 items-center gap-2">
      <span className="shrink-0 text-white">
        {config.icon}
      </span>

      <CardTitle className="truncate text-sm font-semibold text-white">
        {column.name}
      </CardTitle>
    </div>

    {/* Column actions */}
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-black/15"
          />
        }
      >
        <MoreVertical className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 text-red-400 focus:text-red-400">
          <TrashIcon className="h-4 w-4" />
          Delete Column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </CardHeader>
 
    <CardContent>

        <CreateJobDialog columnId={column._id} boardId={boardId}  />

    </CardContent>
  
</Card>
  );
}

export default function KabenBoard({ board, userId }: kabenBoardProps) {
  const columns = board.columns;

  return (
    <>
      <div>
        <div>
          {columns.map((col, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-gray-500",
              icon: <CalendarDays className="h-4 w-4" />,
            };

            return (
              <DroppableColumn
                key={key}
                column={col}
                config={config}
                boardId={board._id}
                sortedColumns={columns}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
