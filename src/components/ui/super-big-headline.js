import React from 'react'

const SuperBigHeadline = ({ children }) => {
    return (
        <h1 style={{
            fontSize: "200px"
        }}>
            {children}
        </h1>
    )
}

export default SuperBigHeadline