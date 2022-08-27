import React from 'react'
import * as C from './styles'

function ResumeItem({ title, Icon, value }) {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color="#ca3459" />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    )
}

export default ResumeItem
