import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

function Resume({ income, expense, saldo }) {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem title="Saldo" Icon={FaDollarSign} value={saldo} />
        </C.Container>
    )
}

export default Resume
