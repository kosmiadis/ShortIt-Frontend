type RowProps<T> = {
    rowData: T[];
}

export default function Row ({ rowData }: RowProps<any>) {
    console.log(rowData[0].length);
    return <li className="table-row grid" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${rowData.length}, 1fr)`
    }}>
        {rowData.map(d => <p className="w-full">
            {d}
        </p>)}
    </li>
}