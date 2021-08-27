import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import Section from '../section';
import SiteLink from '../../implementations/actors/links/siteLink';
import SingleEngineSearch from '../../implementations/actors/search/singleEngineSearch';
import { searchEngines } from '../../implementations/actors/search/searchLogic';
import SimpleActor from '../../implementations/actors/simpleActor/simpleActor';

const Image = ({ url }) => (
    <img src={url} alt="Sites" style={{ width: 100, height: 100 }} />
);

Image.propTypes = {
    url: PropTypes.string.isRequired
};

const CommunicationSection = () => (
    <Section name="communication">
        <div className="links">
            <SimpleActor>
                <SiteLink iconUrl="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" url="https://www.facebook.com/" />
            </SimpleActor>
            <SimpleActor>
                <SiteLink iconUrl="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" url="https://web.whatsapp.com/" />
            </SimpleActor>
        </div>
        <div className="commands">
            <button type="button">Send Mail</button>
            <button type="button">Send Whatsapp</button>
        </div>
        <div className="searches">
            <SingleEngineSearch searchEngine={searchEngines.YOUTUBE} />
        </div>
    </Section>
);

const LayoutMock = () => (
    <Layout>
        <CommunicationSection />
        <CommunicationSection />
        <CommunicationSection />
    </Layout>
);

export default LayoutMock;
