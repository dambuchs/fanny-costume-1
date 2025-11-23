"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/layout/contact-dialog";
import StitchLine from "@/components/ui/stitch-line";

const Hero = () => {
  return (
    <section id="hero" className="flex min-h-[85vh] flex-col justify-center py-10 relative overflow-hidden">

      <div className="mx-auto flex flex-col items-center gap-12 text-center md:w-[1100px] md:flex-row md:text-start">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 relative">
          {/* Decorative stitch above title */}
          <div className="w-24 h-1 bg-primary/20 mx-auto md:mx-0 mb-4"></div>

          <h1 className="font-cera text-6xl font-bold leading-tight tracking-tight md:text-8xl text-primary">
            Fanny<br/>Buchs
          </h1>
          <div className="flex items-center justify-center gap-4 md:justify-start text-secondary font-bold tracking-widest uppercase text-sm">
            <span>Costume</span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span>Design</span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span>Création</span>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:mx-0 font-serif italic">
            &quot;L&apos;habit ne fait pas le moine, mais il fait le personnage.&quot;
          </p>
          <p className="max-w-lg text-base text-muted-foreground md:mx-0">
             Costumière basée à Lausanne, Suisse. Spécialisée dans le théâtre, la danse, le cirque et le court-métrage.
          </p>
          
          <div className="flex flex-col justify-center gap-4 pt-4 md:flex-row md:justify-start">
            <ContactDialog />
            <a href="#work">
              <Button variant="ghost" size="lg" className="border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5">
                Voir Portfolio
              </Button>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative h-[450px] w-[350px] md:h-[550px] md:w-[420px]">
            {/* Frame Layers */}
            <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border-2 border-dashed border-secondary translate-x-2 translate-y-2"></div>
            
            {/* Main Image Container */}
            <div className="relative h-full w-full overflow-hidden bg-muted shadow-xl">
               <img 
                src="https://placehold.co/420x550/800000/FFF?text=Fanny+Portrait" 
                alt="Fanny Buchs Costumière"
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
              />
              {/* Overlay Texture */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none"></div>
            </div>
            
            {/* Floating Detail */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 shadow-lg border border-dashed border-primary/30 max-w-[150px]">
                <p className="font-cera text-xs text-primary uppercase tracking-wider">Dernière Production</p>
                <p className="text-sm font-bold">Macbeth, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 flex flex-col items-center justify-center opacity-40 animate-bounce gap-2">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-[1px] bg-primary"></div>
      </div>
    </section>
  );
};

export default Hero;
