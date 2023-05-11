import { Link } from "gatsby";
import React from "react";
import Label from "@components/Label/Label";
import {
  article as articleClass,
  flex,
  item,
  moreLink,
} from "./Article.module.css";
import NavLink from "@components/NavLink/NavLink";
import { prose } from "@styles/modules/prose.module.css";

interface Article {
  // id: string;
  slug: string;
  title: string;
  excerpt: string;
  dateCreated: string;
  dateUpdated?: string;
}

interface ArticleProps {
  article: Article;
}

function getDateString(date: string) {
  const dt = new Date(date);
  return dt.toLocaleDateString();
}

const Article = ({ article }: any) => {
  return (
    <article className={articleClass}>
      <h2>
        <Link to={`/writing/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className={`mb-3 ${prose}`}>
        {article.excerpt}
        <span className={moreLink}>
          <Link to={`/writing/${article.slug}`}>read more</Link>
        </span>
      </p>
      <footer>
        <ul className={flex}>
          <li className={item}>
            <Label>
              Planted:{" "}
              <time dateTime={article.dateCreated}>
                {getDateString(article.dateCreated)}
              </time>
            </Label>
          </li>
          {article.dateUpdated && (
            <li>
              <Label>
                Pruned:{" "}
                <time dateTime={article.dateUpdated}>
                  {getDateString(article.dateUpdated)}
                </time>
              </Label>
            </li>
          )}
        </ul>

        {article.tags && (
          <ul className={flex}>
            {article.tags.map((tag: string) => (
              <li className={item} key={`${tag}-nav-link`}>
                <NavLink
                  variant="secondary"
                  path={`/writing/tags/${tag}`}
                  label={tag}
                />
              </li>
            ))}
          </ul>
        )}
      </footer>
    </article>
  );
};

export default Article;
