import React from 'react';
import SectionsLayout from '../app/layouts/sectionsLayout';
import Section from '../app/styled/layouts/sectionsLayout/section';
import { SiteLink, IconLink } from '../implementations/styled/actors/links';
import SingleEngineSearch from '../implementations/styled/actors/search/singleEngineSearch';
import { searchEngines } from '../implementations/actors/search/searchLogic';
import SubSection, { displayTypes } from '../app/styled/layouts/sectionsLayout/subSection';
import SuperSearch from '../implementations/styled/actors/search/superSearch';
import { sectionWidths } from '../app/layouts/sectionsLayout/sectionsLayout';

const CommunicationSection = () => (
    <Section name="communication">
        <SubSection centered>
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
        </SubSection>
        <SubSection centered>
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
        </SubSection>
        <SubSection displayType={displayTypes.COLUMN}>
            <SuperSearch
                searchEngines={[searchEngines.YOUTUBE]}
                defaultSearchEngine={searchEngines.YOUTUBE}
            />
            <SingleEngineSearch />
            <SingleEngineSearch searchEngine={searchEngines.YOUTUBE} />
        </SubSection>
    </Section>
);

const LayoutMock = () => (
    <SectionsLayout sectionWidth={sectionWidths.HALF_SCREEN}>
        <CommunicationSection />
        <CommunicationSection />
        <CommunicationSection />
        <CommunicationSection />
    </SectionsLayout>
);

export default LayoutMock;
