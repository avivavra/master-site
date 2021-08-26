import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import Section from '../section';

const Image = ({ url }) => (
    <img src={url} alt="Sites" style={{ width: 100, height: 100 }} />
);

Image.propTypes = {
    url: PropTypes.string.isRequired
};

const LayoutMock = () => (
    <Layout>
        <Section name="communication">
            <div className="links">
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
            </div>
            <div className="actions">
                <button type="button">Send Mail</button>
                <button type="button">Send Whatsapp</button>
            </div>
            <div className="search">
                <button type="button">Search Instagram</button>
                <input />
            </div>
        </Section>
        <Section name="communication">
            <div className="links">
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
            </div>
            <div className="actions">
                <button type="button">Send Mail</button>
                <button type="button">Send Whatsapp</button>
            </div>
            <div className="search">
                <button type="button">Search Instagram</button>
                <input />
            </div>
        </Section>
        <Section name="communication">
            <div className="links">
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
                <Image url="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-symbol-icon-logo-vector.png" />
            </div>
            <div className="actions">
                <button type="button">Send Mail</button>
                <button type="button">Send Whatsapp</button>
            </div>
            <div className="search">
                <button type="button">Search Instagram</button>
                <input />
            </div>
        </Section>
    </Layout>
);

export default LayoutMock;
