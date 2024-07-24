/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { H4, P } from '../../../../AbstractElements';
import { dynamicImage, dynamicNumber } from '../../../../Utils';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, MasonryDescriptionTitle, PortfolioTitle } from '../../../../Utils/Constants';

export default function MasonryDescription() {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    return (
        <Card>
            <CommonCardHeader title={MasonryDescriptionTitle} />
            <CardBody>
                <Gallery withCaption>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description mb-0" columnClassName="col-xl-3 col-sm-6 grid-item">
                        {dynamicNumber(15).map((item, i) => (
                            <figure key={i}>
                                <Item original={dynamicImage(`masonry/${item}.jpg`)} width="700" height="850" caption="Here Expert photographers have a thorough grasp of their gear and know how to get the best results by experimenting with different lenses, lighting setups, and post-processing software.">
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`masonry/${item}.jpg`)} alt="Image description" />
                                            <div className="caption border-top-0 p-2">
                                                <H4>{PortfolioTitle}</H4>
                                                <P>{"Here Expert photographers have a thorough grasp of their gear and know how to get the best results by experimenting with different lenses, lighting setups, and post-processing software."}</P>
                                            </div>
                                        </Link>
                                    )}
                                </Item>
                            </figure>
                        ))}
                    </Masonry>
                </Gallery>
            </CardBody>
        </Card>
    )
}