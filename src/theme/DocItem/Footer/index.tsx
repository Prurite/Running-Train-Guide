import React, {useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';

import styles from './styles.module.css';

type GiscusConfig = {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
  mapping?: string;
};

function GiscusComments(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const {siteConfig, i18n} = useDocusaurusContext();
  const {metadata} = useDoc();
  const config = siteConfig.customFields?.giscus as GiscusConfig | undefined;

  const isConfigured = Boolean(
    config?.repo && config.repoId && config.category && config.categoryId,
  );
  const discussionHref = `https://github.com/${config?.repo ?? 'Prurite/Running-Train-Guide'}/discussions/categories/${(
    config?.category ?? 'General'
  ).toLowerCase()}`;

  useEffect(() => {
    if (!isConfigured || !containerRef.current) {
      return undefined;
    }

    const container = containerRef.current;
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', config!.repo!);
    script.setAttribute('data-repo-id', config!.repoId!);
    script.setAttribute('data-category', config!.category!);
    script.setAttribute('data-category-id', config!.categoryId!);
    script.setAttribute('data-mapping', config!.mapping ?? 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', i18n.currentLocale);
    script.setAttribute('data-loading', 'lazy');

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [config, i18n.currentLocale, isConfigured, metadata.permalink]);

  return (
    <section className={styles.comments} aria-labelledby="doc-comments-title">
      <h2 id="doc-comments-title" className={styles.title}>
        Discussions
      </h2>
      {isConfigured ? (
        <div ref={containerRef} />
      ) : (
        <p className={styles.fallback}>
          Add the Giscus category ID in <code>docusaurus.config.ts</code> to
          embed comments here. Until then, use the{' '}
          <a href={discussionHref}>GitHub Discussions category</a>.
        </p>
      )}
    </section>
  );
}

export default function DocItemFooter(): React.ReactElement {
  return (
    <>
      <OriginalDocItemFooter />
      <BrowserOnly>{() => <GiscusComments />}</BrowserOnly>
    </>
  );
}
