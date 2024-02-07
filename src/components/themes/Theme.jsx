import React from 'react'
import { ConfigProvider } from "antd"

function Theme({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#717fe0',
                    borderRadius: 2,
                    colorSplit:"black",

                    // Alias Token
                    colorBgContainer: '#f6ffed',
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default Theme