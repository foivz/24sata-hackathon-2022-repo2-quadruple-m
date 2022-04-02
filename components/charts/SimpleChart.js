import React, {PureComponent} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


export default function ({data}) {
    return (
        <>
            <h1 className="font-medium text-2xl text-center">
                Graf troškova u odnosu na prihod
            </h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="prihod" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="trosak" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </>

    );
}
