import { DashboardCard } from '../components/DashboardCard';
import { ActivityChart } from '../components/ActivityChart';
import { PieChartCard } from '../components/PieChartCard';

export function Analytics() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900  dark:text-gray-300">Analytics</h1>
        <p className="text-gray-600 mt-1">Detailed analysis of your performance</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Traffic Overview">
          <ActivityChart />
        </DashboardCard>
        <DashboardCard title="User Demographics">
          <PieChartCard />
        </DashboardCard>
      </div>
    </div>
  );
}