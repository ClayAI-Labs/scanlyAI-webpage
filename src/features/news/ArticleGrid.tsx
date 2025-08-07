import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Card from '../../components/Card';
import type { BlogPost } from '../../types';
import { formatDate } from '../../utils';

const articles: BlogPost[] = [
  {
    id: '1',
    title: 'Introducing ScanlyAI 2.0: Enhanced OCR and Multi-Language Support',
    excerpt: 'Our latest update brings improved accuracy and support for 40+ languages, making document processing more accessible than ever.',
    content: '',
    author: 'Alex Rivera',
    publishedAt: '2024-01-15',
    tags: ['product', 'ocr', 'languages'],
    category: 'product'
  },
  {
    id: '2',
    title: 'The Future of Document Processing: AI Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends in artificial intelligence that will reshape how businesses handle document workflows.',
    content: '',
    author: 'Dr. Sarah Kim',
    publishedAt: '2024-01-12',
    tags: ['ai', 'trends', 'future'],
    category: 'technology'
  },
  {
    id: '3',
    title: 'How to Optimize Your Document Workflow for Maximum Efficiency',
    excerpt: 'A comprehensive guide to streamlining your document processing pipeline using ScanlyAI\'s advanced features.',
    content: '',
    author: 'Marcus Johnson',
    publishedAt: '2024-01-10',
    tags: ['workflow', 'optimization', 'guide'],
    category: 'tutorials'
  },
  {
    id: '4',
    title: 'Security in AI Document Processing: Our Commitment to Data Protection',
    excerpt: 'Learn about the enterprise-grade security measures we implement to protect your sensitive documents and data.',
    content: '',
    author: 'Security Team',
    publishedAt: '2024-01-08',
    tags: ['security', 'privacy', 'compliance'],
    category: 'industry'
  },
  {
    id: '5',
    title: 'Case Study: How TechCorp Reduced Processing Time by 85%',
    excerpt: 'Discover how one of our enterprise clients transformed their document workflow and achieved remarkable efficiency gains.',
    content: '',
    author: 'Customer Success',
    publishedAt: '2024-01-05',
    tags: ['case-study', 'enterprise', 'efficiency'],
    category: 'industry'
  },
  {
    id: '6',
    title: 'Getting Started with the ScanlyAI API: A Developer\'s Guide',
    excerpt: 'Everything you need to know to integrate ScanlyAI into your applications, with code examples and best practices.',
    content: '',
    author: 'Engineering Team',
    publishedAt: '2024-01-03',
    tags: ['api', 'developer', 'integration'],
    category: 'tutorials'
  }
];

const ArticleGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} hover className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors mt-auto">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;