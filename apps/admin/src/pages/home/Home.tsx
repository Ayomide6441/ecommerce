import DashboardCard from "@/components/common/dashboard-card";

function Home() {
  return (
    <div className=" space-y-10 w-full">
      {/* Top Row */}
      <div className="grid grid-cols-3 gap-10">
        <DashboardCard>
          <DashboardCard.Header
            title="Total Sales"
            right="4,235"
            subtitle="This Month"
          />
          <DashboardCard.Footer>Test</DashboardCard.Footer>
        </DashboardCard>

        <DashboardCard>
          <DashboardCard.Header
            title="Customers"
            right="2,571"
            subtitle="This Month"
          />
          <DashboardCard.Footer>Test</DashboardCard.Footer>
        </DashboardCard>

        <DashboardCard>
          <DashboardCard.Header
            title="Orders"
            right="734"
            subtitle="Monthly Goals: 1000"
          />
          <DashboardCard.Footer>Test</DashboardCard.Footer>
        </DashboardCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-10">
        <DashboardCard>
          <DashboardCard.Header title="Best Selling" subtitle="This Month" />
          <DashboardCard.Content>Test</DashboardCard.Content>
          <DashboardCard.Footer>
            <p>266 Left</p>
          </DashboardCard.Footer>
        </DashboardCard>
        <div className="bg-white rounded-md border p-5 lg:col-span-2">
          Recent Orders
        </div>
      </div>
    </div>
  );
}

export default Home;
