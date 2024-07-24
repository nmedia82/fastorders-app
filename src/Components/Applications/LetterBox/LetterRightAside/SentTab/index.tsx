import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { Badges, Image, LI, P, UL } from '../../../../../AbstractElements';
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { dynamicImage } from '../../../../../Utils';
import { handleEnvelope, handleInterview } from '../../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import { sentEmailData } from '../../../../../Data/Applications/LetterBox';

export default function SentTab() {
    const dispatch = useDispatch();
    const { faIcon } = useSelector((state: RootState) => state.email);
    const [fill, setFill] = useState(false)
    const handleValue = () => dispatch(handleInterview(true))

    return (
        <div className="mail-body-wrapper">
            <UL className='simple-list'>
                {sentEmailData.map((item, i) => (
                    <LI className="inbox-data" key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <SvgIcon className={`important-mail ${fill ? "active" : ""}`} iconId="fill-star" onClick={() => setFill(!fill)} />
                            <div className="rounded-border">
                                {item.image && <Image src={dynamicImage(`user/${item.image}`)} alt="user" />}
                                {item.shortName && <div className={item.color === "success" ? "circle-success" : ""}>
                                    <P className={`txt-${item.color}`}>{item.shortName}</P>
                                </div>}
                            </div>
                            <P>{item.name}</P>
                        </div>
                        <div className="inbox-message">
                            <div className="email-data">
                                <span>
                                    {item.message}
                                    <span>{item.subMessage}</span>
                                </span>
                                {item.badge &&
                                    item.badge.map((data: any, i: number) => (
                                        <Badges color={`light-${data.color}`} key={i} onClick={handleValue}> {data.title} </Badges>
                                    ))}
                            </div>
                            <div className="email-timing">
                                <span>{item.time}</span>
                            </div>
                            <div className="email-options">
                                <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                                <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                                <i className="fa fa-trash-o trash-3" />
                                <i className="fa fa-print" />
                            </div>
                        </div>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
