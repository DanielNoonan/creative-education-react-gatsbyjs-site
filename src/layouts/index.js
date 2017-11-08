import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

import '../assets/global-styles/global-styles.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Creative Education"
      meta={[
        { name: 'Creative Education School Information', content: 'Learn, Create and Achieve' },
        { name: 'school, Luton, creative, education, behaviour, issues, gcse, youth, child, counseling, help, mentoring, results, exam' },
      ]}
    />
    <NavBar />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
