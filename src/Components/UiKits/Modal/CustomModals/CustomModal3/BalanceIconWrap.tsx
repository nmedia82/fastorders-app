import React from 'react'
import { Badges, H3, LI, UL } from '../../../../../AbstractElements'
import { balanceIconWrapData } from '../../../../../Data/UiKits/Modal'
import { ArrowDownRight, ArrowUpRight } from 'react-feather'

export default function BalanceIconWrap() {
    return (
        <UL className='simple-list flex-row'>
            {balanceIconWrapData.map((item) => (
                <LI key={item.id}>
                    <div className={`balance-item ${item.color}`}>
                        <div className="balance-icon-wrap">
                            <div className="balance-icon">
                                {item.id === 1 ? <ArrowDownRight /> : <ArrowUpRight />}
                            </div>
                        </div>
                        <div>
                            <span className="f-12 f-light">{item.text} </span>
                            <H3 className="f-w-600">{item.rate}{'K'}</H3>
                            <Badges color={`light-${item.color}`} pill>{item.badge}{'%'}</Badges>
                        </div>
                    </div>
                </LI>
            ))}
        </UL>
    )
}