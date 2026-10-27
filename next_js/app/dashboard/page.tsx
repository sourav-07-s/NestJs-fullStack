import { getSession } from "@/lib/Auth/auth";
import { redirect } from "next/navigation";
import Board from "@/lib/models/board";
import connectDB from "@/lib/db";
import KabenBoard from "@/components/kaben -board";

export const instant = false;

export default async function dashboard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }



  await connectDB();
  console.log("Connected to DB");



  const board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({
    path: "columns",
  });

  return (
    <div className="min-h-screen mx-16">
      <div className="container mx-auto py-6">
        <div className=" mb-6">
          <h1 className="text-3xl font-bold text-gray-100">{board?.name}</h1>
          <p className="text-gray-400">Track Your Job Applications</p>
        </div>
        <KabenBoard
          board={JSON.parse(JSON.stringify(board))}
          userId={session.user.id}
        />
      </div>
    </div>
  );
}
