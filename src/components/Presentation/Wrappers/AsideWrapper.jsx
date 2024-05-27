import React from 'react'

export default function AsideWrapper({ children, ...props }) {
    return <aside {...props}>{children}</aside>
}