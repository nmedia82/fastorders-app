import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import { Badges, H6, Image, P, Ribbon } from '../../../../../AbstractElements';
import { fetchJobSearchData } from '../../../../../ReduxToolkit/Reducers/JobSearchReducer';
import { AppDispatch, RootState } from '../../../../../ReduxToolkit/Store';
import { JobSearchItems, RightSidebarCardProps } from '../../../../../Types/Miscellaneous.type';
import { dynamicImage } from '../../../../../Utils';
import { Href } from '../../../../../Utils/Constants';
import PaginationCard from './PaginationCard';

export default function RightSidebarCards({ limit, colClass }: RightSidebarCardProps) {
    const { jobList } = useSelector((state: RootState) => state.jobSearch);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchJobSearchData()); }, [dispatch]);
    return (
        <>
            {jobList.slice(0, limit).map((item: JobSearchItems, i: number) => (
                <div className={colClass} key={i}>
                    <Card className={item.ribbon ? "ribbon-vertical-left-wrapper" : ""}>
                        {item.ribbon && (
                            <Ribbon className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary">
                                <i className="icofont icofont-love"></i>
                            </Ribbon>
                        )}
                        <div className="job-search">
                            <CardBody>
                                <div className="d-flex">
                                    <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/${item.logo}`)} alt="" />
                                    <div className="flex-grow-1">
                                        <H6 className="f-w-600">
                                            <a href={Href}>{item.job_name}</a>
                                            {item.badgeValue ?
                                                (
                                                    <Badges color="primary" className="pull-right">
                                                        {item.type}
                                                    </Badges>
                                                ) :
                                                (<span className="pull-right">{item.type}</span>)
                                            }
                                        </H6>
                                        <P className="mt-0">
                                            {item.job_area} <span>{item.job_city}</span>
                                            <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                        </P>
                                    </div>
                                </div>
                                <P>{item.Job_description}</P>
                            </CardBody>
                        </div>
                    </Card>
                </div>
            ))}
            <PaginationCard />
        </>
    )
}
