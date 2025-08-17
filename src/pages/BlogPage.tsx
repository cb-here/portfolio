import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

const BlogPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full max-w-4xl min-h-screen mx-4">
      <Header />

      <div className="pt-20 sm:pt-24 md:pt-28">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent pb-5">
            Blog
          </h1>
          <p className="text-gray-400 text-lg">
            Thoughts, tutorials, and insights about web development and
            technology.
          </p>
        </div>

        <div
          onMouseMove={handleMouseMove}
          className="group relative backdrop-blur-md rounded-2xl p-2 sm:p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
          <div
            className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
              maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
              WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
            }}></div>

          <div className="relative z-10 grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group/card bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 lg:h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-3 group-hover/card:text-blue-300 transition-colors duration-200">
                        {post.title}
                      </h2>

                      <p className="shiny-text text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
