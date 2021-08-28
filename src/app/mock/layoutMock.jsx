import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import Section from '../section';
import SiteLink from '../../implementations/actors/links/siteLink';
import SingleEngineSearch from '../../implementations/actors/search/singleEngineSearch';
import { searchEngines } from '../../implementations/actors/search/searchLogic';
import IconLink from '../../implementations/actors/links/iconLink';

const Image = ({ url }) => (
    <img src={url} alt="Sites" style={{ width: 100, height: 100 }} />
);

Image.propTypes = {
    url: PropTypes.string.isRequired
};

const CommunicationSection = () => (
    <Section name="communication">
        <div className="links" style={{ display: 'flex' }}>
            <SiteLink
                title="Facebook"
                iconUrl="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                url="https://www.facebook.com/"
            />
            <SiteLink
                title="Whatsapp"
                iconUrl="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png"
                url="https://web.whatsapp.com/"
            />
        </div>
        <div className="commands" style={{ display: 'flex' }}>
            <IconLink
                title="Send Mail"
                iconUrl="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
                action={() => { }}
            />
            <IconLink
                title="Send Whatsapp"
                iconUrl="https://icons-for-free.com/iconfiles/png/512/chat+message+send+share+talk+whatsapp+icon-1320192978490539083.png"
                action={() => { }}
            />
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
