export interface LineI {
    width: number;
    yAxis: number;
    prevX: number;
    prevY: number;
    x: number;
    y: number;
    nextX: number;
    nextY: number;
}

export default function Line ({ width, yAxis, prevX, prevY, x, y, nextX, nextY }: LineI) {
    
    //finding distance between two points.
    const distanceExpression = (x - nextX) ** 2 + (y - nextY) ** 2
    const distanceBetweenCurrentAndNextCords = Math.sqrt(distanceExpression);
    
    //finding angle between two points.
    let angleBetweenCurrentAndNextCords = Math.round(Math.tan((nextY - y) / (nextX - x)) * 180 / Math.PI);

    if (angleBetweenCurrentAndNextCords < 0) {
        angleBetweenCurrentAndNextCords += 360
    }

    return <div style={{ width: width +'px', rotate: angleBetweenCurrentAndNextCords+'deg', top: yAxis - y +'px', left: x + prevX }} className={`absolute border-accent border-1 bg-accent`}>
        
    </div>
}