'use client';

import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Logo } from "@/components/shared/logo";
import { DashboardHeader } from "@/components/layout/dashboard-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
      <aside className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-16 items-center border-b px-6">
            <Logo />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SidebarNav />
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
