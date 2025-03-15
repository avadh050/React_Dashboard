import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { ActivityChart } from '../components/ActivityChart';
import { PieChartCard } from '../components/PieChartCard';

export function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your overview.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="2,543"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Sessions"
          value="1,123"
          icon={Activity}
          trend={{ value: 3, isPositive: false }}
        />
        <StatCard
          title="Growth Rate"
          value="24.8%"
          icon={TrendingUp}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Weekly Activity">
          <ActivityChart />
        </DashboardCard>
        
        <DashboardCard title="Device Distribution">
          <PieChartCard />
        </DashboardCard>
      </div>
    </div>
  );
}