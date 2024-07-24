import React from 'react'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { CommonYuriModalTitleType } from '../../../../../Types/UiKits.type'

export default function CommonYuriModalTitle({ heading, subHeading, text }: CommonYuriModalTitleType) {
  return (
    <>
      <UL className="dot-group pb-3 pt-0 simple-list flex-row">
        <LI />
        <LI />
        <LI />
      </UL>
      <div className="title-wrapper pb-3 modal-heading">
        <H5 className="theme-name mb-0">
          <span>{heading}</span> {subHeading}
        </H5>
        <P>{text}</P>
      </div>
    </>
  )
}