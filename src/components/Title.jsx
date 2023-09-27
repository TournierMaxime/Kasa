import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

/**
 * Composant pour définir le titre de la page.
 * @param {object} props - L'objet props.
 * @param {string} props.title - Le titre de la page.
 * @returns {React.ReactElement} Le composant Title.
*/

export default function Title({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
