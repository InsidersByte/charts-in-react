# Charts in React

These are the code examples from my talk on Charts in React with D3.

* View the slides: http://bit.ly/2j1rcNZ

All of the examples are created using [create-react-app](https://github.com/facebookincubator/create-react-app) and 
they upon the previous one to add more functionality.

# Pie Chart 

Created from by https://bl.ocks.org/mbostock/3887235.

### 1. [pie-chart-basic](https://github.com/InsidersByte/charts-in-react/tree/master/pie-chart-basic)

This implements the Pie Chart as a Component that renders the static DOM output from the D3 example.

### 2. [pie-chart](https://github.com/InsidersByte/charts-in-react/tree/master/pie-chart)

This extends the Component to allow the data to be passed as props.

### 3. [pie-chart-responsive](https://github.com/InsidersByte/charts-in-react/tree/master/pie-chart-responsive)

This extends the Component to resize when the window resizes.

# Circle Dragging

Created from by https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e.

### 1. [circle-dragging](https://github.com/InsidersByte/charts-in-react/tree/master/circle-dragging)

This implements the basic React version of the D3 chart.

### 2. [circle-dragging-bounded](https://github.com/InsidersByte/charts-in-react/tree/master/circle-dragging-bounded)

This extends the chart to only allow circles to be dragged within the SVG.

### 3. [circle-dragging-redux](https://github.com/InsidersByte/charts-in-react/tree/master/circle-dragging-redux)

This extends the application to store the circles state in Redux.

### 3. [circle-dragging-undo-redo](https://github.com/InsidersByte/charts-in-react/tree/master/circle-dragging-undo-redo)

This extends the application to add undo and redo buttons.
