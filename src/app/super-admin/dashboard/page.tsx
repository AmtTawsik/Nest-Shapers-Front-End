import Link from 'next/link';

function SuperAdminDashboardPage() {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="text-center">
        <h1 className=" text-2xl text-teal-950 font-bold mb-8">
          Welcome to your Dashboard
        </h1>
        <Link
          href="/super-admin/my-profile"
          className="px-12 py-3 mt-4 bg-teal-700 text-white rounded-md"
        >
          Your Profile
        </Link>
      </div>
    </div>
  );
}

export default SuperAdminDashboardPage;
