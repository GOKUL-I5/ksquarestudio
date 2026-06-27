import { useEffect } from 'react';

/**
 * SEO component to dynamically manage document head metadata and JSON-LD schemas.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page meta description
 * @param {string} props.canonical - Canonical URL of the page
 * @param {string} [props.ogImage] - Custom Open Graph image URL
 * @param {Object} [props.schema] - Optional JSON-LD schema object to inject
 */
export default function SeoMetadataManager({ title, description, canonical, ogImage = '/Logo full.png', schema }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
      // Also update meta title
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute('content', title);
    }

    // 2. Update Meta Description
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        const newMetaDesc = document.createElement('meta');
        newMetaDesc.name = 'description';
        newMetaDesc.content = description;
        document.head.appendChild(newMetaDesc);
      }
    }

    // 3. Update Canonical Link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    // 4. Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
    
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`);

    // 5. Update Twitter Tags
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle && title) twTitle.setAttribute('content', title);
    
    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc && description) twDesc.setAttribute('content', description);
    
    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl && canonical) twUrl.setAttribute('content', canonical);
    
    const twImg = document.querySelector('meta[property="twitter:image"]');
    if (twImg) twImg.setAttribute('content', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`);

  }, [title, description, canonical, ogImage]);

  // 6. Handle JSON-LD Schema Injection
  useEffect(() => {
    if (!schema) return;

    // Create a new script element for JSON-LD schema
    const scriptId = `jsonld-schema-${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
    
    // Clean up any existing one with the same ID first
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Clean up script on unmount to keep the DOM clean when navigating between routes
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema, title]);

  return null; // This component doesn't render any visible UI
}
