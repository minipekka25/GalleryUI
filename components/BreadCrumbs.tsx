import React from 'react';
import { useRouter } from 'next/router';
import styles from './Breadcrumbs.module.css';

interface BreadCrumb {
  text: string;
  uri: string;
}

interface BreadCrumbsProps {
  crumbs: BreadCrumb[];
}

export default function BreadCrumbs(props: BreadCrumbsProps) {
  const router = useRouter();

  const handleNavigation = (uri: string) => {
    if (uri) {
      router.push(uri);
    }
  };

  const getBreadCrumbItem = (item: BreadCrumb) => {
    return (
      <span
        key={item.uri}
        className={styles.BreadCrumbNavItem}
        onClick={() => handleNavigation(item.uri)}
      >
        {item.text} /{' '}
      </span>
    );
  };

  return <div className={styles.BreadCrumbNav}>{props.crumbs.map((i) => getBreadCrumbItem(i))}</div>;
}