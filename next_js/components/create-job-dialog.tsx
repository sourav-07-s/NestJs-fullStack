
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface createJobDialogProps {
  columnId: string;
  boardId: string;
}

const inputClass =
  "h-11 w-full rounded-lg border border-slate-700 bg-[#111B2A] px-3 text-sm text-slate-100 shadow-none transition-colors placeholder:text-slate-400 hover:border-slate-600 focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0";

const textareaClass =
  "h-24 w-full resize-none rounded-lg border border-slate-700 bg-[#111B2A] px-3 py-2.5 text-sm leading-relaxed text-slate-100 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-600 focus-visible:border-pink-500 focus-visible:ring-1 focus-visible:ring-pink-500/40";

const labelClass = "text-sm font-medium text-slate-100";

export default function CreateJobDialog({
  columnId,
  boardId,
}: createJobDialogProps) {
  return (
    <Dialog>
      
<DialogTrigger className="inline-flex h-14.5 w-full items-center justify-start gap-4 rounded-xl border border-dashed border-slate-600/80 bg-transparent px-4 text-base font-medium text-slate-300 shadow-none transition-all hover:border-pink-500/70 hover:bg-pink-500/5 hover:text-white hover:shadow-none">
  <Plus className="h-7 w-7 text-pink-500" />
  Add Job
</DialogTrigger>


      <DialogContent className="w-[90vw]! max-w-3xl! rounded-2xl border border-slate-700/80 bg-[#080F1C] p-6 text-slate-100 shadow-[0_0_35px_rgba(236,72,153,0.10)]">
        {/* Header */}
        <DialogHeader className="shrink-0 space-y-2">
          <DialogTitle className="text-2xl font-bold tracking-tight text-white">
            Add Job Application
          </DialogTitle>

          <DialogDescription className="text-sm text-slate-400">
            Track a new job application
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form className="mt-2 flex flex-col gap-5">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className={labelClass}>
                Company <span className="text-pink-500">*</span>
              </label>

              <Input
                id="company"
                name="company"
                required
                placeholder="e.g. Google, Microsoft"
                className={inputClass}
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label htmlFor="position" className={labelClass}>
                Position <span className="text-pink-500">*</span>
              </label>

              <Input
                id="position"
                name="position"
                required
                placeholder="e.g. Software Engineer"
                className={inputClass}
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className={labelClass}>
                Location
              </label>

              <Input
                id="location"
                name="location"
                placeholder="e.g. Remote, India"
                className={inputClass}
              />
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <label htmlFor="salary" className={labelClass}>
                Salary
              </label>

              <Input
                id="salary"
                name="salary"
                placeholder="e.g. ₹1,50,000/month"
                className={inputClass}
              />
            </div>

            {/* Job URL */}
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="job-url" className={labelClass}>
                Job URL
              </label>

              <Input
                id="job-url"
                name="jobUrl"
                type="url"
                placeholder="e.g. https://www.example.com/job"
                className={inputClass}
              />
            </div>

            {/* Tags */}
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="tags" className={labelClass}>
                Tags (comma separated)
              </label>

              <Input
                id="tags"
                name="tags"
                placeholder="Frontend, Backend, Fullstack, React, Next.js, Node.js, Remote"
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="description" className={labelClass}>
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="e.g. We are looking for a talented developer to join our team."
                className={textareaClass}
              />
            </div>

            {/* Notes */}
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="job-notes" className={labelClass}>
                Notes
              </label>

              <textarea
                id="job-notes"
                name="notes"
                rows={3}
                placeholder="e.g. Interview details, recruiter contact, follow-up dates..."
                className={textareaClass}
              />
            </div>

          </div>

          {/* Footer */}
          <DialogFooter className="mx-0 mb-0 flex-row justify-end gap-3 border-t border-slate-800 bg-transparent px-0 pt-4 sm:flex-row sm:justify-end">

            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-xl border-slate-700 bg-[#111B2A] px-5 text-slate-300 transition-colors hover:border-slate-600 hover:bg-red-800 hover:text-white"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-10 rounded-xl bg-pink-600 px-5 font-medium text-white shadow-none transition-all hover:bg-pink-500"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Application
            </Button>

          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
