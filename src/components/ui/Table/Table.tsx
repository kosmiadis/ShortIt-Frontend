import Footer from "./Footer";
import Header from "./Header";
import Rows from "./Rows";

interface TableProps {
    headerData: string[],
    data: any[][],
}

// type TableProps = { headerData: T[], data: any[] }

export default function Table({ headerData, data }: TableProps) {

    if (headerData.length !== data[0].length) throw Error('Header data and data must have the same size');

    return <div style={{
        overflowX: 'hidden',
        gridTemplateColumns: `repeat(${headerData.length}, 1fr)`
}} className="w-full table overflow-x-scroll">
        <Header headerData={headerData}/>
        <Rows rowData={data} />
        {/* <Footer /> */}
    </div>
}