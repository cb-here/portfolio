import { useState } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how to architect and build scalable full-stack applications using modern technologies and best practices.",
      content: `
        <p>In today's fast-paced digital world, building scalable web applications is crucial for success. This comprehensive guide will walk you through the process of creating robust applications using React and Node.js.</p>
        
        <h3>Why React and Node.js?</h3>
        <p>React's component-based architecture and Node.js's event-driven model make them perfect companions for building scalable applications. Here's why:</p>
        
        <ul>
          <li><strong>Component Reusability:</strong> React's component system promotes code reuse and maintainability</li>
          <li><strong>Virtual DOM:</strong> Efficient rendering and better performance</li>
          <li><strong>Non-blocking I/O:</strong> Node.js handles concurrent requests efficiently</li>
          <li><strong>JavaScript Everywhere:</strong> Same language for frontend and backend</li>
        </ul>
        
        <h3>Architecture Patterns</h3>
        <p>When building scalable applications, consider these architectural patterns:</p>
        
        <h4>1. Component-Based Architecture</h4>
        <p>Break your UI into small, reusable components. This makes your code more maintainable and testable.</p>
        
        <h4>2. State Management</h4>
        <p>Use tools like Redux or Zustand for complex state management across your application.</p>
        
        <h4>3. API Design</h4>
        <p>Design RESTful APIs with proper error handling and validation using Express.js middleware.</p>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Implement proper error boundaries in React</li>
          <li>Use TypeScript for better type safety</li>
          <li>Implement caching strategies</li>
          <li>Use environment variables for configuration</li>
          <li>Implement proper logging and monitoring</li>
        </ul>
        
        <p>By following these principles and patterns, you'll be able to build applications that can handle growth and maintain performance as your user base expands.</p>
      `,
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "Node.js", "Architecture", "Scalability"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "2",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to edge computing.",
      content: `
        <p>Web development is constantly evolving, and 2024 brings exciting new trends that will shape how we build applications. Let's explore the key trends every developer should know about.</p>
        
        <h3>1. AI-Powered Development Tools</h3>
        <p>Artificial Intelligence is revolutionizing how we write code:</p>
        <ul>
          <li><strong>Code Generation:</strong> Tools like GitHub Copilot and ChatGPT help generate boilerplate code</li>
          <li><strong>Bug Detection:</strong> AI-powered tools can identify potential issues before they become problems</li>
          <li><strong>Testing Automation:</strong> Intelligent test generation and execution</li>
        </ul>
        
        <h3>2. Edge Computing and CDNs</h3>
        <p>Moving computation closer to users for better performance:</p>
        <ul>
          <li>Reduced latency through edge functions</li>
          <li>Better user experience globally</li>
          <li>Cost-effective scaling solutions</li>
        </ul>
        
        <h3>3. WebAssembly (WASM)</h3>
        <p>Bringing near-native performance to web applications:</p>
        <ul>
          <li>Run high-performance applications in browsers</li>
          <li>Port existing C/C++/Rust applications to the web</li>
          <li>Better performance for computationally intensive tasks</li>
        </ul>
        
        <h3>4. Progressive Web Apps (PWAs)</h3>
        <p>Bridging the gap between web and native applications:</p>
        <ul>
          <li>Offline functionality</li>
          <li>Push notifications</li>
          <li>App-like user experience</li>
          <li>Installation without app stores</li>
        </ul>
        
        <h3>5. Micro-Frontends</h3>
        <p>Breaking down monolithic frontends into smaller, manageable pieces:</p>
        <ul>
          <li>Independent deployment</li>
          <li>Technology diversity</li>
          <li>Team autonomy</li>
          <li>Better scalability</li>
        </ul>
        
        <h3>Preparing for the Future</h3>
        <p>To stay ahead in web development:</p>
        <ul>
          <li>Keep learning new technologies and frameworks</li>
          <li>Focus on performance and user experience</li>
          <li>Embrace automation and AI tools</li>
          <li>Stay updated with web standards and best practices</li>
        </ul>
        
        <p>The future of web development is exciting, with new possibilities emerging every day. By staying informed and adaptable, developers can build better, faster, and more engaging web experiences.</p>
      `,
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Web Development", "Trends", "AI", "Performance"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "3",
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced TypeScript features and patterns that will make your code more robust and maintainable.",
      content: `
        <p>TypeScript has become an essential tool for modern JavaScript development. This guide explores advanced patterns and best practices that will elevate your TypeScript skills.</p>
        
        <h3>Advanced Type Patterns</h3>
        
        <h4>1. Conditional Types</h4>
        <p>Create types that depend on conditions:</p>
        <pre><code>type ApiResponse&lt;T&gt; = T extends string 
  ? { message: T } 
  : { data: T };</code></pre>
        
        <h4>2. Mapped Types</h4>
        <p>Transform existing types into new ones:</p>
        <pre><code>type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};</code></pre>
        
        <h4>3. Template Literal Types</h4>
        <p>Create types from string templates:</p>
        <pre><code>type EventName&lt;T extends string&gt; = \`on\${Capitalize&lt;T&gt;}\`;</code></pre>
        
        <h3>Utility Types</h3>
        <p>TypeScript provides powerful utility types:</p>
        <ul>
          <li><strong>Pick&lt;T, K&gt;:</strong> Select specific properties from a type</li>
          <li><strong>Omit&lt;T, K&gt;:</strong> Exclude specific properties from a type</li>
          <li><strong>Record&lt;K, T&gt;:</strong> Create a type with specific keys and values</li>
          <li><strong>Exclude&lt;T, U&gt;:</strong> Remove types from a union</li>
        </ul>
        
        <h3>Generic Constraints</h3>
        <p>Limit generic types to specific shapes:</p>
        <pre><code>interface Lengthwise {
  length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}</code></pre>
        
        <h3>Declaration Merging</h3>
        <p>Extend existing types and interfaces:</p>
        <pre><code>interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: User has both name and age</code></pre>
        
        <h3>Best Practices</h3>
        <ul>
          <li><strong>Use strict mode:</strong> Enable all strict type checking options</li>
          <li><strong>Prefer interfaces over types:</strong> For object shapes, use interfaces</li>
          <li><strong>Use const assertions:</strong> For immutable data structures</li>
          <li><strong>Leverage type guards:</strong> For runtime type checking</li>
          <li><strong>Use discriminated unions:</strong> For type-safe state management</li>
        </ul>
        
        <h3>Performance Tips</h3>
        <ul>
          <li>Avoid complex recursive types</li>
          <li>Use type aliases for complex types</li>
          <li>Leverage incremental compilation</li>
          <li>Use project references for large codebases</li>
        </ul>
        
        <p>Mastering these advanced TypeScript patterns will help you write more robust, maintainable, and type-safe code. The investment in learning these concepts pays off in reduced bugs and improved developer experience.</p>
      `,
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["TypeScript", "Advanced", "Patterns", "Best Practices"],
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "4",
      title: "Building RESTful APIs with Express.js and MongoDB",
      excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Express.js and MongoDB with proper authentication and validation.",
      content: `
        <p>Building robust RESTful APIs is a fundamental skill for backend developers. This guide will walk you through creating a complete API using Express.js and MongoDB.</p>
        
        <h3>Setting Up the Foundation</h3>
        <p>Start with a solid project structure:</p>
        <pre><code>project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── tests/
└── package.json</code></pre>
        
        <h3>Essential Middleware</h3>
        <p>Set up crucial middleware for your API:</p>
        <ul>
          <li><strong>CORS:</strong> Handle cross-origin requests</li>
          <li><strong>Helmet:</strong> Security headers</li>
          <li><strong>Morgan:</strong> Request logging</li>
          <li><strong>Express Rate Limit:</strong> Prevent abuse</li>
          <li><strong>Compression:</strong> Reduce response size</li>
        </ul>
        
        <h3>Database Design with Mongoose</h3>
        <p>Create well-structured schemas:</p>
        <pre><code>const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  }
}, { timestamps: true });</code></pre>
        
        <h3>Authentication & Authorization</h3>
        <p>Implement secure authentication:</p>
        <ul>
          <li>JWT tokens for stateless authentication</li>
          <li>Password hashing with bcrypt</li>
          <li>Role-based access control</li>
          <li>Refresh token mechanism</li>
        </ul>
        
        <h3>Input Validation</h3>
        <p>Use Joi or express-validator for robust validation:</p>
        <pre><code>const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required()
});</code></pre>
        
        <h3>Error Handling</h3>
        <p>Implement comprehensive error handling:</p>
        <ul>
          <li>Global error handler middleware</li>
          <li>Custom error classes</li>
          <li>Proper HTTP status codes</li>
          <li>Consistent error response format</li>
        </ul>
        
        <h3>API Documentation</h3>
        <p>Document your API with Swagger/OpenAPI:</p>
        <ul>
          <li>Interactive API documentation</li>
          <li>Request/response examples</li>
          <li>Authentication requirements</li>
          <li>Error response formats</li>
        </ul>
        
        <h3>Testing Strategy</h3>
        <p>Implement comprehensive testing:</p>
        <ul>
          <li><strong>Unit Tests:</strong> Test individual functions</li>
          <li><strong>Integration Tests:</strong> Test API endpoints</li>
          <li><strong>Load Tests:</strong> Test performance under load</li>
          <li><strong>Security Tests:</strong> Test for vulnerabilities</li>
        </ul>
        
        <h3>Performance Optimization</h3>
        <ul>
          <li>Database indexing for faster queries</li>
          <li>Caching with Redis</li>
          <li>Pagination for large datasets</li>
          <li>Connection pooling</li>
          <li>Response compression</li>
        </ul>
        
        <h3>Deployment Best Practices</h3>
        <ul>
          <li>Environment-specific configurations</li>
          <li>Health check endpoints</li>
          <li>Logging and monitoring</li>
          <li>Graceful shutdown handling</li>
          <li>Process management with PM2</li>
        </ul>
        
        <p>Building robust APIs requires attention to many details, from security to performance. By following these practices, you'll create APIs that are secure, scalable, and maintainable.</p>
      `,
      date: "2023-12-28",
      readTime: "12 min read",
      tags: ["Express.js", "MongoDB", "REST API", "Backend"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  if (selectedPost) {
    return (
      <div
        id="blog"
        onMouseMove={handleMouseMove}
        className="group relative mt-4 sm:mt-6 z-10 flex flex-col w-full backdrop-blur-md rounded-2xl p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
        <div
          className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
            maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
            WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
          }}></div>

        <div className="relative z-10">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-4 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </button>

          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{selectedPost.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {selectedPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-6">
            {selectedPost.title}
          </h1>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            style={{
              color: '#c7c4b876'
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      id="blog"
      onMouseMove={handleMouseMove}
      className="group relative mt-4 sm:mt-6 z-10 flex flex-col w-full backdrop-blur-md rounded-2xl p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
      <div
        className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
          maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
        }}></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-6">
          Blog
        </h3>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group/card cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
              onClick={() => setSelectedPost(post)}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2 group-hover/card:text-blue-300 transition-colors duration-200">
                    {post.title}
                  </h4>

                  <p className="shiny-text text-sm text-gray-400 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-400 text-sm group-hover/card:text-blue-300 transition-colors duration-200">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/card:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;