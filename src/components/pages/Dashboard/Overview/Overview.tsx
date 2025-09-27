import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";
import TrafficChart from "./TrafficChart";
import LinksTable from "./LinksTable";

export default function Overview () {
    return <div className="flex flex-col gap-sm">
        <section>
            <h2 className="text-2xl">Overview</h2>
            <div className="flex flex-col gap-sm">
                <Input placeholder="Paste a long URL here" withActionButton actionBtnText={'Shorten'} actionFn={() => {}}/>

                <div className="url-preview-table">
                    <div className="url-preview-table-head">
                        <p>Original URL</p>
                        <p>Short URL</p>
                        <p className="hidden laptop:flex">Clicks</p>
                        <p>Action</p>
                    </div>
                    <ul className="flex flex-col text-text-secondary">
                        <li className="url-preview-table-row">
                            <p className="text-nowrap overflow-hidden text-ellipsis">https://www.google.com/search?q=timer&oq=timer&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzQzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8</p>
                            <p>shortit.com/sk2ss</p>
                            <p className="hidden laptop:flex">288</p>
                            <NavigationLink className="text-md hover:text-accent-hover" to={'/[url-details-page]'}>Edit</NavigationLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="flex flex-col gap-sm">
            <h2 className="text-2xl">Statistics</h2>
            <TrafficChart />
            {/* <LineChart points={[
                { yAxis: 50, prevX: 0, prevY: 0, x: 200, y: 30, nextX: 20, nextY: 10},
                { yAxis: 50, prevX: 10, prevY: 30, x: 20, y: 10, nextX: 30, nextY: 20},
            
            ]} yAxis={50} yAxisPointsLength={4} xAxis={[new Date(2025, 9, 15), new Date(2025, 9, 16), new Date(2025, 9, 17), new Date(2025, 9, 18)]}  featuredStatistic={1225} statisticTitle="Total Clicks" /> */}
        </section>
        
        <section className="flex flex-col gap-sm">
            <h2 className="text-2xl">Your Links</h2>
            <LinksTable />
        </section>
    </div>
}