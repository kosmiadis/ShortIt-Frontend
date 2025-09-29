import Row from "./Row"

type RowsProps = { rowData: any[][] }

export default function Rows ({ rowData }: RowsProps) {
    return <ul className="flex flex-col text-text-secondary">
        {rowData.map(d => <Row rowData={d} />)}
    </ul>
} 