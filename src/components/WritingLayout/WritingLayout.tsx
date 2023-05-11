import React from "react";
import * as styles from "./WritingLayout.module.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import ArticleNavList from "./ArticleNavList";
import TagsNavList from "./TagsNavList";

interface WritingLayoutProps {
  children: React.ReactNode;
}

const WritingLayout = ({ children }: WritingLayoutProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionContainer}>{children}</section>
      <aside className={styles.asideContainer}>
        <ArticleNavList />
        <TagsNavList />
      </aside>
    </div>
  );
};

export default WritingLayout;
