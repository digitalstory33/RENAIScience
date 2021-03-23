// bar chart codes:
const svg= d3.select("canvas")
.append('svg')
.attr("height",600)
.attr("width", 600);

const margin={top:20, right:20, bottom:100, left:20}
const graphWidth= 600-margin.left-margin.right;
const graphHeight=600-margin.top-margin.bottom;

const graph=svg. append('g')
.attr('width', graphWidth)
.attr('height', graphHeight)
.attr('transform','translate(${margin.left},${margin.top})')


d3.json("bar.json").then(data)=> {

const rects=graph.selectAll('rect')
.data('data')

rects.attr('width',x.bandwidth)
.attr('height', d=> graphHeight-y(d.'tot_sum'))
.attr('fill','orange')
.attr('x', d=>x(d."decade")
.attr('y', d=> y(d.'tot_sum'))

rects.enter()
.append('rect')
.attr('width',x.bandwidth)
.attr('height', d=>graphHeight-y(d.'tot_sum'))
.attr('fill','orange')
.attr('x', d=>x(d."decade"))
.attr('y', d=> y(d.'tot_sum'))

const y= d3.scaleLinear()
.domain([0,d3.max(data, d=>d.'tot_sum')])
.range(graphHeight,0)

const x= d3.scaleBand()
.domain([data.map(item=> item.'decade')])
.range([0,15])
.paddingInner(0.2)
.paddingOuter(0.2)

const xAxisGroup=graph.append('g');
.attr('transform', translate(0,${graphHeight}))
const yAxisGroup= group.append('g');

const xAxis=d3.axisBottom(x);
const yAxis= d3.axisLeft(y)
.tick(6)
;

xAxisGroup.call(xAxis);
yAxisGroup.call(yAxis);


})
