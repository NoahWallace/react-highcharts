#### Version 0.1.0

## Available Components

```
<Chart id={string: Required} config={highchartsObject: Required} />
```

Pass the highcharts object into the component and highcharts works exactly as in a vanilla js or jquery application.
for non-typescript applications pull in the js file using 
`import {Chart} from 'react-highcharts-ts/dist/react-highcharts-ts';`

otherwise use `import {Chart} from 'react-highcharts-ts';`]

## Next Build

Will contain a pie chart with a center label. This label will be able to pass in an html template and will be responsive to label filters (onClick)