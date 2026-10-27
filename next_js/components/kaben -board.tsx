"use client";

import { Board, Column } from "@/lib/models/model.type";

import { CalendarDays, Mic, XCircle, Award, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";



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
    color: "bg-emerald-400",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-amber-400",
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
  return <Card className="bg-gray-800">
      <CardHeader className={config.color}>
        <div>
            <div>
                {config.icon}
                <CardTitle className="text-gray-100">{column.name}</CardTitle>
            </div>
        </div>
      </CardHeader>
  </Card>;
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
