import React from "react";
import victory from 'victory';
import {
    VictoryBar, 
    VictoryChart, 
    VictoryLine,
    VictoryPie,
} from 'victory';

function App(){

    return(
        
            <div className='App'>
                <h1>The Most Basic Example</h1>
                <VictoryChart>
                    <VictoryBar
                        style={{ data: { fill: '#6db65b'}}}
                        data={[
                            { x:'lizard', y: 1234 },
                            { x:'snake', y: 2048 },
                            { x: 'crocodile', y: 2600 },
                            { x: 'alligator', y: 9000 },
                        ]}
                    />
                </VictoryChart>
                <VictoryChart>
                    <VictoryLine/>
                </VictoryChart>
                <VictoryPie
                    colorScale={[ '#008f68', '#6db65b', '4aae9b', 'efbb35']}
                    data={[
                        { x: 'lizard', y: 1234 },
                        { x: 'snake', y: 2048 },
                        { x: 'crocodile', y: 2600 },
                        { x: 'alligator', y: 9000 },
                    ]}
                />
            </div>
        
       
    )
}

export default App;