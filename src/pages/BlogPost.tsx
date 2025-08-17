import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const post = blogPosts.find(p => p.slug === slug);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="w-full max-w-4xl min-h-screen mx-4">
      <Header />
      
      <div className="pt-20 sm:pt-24 md:pt-28">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        <div
          onMouseMove={handleMouseMove}
          className="group relative backdrop-blur-md rounded-2xl p-8 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
          <div
            className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
              maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
              WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
            }}></div>

          <article className="relative z-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-xl mb-8"
            />

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-8 leading-tight">
              {post.title}
            </h1>

            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                
                <div className="text-sm text-gray-400">
                  Published on {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;