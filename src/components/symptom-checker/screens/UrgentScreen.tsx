import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";

interface UrgentScreenProps {
  onReset: () => void;
}

export default function UrgentScreen({ onReset }: UrgentScreenProps) {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 animate-in fade-in duration-300">
      <div className="bg-[#fff7f2] border border-[#f3c8ad] rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3 text-amber-700">
          <AlertTriangle className="size-8 shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold font-poppins">This may need urgent attention</h2>
        </div>
        
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          Based on what you've shared, this isn't something to wait on for a routine physio appointment. Please contact emergency services or go to your nearest hospital/ER now if symptoms are severe — or call Revix directly and our team will advise you on next steps.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold flex items-center justify-center gap-2">
            <a href="tel:+923251510459">
              <Phone className="size-4 mr-1" /> Call Revix Now
            </a>
          </Button>
          <Button asChild className="rounded-full bg-[#149a82] hover:bg-[#118570] text-white font-semibold flex items-center justify-center gap-2">
            <a href="https://wa.me/923251510459" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.906-6.99C16.255 1.876 13.779 1.84 11.144 1.84 5.707 1.84 1.282 6.261 1.278 11.705c-.001 1.714.46 3.39 1.333 4.887L1.625 22.29l5.022-1.317zm11.503-4.757c-.292-.146-1.727-.853-1.993-.95-.266-.097-.46-.146-.653.146-.193.292-.748.95-.917 1.142-.169.193-.339.218-.63.072-1.332-.667-2.222-1.168-3.111-2.695-.266-.456.266-.423.762-1.417.083-.169.041-.318-.021-.444-.063-.127-.542-1.306-.743-1.787-.196-.47-.41-.406-.562-.413-.146-.007-.313-.008-.48-.008-.167 0-.438.063-.667.313-.229.25-1.17 1.144-1.17 2.79 0 1.646 1.198 3.238 1.365 3.46.167.221 2.358 3.599 5.712 5.048.798.344 1.422.55 1.908.706.802.254 1.533.218 2.11.134.644-.093 1.727-.706 1.972-1.39.245-.683.245-1.27.172-1.39-.073-.121-.266-.192-.559-.338z" />
              </svg>
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Button variant="ghost" onClick={onReset} className="font-semibold text-muted-foreground hover:bg-muted">
          Start Over
        </Button>
      </div>
    </div>
  );
}
