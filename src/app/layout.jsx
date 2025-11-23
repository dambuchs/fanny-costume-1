import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
// import CommandPalette from "@/components/layout/command-palette";

import "./globals.css";
import { inter, roboto, ceraRoundPro } from "@/utils/fonts";
// import { useCommandPaletteStore } from "@/store/store";

export const metadata = {
  title: {
    default: "Fanny Costume",
    template: "Fanny Costume | %s",
  },
  description:
    "Theater costume designer specializing in historical accuracy and avant-garde theatrical costume design.",
  keywords: [
    "Costume Design",
    "Theater",
    "Fabrication",
    "Historical Costume",
    "Stage Design",
  ],
  authors: [
    {
      name: "Fanny Costume",
      url: "https://fanny-costume.com",
    },
  ],
  creator: "Fanny Costume",
};

export default function RootLayout({ children }) {
  // const { toggle } = useCommandPaletteStore();

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       ((e.metaKey || e.ctrlKey) && e.key === "k") ||
  //       ((e.metaKey || e.ctrlKey) && e.key === "K")
  //     ) {
  //       e.preventDefault();
  //       toggle();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [toggle]);
  return (
    <html lang="en">
      <body className={`${inter} ${roboto} ${ceraRoundPro}`}>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main>{children}</main>
          <Toaster />
          {/* <CommandPalette /> */}
          {/* <div className="flex justify-center pb-6">
            <motion.div
              className="cursor-pointer rounded-full bg-background/80 px-4 py-2 backdrop-blur-sm"
              onClick={toggle}
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.04, opacity: 1, duration: 0.8 }}
            >
              <p className="text-xs text-primary">
                Press
                <code className="mx-2 rounded bg-gray-200 px-2 py-1 text-gray-800">
                  ⌘ + K
                </code>
                to open command palette
              </p>
            </motion.div>
          </div> */}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
