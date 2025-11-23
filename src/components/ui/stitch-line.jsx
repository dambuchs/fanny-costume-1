import React from "react";
import { cn } from "@/lib/utils";

const StitchLine = ({ className }) => {
  return (
    <div
      className={cn(
        "my-8 h-0.5 w-full border-t-2 border-dashed border-primary/30",
        className
      )}
      aria-hidden="true"
    />
  );
};

export default StitchLine;

