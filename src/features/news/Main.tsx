import React from 'react';
import BlogTabs from './BlogTabs';
import ArticleGrid from './ArticleGrid';

const NewsPage: React.FC = () => {
  return (
    <div>
      <BlogTabs />
      <ArticleGrid />
    </div>
  );
};

export default NewsPage;