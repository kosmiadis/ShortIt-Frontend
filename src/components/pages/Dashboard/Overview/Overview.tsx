import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";
import Table from "@components/ui/Table/Table";
import DashboardSection from "@components/ui/DashboardSection";
// import LineChart from "@components/ui/LineChart/LineChart";

export default function Overview () {
    return <div className="flex flex-col gap-sm overflow-hidden">
        
        <DashboardSection title="Overview">
            <Input placeholder="Paste a long URL here" withActionButton actionBtnText={'Shorten'} actionFn={() => {}}/>
        </DashboardSection>

        {/* <DashboardSection title="Statistics">
            <TrafficChart />
        </DashboardSection> */}
{/* 
        <DashboardSection title="Statistics">
            <LineChart statisticTitle={undefined} featuredStatistic={undefined} yAxis={undefined} yAxisPointsLength={undefined} scaleX={undefined} xAxis={undefined} points={undefined}  />
        </DashboardSection> */}

        <DashboardSection title="Your Links">
            <Table headerData={['Original URL', 'Short URL', 'Clicks', 'Action']} data={[
                ['http:asdfasdf', 'shortIt/sk2k', 5, <NavigationLink to={''}>Edit</NavigationLink>]
            ]}/>
        </DashboardSection>
    </div>
}