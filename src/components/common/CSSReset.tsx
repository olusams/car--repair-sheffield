import React from 'react';

const CSSReset: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS Reset to prevent conflicts */
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', system-ui, sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* React App Isolation */
        #root {
          isolation: isolate;
          position: relative;
          z-index: 1;
        }

        /* Override template header conflicts */
        .th-header {
          z-index: 1000 !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
        }

        /* Ensure React components stack properly */
        [data-react-component] {
          position: relative;
          z-index: 1;
        }

        /* Override template z-index conflicts */
        .z-index-common,
        .z-index-3,
        .z-index-n1,
        .z-index-step1 {
          z-index: auto !important;
        }

        /* Fix position conflicts */
        .absolute { position: absolute !important; }
        .relative { position: relative !important; }
        .fixed { position: fixed !important; }
        .sticky { position: sticky !important; }
        
        /* Ensure Tailwind utilities work properly */
        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        @media (min-width: 640px) {
          .container {
            max-width: 640px;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            max-width: 768px;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
          }
        }
        
        @media (min-width: 1280px) {
          .container {
            max-width: 1280px;
          }
        }
        
        /* Fix button conflicts */
        button, .btn {
          border: none;
          background: none;
          cursor: pointer;
          font-family: inherit;
        }
        
        /* Fix form conflicts */
        input, textarea, select {
          font-family: inherit;
          font-size: inherit;
        }
        
        /* Fix link conflicts */
        a {
          text-decoration: none;
          color: inherit;
        }
        
        /* Fix list conflicts */
        ul, ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        /* Fix heading conflicts */
        h1, h2, h3, h4, h5, h6 {
          margin: 0;
          font-weight: inherit;
          font-size: inherit;
        }
        
        /* Fix image conflicts */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        /* Fix table conflicts */
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        
        /* React-specific z-index utilities */
        .react-z-1 { z-index: 1 !important; }
        .react-z-10 { z-index: 10 !important; }
        .react-z-20 { z-index: 20 !important; }
        .react-z-30 { z-index: 30 !important; }
        .react-z-40 { z-index: 40 !important; }
        .react-z-50 { z-index: 50 !important; }
        .react-z-100 { z-index: 100 !important; }
        .react-z-1000 { z-index: 1000 !important; }
      `
    }} />
  );
};

export default CSSReset; 