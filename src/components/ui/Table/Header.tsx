type HeaderProps = { headerData: string[] }

export default function Header ({ headerData }: HeaderProps ) {
    if (!headerData || headerData.length === 0) throw Error('Table header data cannot be empty') 

    return <div className="table-head" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${headerData.length}, 1fr)`,
    }}>
        {headerData.map(d => <p>
            {d}
        </p>)}
    </div>
}