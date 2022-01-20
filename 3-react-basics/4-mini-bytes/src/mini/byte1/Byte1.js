import React, { Component } from 'react';
import Box from './Box';
import Veg from './Veg';
import NonVeg from './NonVeg';

class Byte1 extends Component {
    render() {
        return (
            <div>
                <Box title="veg-box">
                    <Veg />
                    <Veg />
                    <Veg />
                </Box>
                <Box title="non-veg-box">
                    <NonVeg />
                    <NonVeg />
                </Box>
                <Box title="mixed-box">
                    <Veg />
                    <NonVeg />
                </Box>
            </div>
        );
    }
}
export default Byte1;