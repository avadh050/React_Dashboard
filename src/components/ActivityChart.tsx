import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

export function ActivityChart() {
  return (
    <div className="h-[300px] w-full bg-white dark:bg-slate-600 transition-colors duration-200">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e5e7eb" 
            className="dark:stroke-gray-500"
          />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            className="dark:stroke-gray-300"
          />
          <YAxis 
            stroke="#6b7280"
            className="dark:stroke-white"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              color: '#374151'
            }}
            wrapperClassName="dark:[&>div]:bg-gray-900 dark:[&>div]:border-gray-700 dark:[&>div]:text-gray-300"
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            fill="#93c5fd"
            className="dark:stroke-blue-500 dark:fill-blue-500/30"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}