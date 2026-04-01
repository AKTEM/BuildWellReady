import { useEffect } from 'react';
import { updateMetaTags, SEOMetadata } from '../utils/seo';

export const usePageMeta = (metadata: SEOMetadata) => {
  useEffect(() => {
    updateMetaTags(metadata);
  }, [metadata]);
};
