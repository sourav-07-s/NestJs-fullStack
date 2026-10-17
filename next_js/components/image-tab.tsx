
"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";



export default function ImageTab() {
  const [activeTab, setActiveTab] = useState("Organize Applications");

  return (
    <section className="border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
            <Button
              onClick={() => setActiveTab("Organize Applications")}
              className={`rounded-full px-5 py-2 text-base transition-all duration-200 ${
                activeTab === "Organize Applications"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "border border-white/15 bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Organize Applications
            </Button>

            <Button
              onClick={() => setActiveTab("Get Hired")}
              className={`rounded-full px-5 py-2 text-base transition-all duration-200 ${
                activeTab === "Get Hired"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "border border-white/15 bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Get Hired
            </Button>

            <Button
              onClick={() => setActiveTab("Manage Boards")}
              className={`rounded-full px-5 py-2 text-base transition-all duration-200 ${
                activeTab === "Manage Boards"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "border border-white/15 bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Manage Boards
            </Button>
          </div>

          {/* Hero images */}
          <div className="relative mx-auto mt-3 max-w-5xl overflow-hidden rounded-xl border border-white/10 shadow-xl">
            {activeTab === "Organize Applications" && (
              <Image
                src="/hero-images/hero-1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
                priority
              />
            )}

            {activeTab === "Get Hired" && (
              <Image
                src="/hero-images/hero-2.png"
                alt="Get Hired"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
              />
            )}

            {activeTab === "Manage Boards" && (
              <Image
                src="/hero-images/hero-3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
