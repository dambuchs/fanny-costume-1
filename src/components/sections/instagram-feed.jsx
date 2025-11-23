"use client";

import React, { useState, useEffect } from "react";
import StitchLine from "@/components/ui/stitch-line";
import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const STATIC_POSTS = [
  {
    id: 1,
    image: "https://placehold.co/600x600/2a2a2a/FFF?text=Sketching",
    link: "https://www.instagram.com",
    caption: "Late night sketching session ✏️ #costume #design",
  },
  {
    id: 2,
    image: "https://placehold.co/600x600/5a1a1a/FFF?text=Fabric+Sourcing",
    link: "https://www.instagram.com",
    caption: "Found the perfect velvet for the queen's gown! 👑",
  },
  {
    id: 3,
    image: "https://placehold.co/600x600/1a5a1a/FFF?text=Fittings",
    link: "https://www.instagram.com",
    caption: "First fitting went great today. The silhouette is coming together.",
  },
  {
    id: 4,
    image: "https://placehold.co/600x600/1a1a5a/FFF?text=Backstage",
    link: "https://www.instagram.com",
    caption: "Chaos behind the scenes before opening night! 🎭",
  },
  {
    id: 5,
    image: "https://placehold.co/600x600/5a5a1a/FFF?text=Details",
    link: "https://www.instagram.com",
    caption: "It's all in the details. Hand embroidery work in progress.",
  },
  {
    id: 6,
    image: "https://placehold.co/600x600/3a3a3a/FFF?text=Inspiration",
    link: "https://www.instagram.com",
    caption: "Moodboard for the upcoming project. 📸",
  },
];

const InstagramFeed = () => {
  const [posts, setPosts] = useState(STATIC_POSTS);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) return;
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const formattedPosts = data.data.map((post) => ({
            id: post.id,
            image: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
            link: post.permalink,
            caption: post.caption || "",
          })).slice(0, 6);
          
          setPosts(formattedPosts);
        }
      } catch (error) {
        console.log("Using static Instagram data (API not configured or failed)");
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="instagram" className="py-20 relative bg-secondary/5">
      <div className="mb-12 text-center max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-primary mb-4">
          <FaInstagram size={28} />
        </div>
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
          Suivre le Processus
        </h2>
        <StitchLine className="max-w-[200px] mx-auto" />
        <p className="mt-6 text-muted-foreground text-lg">
          Dans les coulisses, croquis et inspiration quotidienne.
        </p>
        <Button
          variant="link"
          className="mt-2 text-primary font-bold tracking-widest uppercase hover:no-underline group"
          asChild
        >
          <a
            href="https://www.instagram.com/fanny.costumes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fanny.costumes
            <FaExternalLinkAlt className="ml-2 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden block"
          >
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 z-10 flex items-center justify-center">
              <FaInstagram className="text-white opacity-0 transform scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" size={32} />
            </div>
            <img
              src={post.image}
              alt={post.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
