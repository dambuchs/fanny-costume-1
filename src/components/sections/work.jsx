import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import StitchLine from "@/components/ui/stitch-line";
import { FaTshirt } from "react-icons/fa"; // Using generic icon if Tshirt not in fa6, but fa6 usually has generic FaTshirt or similar. Actually let's stick to safe icons.
import { FaMasksTheater } from "react-icons/fa6";

const works = [
  {
    title: "Hamlet",
    category: "Shakespeare",
    year: "2023",
    image: "https://placehold.co/600x400/2a2a2a/FFF?text=Hamlet+Production",
    description: "Costume design for the 2023 production of Hamlet at the Royal Theatre. emphasizing the psychological state through fabric texture.",
  },
  {
    title: "The Phantom of the Opera",
    category: "Musical",
    year: "2022",
    image: "https://placehold.co/600x400/5a1a1a/FFF?text=Phantom+Masquerade",
    description: "Intricate period costumes for the masquerade scene, featuring hand-embroidered details and velvet layers.",
  },
  {
    title: "A Midsummer Night's Dream",
    category: "Fantasy",
    year: "2021",
    image: "https://placehold.co/600x400/1a5a1a/FFF?text=Midsummer+Fairies",
    description: "Ethereal and organic designs for the fairies, utilizing natural dyes and translucent silks.",
  },
  {
    title: "Les Misérables",
    category: "Historical",
    year: "2020",
    image: "https://placehold.co/600x400/1a1a5a/FFF?text=Les+Mis+Barricade",
    description: "Gritty and realistic 19th-century French costumes, heavily distressed for authenticity.",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 relative">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <FaMasksTheater size={24} />
        </div>
        <h2 className="text-4xl font-bold uppercase tracking-wider mb-4">Selected Portfolio</h2>
        <StitchLine className="max-w-[200px] mx-auto" />
        <p className="mt-6 text-muted-foreground font-serif text-lg italic">
          "A collection of characters, fabrics, and stories told through design."
        </p>
      </div>
      
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto px-6">
        {works.map((work, index) => (
          <div key={index} className="group relative">
            {/* Card Background/Frame */}
            <div className="absolute inset-0 bg-card border-2 border-muted transform transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02] shadow-sm"></div>
            
            <Card className="relative h-full overflow-hidden border-none bg-transparent shadow-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden p-4">
                <div className="h-full w-full overflow-hidden relative">
                     <img
                        src={work.image}
                        alt={work.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-sm border border-dashed border-primary/20">
                        {work.year}
                    </div>
                </div>
              </div>
              
              <CardHeader className="pt-2 pb-2 px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary group-hover:underline decoration-dashed underline-offset-4">{work.title}</h3>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {work.category}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <p className="text-muted-foreground leading-relaxed border-l-2 border-secondary pl-4 text-sm">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
         <p className="text-sm text-muted-foreground">More works available upon request.</p>
      </div>
    </section>
  );
};

export default Work;
