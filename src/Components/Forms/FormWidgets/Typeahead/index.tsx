import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonTypeahead from './Common/CommonTypeahead'
import { BasicTypeaheadTitle, BloodhoundTitle, CustomTemplatesTitle, PrefetchTitle, RTLSupportTitle, RemoteTypeaheadTitle, ScrollableDropdownMenuTitle } from '../../../../Utils/Constants'
import { basicTypeaheadSubTitle, bloodHoundSubTitle, customTemplateSubTitle, prefetchSubTitle, rTlSupportSubTitle, remoteTypeaheadSubTitle, scrollableDropdownSubTitle } from '../../../../Data/Forms/FormWidgets'
import { countryList, movieList, oscarWinnersMovieList, statesOfUSA } from '../../../../Data/Forms/FormWidgets/Typeahead'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders'

export default function TypeaheadContainer() {
    return (
        <Container fluid>
            <div className="typeahead typeahead-wrapper">
                <Row>
                    <CommonTypeahead id='basic' title={BasicTypeaheadTitle} subTitle={basicTypeaheadSubTitle} options={statesOfUSA} placeholder="States of USA" />
                    <CommonTypeahead id='prefetch' title={PrefetchTitle} subTitle={prefetchSubTitle} options={countryList} placeholder="Countries" />
                    <CommonTypeahead id='blood' title={BloodhoundTitle} subTitle={bloodHoundSubTitle} options={statesOfUSA} placeholder="States of USA" />
                    <CommonTypeahead id='remote' title={RemoteTypeaheadTitle} subTitle={remoteTypeaheadSubTitle} options={movieList} placeholder="Choose Option" />
                    <CommonTypeahead id='custom' title={CustomTemplatesTitle} subTitle={customTemplateSubTitle} options={oscarWinnersMovieList} placeholder="Oscar winners" />
                    <MultipleSectionsWithHeaders />
                    <CommonTypeahead id='scroll' title={ScrollableDropdownMenuTitle} subTitle={scrollableDropdownSubTitle} options={countryList} placeholder="Countries" />
                    <CommonTypeahead id='rtl' title={RTLSupportTitle} subTitle={rTlSupportSubTitle} options={countryList} placeholder="Countries" />
                </Row>
            </div>
        </Container>
    )
}