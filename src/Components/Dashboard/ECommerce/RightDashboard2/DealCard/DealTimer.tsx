/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { H6, LI, UL } from '../../../../../AbstractElements';
import { DealTimerType } from '../../../../../Types/Dashboard.type';

export default function DealTimer() {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setTimeout(function () {
            setStyle({ style: { display: "none" } });
        }, 1000);
    }, []);

    const renderer = ({ hours, minutes, seconds }: DealTimerType) => {
        return (
            <UL className="timer deal-timer simple-list flex-row">
                <LI>
                    <H6 className='f-20 f-w-600 txt-primary hours'>{hours}</H6>
                    <span className="f-12 f-w-500 f-light">Hours</span>
                </LI>
                <LI>
                    <H6 className='f-20 f-w-600 txt-primary minutes'>{minutes}</H6>
                    <span className="f-12 f-w-500 f-light">Min</span>
                </LI>
                <LI>
                    <H6 className='f-20 f-w-600 txt-primary seconds'>{seconds}</H6>
                    <span className="f-12 f-w-500 f-light">Sec</span>
                </LI>
            </UL>
        );
    };
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var countdown = new Date(year, month, day + 15).getTime();

    return <Countdown date={countdown} renderer={renderer} />;
};
