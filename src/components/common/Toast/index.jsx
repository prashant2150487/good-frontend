import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { toast } from "sonner";

export const showToast = (message) => {
  toast.custom((t) => (
    <div className="bg-white rounded shadow-md p-4 flex items-center justify-between w-full max-w-sm">
      <span className="text-gray-800">{message}</span>
      <Separator 
        orientation="vertical"
      />
      <button
        onClick={() => toast.dismiss(t)}
        className="ml-4 text-sm text-blue-600 hover:underline border-l-2 pl-2"
      >
        <X/>
      </button>
    </div>
  ),
  {
    duration: 100000, // in milliseconds (8000ms = 8s)
  }
);
};
