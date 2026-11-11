
"use client";

import { Board, Column } from "@/lib/models/model.type";

import {
  CalendarDays,
  Mic,
  XCircle,
  Award,
  CheckCircle2,
  MoreVertical,
  TrashIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "@base-ui/react";
import CreateJobDialog from "./create-job-dialog";

interface KabenBoardProps {
  board: Board;
  userId: string;
}

interface ColumnConfig {
  headerClass: string;
  iconClass: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: ColumnConfig[] = [
  {
    headerClass:
      "border-pink-500 bg-gradient-to-r from-pink-950/90 to-pink-900/40",
    iconClass: "text-pink-400",
    icon: <CalendarDays className="h-7 w-7" />,
  },
  {
    headerClass:
      "border-purple-500 bg-gradient-to-r from-purple-950/90 to-purple-900/40",
    iconClass: "text-purple-400",
    icon: <CheckCircle2 className="h-7 w-7" />,
  },
  {
    headerClass:
      "border-emerald-500 bg-gradient-to-r from-emerald-950/90 to-emerald-900/40",
    iconClass: "text-emerald-400",
    icon: <Mic className="h-7 w-7" />,
  },
  {
    headerClass:
      "border-amber-500 bg-gradient-to-r from-amber-950/90 to-amber-900/40",
    iconClass: "text-amber-400",
    icon: <Award className="h-7 w-7" />,
  },
  {
    headerClass:
      "border-rose-500 bg-gradient-to-r from-rose-950/90 to-rose-900/40",
    iconClass: "text-rose-400",
    icon: <XCircle className="h-7 w-7" />,
  },
];

function DroppableColumn({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColumnConfig;
  boardId: string;
}) {
  return (
    <Card className="flex h-[calc(100vh-290px)] min-h-0flex-col overflow-hidden rounded-xl border border-[#20344D] bg-linear-to-b from-[#0B1728] to-[#050D19] p-0 shadow-none transition-colors hover:border-slate-600/80">

      {/* Column Header */}
      <CardHeader
        className={`flex h-16.5 shrink-0 flex-row items-center justify-between gap-3 rounded-none border-b-2 px-4 py-3 ${config.headerClass}`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className={`shrink-0 ${config.iconClass}`}>
            {config.icon}
          </span>

          <CardTitle className="truncate text-lg font-bold text-white">
            {column.name}
          </CardTitle>
        </div>

        {/* Column Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10" />
            }
          >
            <MoreVertical className="h-5 w-5" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="min-w-40 border border-slate-700 bg-[#0B1728] text-slate-100"
          >
            <DropdownMenuItem className="flex cursor-pointer items-center gap-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
              <TrashIcon className="h-4 w-4" />
              Delete Column
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* Column Content */}
      <CardContent className="flex flex-1 flex-col gap-4 p-4">

        {/* Add Job Button */}
        <CreateJobDialog
          columnId={column._id}
          boardId={boardId}
        />

        {/* Job cards will appear here */}

      </CardContent>
    </Card>
  );
}

export default function KabenBoard({
  board,
  userId,
}: KabenBoardProps) {
  const columns = board.columns;

  return (
    <div className="w-full overflow-x-auto pb-3">
      <div className="grid min-w-[1250px] grid-cols-5 gap-4 xl:min-w-0">

        {columns.map((col, index) => {
          const config = COLUMN_CONFIG[index] || {
            headerClass:
              "border-slate-600 bg-gradient-to-r from-slate-800 to-slate-900",
            iconClass: "text-slate-400",
            icon: <CalendarDays className="h-7 w-7" />,
          };

          return (
            <DroppableColumn
              key={col._id}
              column={col}
              config={config}
              boardId={board._id}
            />
          );
        })}

      </div>
    </div>
  );
}
