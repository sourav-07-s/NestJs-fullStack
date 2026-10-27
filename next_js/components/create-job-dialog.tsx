import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";

interface createJobDialogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobDialog({
  columnId,
  boardId,
}: createJobDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-12 w-28 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-[#F8FAFC] px-3 text-sm font-medium text-slate-900 shadow-none transition-colors hover:border-pink-300 hover:bg-white hover:shadow-none">
        <Plus className="h-4 w-4 text-pink-500" />
        Add Job
      </DialogTrigger>

      <DialogContent className="max-w-xl rounded-2xl border border-slate-700/80 bg-[#080F1C] p-6 text-slate-100 shadow-[0_0_35px_rgba(236,72,153,0.10)]">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold tracking-tight text-white">
            Add Job Application
          </DialogTitle>

          <DialogDescription className="text-sm text-slate-400">
            Track a new job application
          </DialogDescription>
        </DialogHeader>

        <form className="mt-5 space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Company */}
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-slate-100"
              >
                Company <span className="text-pink-500">*</span>
              </label>

              <Input
                id="company"
                required
                placeholder="e.g. Google, Microsoft"
                className="h-11 border border-slate-700 bg-[#111B2A] text-sm text-slate-100 shadow-none transition-colors placeholder:text-slate-400 hover:border-slate-600 hover:shadow-none focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0"
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label
                htmlFor="position"
                className="text-sm font-medium text-slate-100"
              >
                Position <span className="text-pink-500">*</span>
              </label>

              <Input
                id="position"
                required
                placeholder="e.g. Software Engineer"
                className="h-11 border border-slate-700 bg-[#111B2A] text-sm text-slate-100 shadow-none transition-colors placeholder:text-slate-400 hover:border-slate-600 hover:shadow-none focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-medium text-slate-100"
              >
                Location
              </label>

              <Input
                id="location"
                placeholder="e.g. Remote, India"
                className="h-11 border border-slate-700 bg-[#111B2A] text-sm text-slate-100 shadow-none transition-colors placeholder:text-slate-400 hover:border-slate-600 hover:shadow-none focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0"
              />
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <label
                htmlFor="salary"
                className="text-sm font-medium text-slate-100"
              >
                Salary
              </label>

              <Input
                id="salary"
                placeholder="e.g. ₹15,000/month"
                className="h-11 border border-slate-700 bg-[#111B2A] text-sm text-slate-100 shadow-none transition-colors placeholder:text-slate-400 hover:border-slate-600 hover:shadow-none focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}