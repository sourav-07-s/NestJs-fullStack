
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Plus } from "lucide-react";
import {Button} from "./ui/button"
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
      <DialogTrigger >
        
          <Button
            variant="outline"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <Plus className="h-4 w-4 text-pink-600" />
            Add Job
          </Button>
        
    </DialogTrigger>
      <DialogContent>
          
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>

         <form>
            <div>
                <div>
                    <div>
                        <label htmlFor="company" className="flex flex-row items-center">
                            Company <p className="text-red-500">*</p>
                        </label>
                        <Input id="company" required className="border shadow-none hover:shadow-none"></Input>
                    </div>
                    <div>
                        <label htmlFor="position" className="flex flex-row items-center">
                            Position <p className="text-red-500">*</p>
                        </label>
                        <Input id="position" required className="border shadow-none hover:shadow-none"></Input>
                    </div>
                    <div>
                        <label htmlFor="location" className="flex flex-row items-center">
                            Location
                        </label>
                        <Input id="location" required className="border shadow-none hover:shadow-none"></Input>
                    </div>
                    <div>
                        <label htmlFor="salary" className="flex flex-row items-center">
                            Salary
                        </label>
                        <Input id="salary" required className="border shadow-none hover:shadow-none"></Input>
                    </div>
                    
                </div>
            </div>
         </form>
        
      </DialogContent>
    </Dialog>
  );
}
