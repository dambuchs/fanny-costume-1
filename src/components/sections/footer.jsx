"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaCodeBranch, FaRegStar } from "react-icons/fa6";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [repoDetails, setRepoDetails] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    setYear(new Date().getFullYear());

    const fetchRepoDetails = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/repos/rcortiz/my-portfolio-v2",
        );
        setRepoDetails({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching repository details:", error);
        setRepoDetails({ stars: 0, forks: 0 });
      }
    };
    fetchRepoDetails();
  }, []);

  return (
    <footer className="container mb-6 flex w-full flex-col-reverse items-center justify-center gap-y-4 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-y-1 text-center md:text-start">
        <span className="font-cera text-xs">
        </span>
        <a href="https://rocketstar.ch" target="_blank" rel="noopener noreferrer">
          <span className="font-cera text-xs">&copy; {year} Rocket Star | Design & Développement</span>
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;
