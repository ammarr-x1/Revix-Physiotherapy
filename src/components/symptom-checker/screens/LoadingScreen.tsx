import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 max-w-md mx-auto text-center animate-in fade-in duration-300">
      <div className="relative size-14 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-muted border-t-cyan-600 animate-spin" />
      </div>
      <p className="text-muted-foreground text-sm sm:text-base font-medium">
        Looking at what you've shared and matching you with the right care...
      </p>
    </div>
  );
}
