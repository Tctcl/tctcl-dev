'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
      <div className="min-h-screen bg-black text-white font-mono p-6">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
          <h1 className="text-3xl font-bold text-cyan-400">tctcl</h1>
        </header>

        <main className="mt-16 flex flex-col gap-12 max-w-4xl mx-auto">
          <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">hi, i’m tctcl</h2>
            <p className="text-lg text-gray-400">
              i build janky tech, code weird projects, make music that slaps (kinda), and create cursed 3D things. chaos is the point.
            </p>
            <p className="text-md text-cyan-400">
              currently working on: my sanity. and also this website.
            </p>
          </motion.section>

          <section className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-6 space-y-2">
                <Terminal className="text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">code & dev</h3>
                <p className="text-sm text-gray-400">
                  apps, scripts, weird utilities. sometimes it compiles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-6 space-y-2">
                <Terminal className="text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">3d & design</h3>
                <p className="text-sm text-gray-400">
                  cursed models and semi-functional objects from blender and beyond.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-6 space-y-2">
                <Terminal className="text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">music</h3>
                <p className="text-sm text-gray-400">
                  synthy, crunchy, sometimes scary. available nowhere.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-6 space-y-2">
                <Terminal className="text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">chaos projects</h3>
                <p className="text-sm text-gray-400">
                  random builds, cursed gadgets, tech gone wrong — intentionally.
                </p>
              </CardContent>
            </Card>
          </section>

          <footer className="text-center pt-10 text-gray-600 text-sm border-t border-white/10">
            <p>© {new Date().getFullYear()} tctcl. glitch not a bug.</p>
          </footer>
        </main>
      </div>
  );
}
