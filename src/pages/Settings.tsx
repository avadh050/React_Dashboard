export function Settings() {
  return (
    <div className="p-8 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your account preferences
        </p>
      </header>

      <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Profile Settings
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Notifications
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                />
                <label className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                  Email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                />
                <label className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                  Push notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}