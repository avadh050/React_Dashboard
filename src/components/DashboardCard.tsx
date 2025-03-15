import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
}

export function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6  dark:bg-slate-600">
      <h2 className="text-xl font-semibold mb-4 text-gray-800  dark:text-gray-300">{title}</h2>
      {children}
    </div>
  );
}