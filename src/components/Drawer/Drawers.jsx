import React, {useState} from 'react'
import { Drawer } from 'antd';

function Drawers({method, value, item}) {
   

    console.log(value);
    return (
        <Drawer title="Basic Drawer" onClose={method} open={value}>
            <p>{item}</p>
        </Drawer>
    )
}

export default Drawers