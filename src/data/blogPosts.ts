export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-web-applications-react-nodejs",
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
      
      <pre><code>// Example: Reusable Button Component
const Button = ({ variant, children, onClick, disabled }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900"
  };
  
  return (
    &lt;button
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      onClick={onClick}
      disabled={disabled}
    &gt;
      {children}
    &lt;/button&gt;
  );
};</code></pre>
      
      <h4>2. State Management</h4>
      <p>Use tools like Redux or Zustand for complex state management across your application.</p>
      
      <pre><code>// Example: Zustand Store
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
}));</code></pre>
      
      <h4>3. API Design</h4>
      <p>Design RESTful APIs with proper error handling and validation using Express.js middleware.</p>
      
      <pre><code>// Example: Express Route with Validation
const express = require('express');
const { body, validationResult } = require('express-validator');

app.post('/api/users',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Process the request
    createUser(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json({ error: err.message }));
  }
);</code></pre>
      
      <h3>Performance Optimization</h3>
      <p>To ensure your application scales well, implement these optimization strategies:</p>
      
      <h4>Frontend Optimizations</h4>
      <ul>
        <li><strong>Code Splitting:</strong> Use React.lazy() and Suspense for route-based code splitting</li>
        <li><strong>Memoization:</strong> Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders</li>
        <li><strong>Virtual Scrolling:</strong> For large lists, implement virtual scrolling</li>
        <li><strong>Image Optimization:</strong> Use next/image or similar solutions for optimized image loading</li>
      </ul>
      
      <h4>Backend Optimizations</h4>
      <ul>
        <li><strong>Database Indexing:</strong> Proper indexing for faster queries</li>
        <li><strong>Caching:</strong> Implement Redis for session storage and data caching</li>
        <li><strong>Connection Pooling:</strong> Use connection pools for database connections</li>
        <li><strong>Rate Limiting:</strong> Protect your API from abuse</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Error Boundaries:</strong> Implement proper error boundaries in React</li>
        <li><strong>TypeScript:</strong> Use TypeScript for better type safety and developer experience</li>
        <li><strong>Testing:</strong> Write comprehensive unit and integration tests</li>
        <li><strong>Environment Variables:</strong> Use environment variables for configuration</li>
        <li><strong>Logging:</strong> Implement proper logging and monitoring</li>
        <li><strong>Security:</strong> Follow security best practices (HTTPS, CORS, input validation)</li>
      </ul>
      
      <h3>Deployment and Scaling</h3>
      <p>When deploying your application, consider these strategies:</p>
      
      <ul>
        <li><strong>Containerization:</strong> Use Docker for consistent deployments</li>
        <li><strong>Load Balancing:</strong> Distribute traffic across multiple instances</li>
        <li><strong>CDN:</strong> Use Content Delivery Networks for static assets</li>
        <li><strong>Database Scaling:</strong> Implement read replicas and sharding when needed</li>
        <li><strong>Monitoring:</strong> Set up application monitoring and alerting</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building scalable web applications requires careful planning, proper architecture, and adherence to best practices. By following the principles outlined in this guide and leveraging the power of React and Node.js, you'll be able to create applications that can handle growth and maintain performance as your user base expands.</p>
      
      <p>Remember, scalability is not just about handling more users—it's about maintaining code quality, developer productivity, and user experience as your application grows. Start with solid foundations, and scale incrementally based on actual needs rather than premature optimization.</p>
    `,
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["React", "Node.js", "Architecture", "Scalability", "Performance"],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "2",
    slug: "future-web-development-trends-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to edge computing.",
    content: `
      <p>Web development is constantly evolving, and 2024 brings exciting new trends that will shape how we build applications. Let's explore the key trends every developer should know about.</p>
      
      <h3>1. AI-Powered Development Tools</h3>
      <p>Artificial Intelligence is revolutionizing how we write code and build applications:</p>
      
      <h4>Code Generation and Assistance</h4>
      <ul>
        <li><strong>GitHub Copilot:</strong> AI pair programmer that suggests code completions</li>
        <li><strong>ChatGPT & Claude:</strong> Help with debugging, code explanation, and architecture decisions</li>
        <li><strong>Tabnine:</strong> AI-powered code completion for multiple languages</li>
      </ul>
      
      <h4>Automated Testing and QA</h4>
      <ul>
        <li>AI-generated test cases based on code analysis</li>
        <li>Intelligent bug detection and fixing suggestions</li>
        <li>Automated accessibility testing and improvements</li>
      </ul>
      
      <pre><code>// Example: AI-assisted code generation
// Prompt: "Create a React hook for managing form state with validation"

const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field];
      const value = values[field];
      
      if (rule.required && !value) {
        newErrors[field] = \`\${field} is required\`;
      } else if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[field] = rule.message;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);

  return { values, errors, isSubmitting, validate, setValues, setIsSubmitting };
};</code></pre>
      
      <h3>2. Edge Computing and Serverless</h3>
      <p>Moving computation closer to users for better performance and reduced latency:</p>
      
      <h4>Edge Functions</h4>
      <ul>
        <li><strong>Vercel Edge Functions:</strong> Run code at the edge for faster response times</li>
        <li><strong>Cloudflare Workers:</strong> Serverless functions running on Cloudflare's global network</li>
        <li><strong>AWS Lambda@Edge:</strong> Run Lambda functions at CloudFront edge locations</li>
      </ul>
      
      <h4>Benefits of Edge Computing</h4>
      <ul>
        <li>Reduced latency through geographic distribution</li>
        <li>Better user experience globally</li>
        <li>Cost-effective scaling solutions</li>
        <li>Improved SEO through faster page loads</li>
      </ul>
      
      <h3>3. WebAssembly (WASM) Adoption</h3>
      <p>Bringing near-native performance to web applications:</p>
      
      <h4>Use Cases for WebAssembly</h4>
      <ul>
        <li><strong>High-Performance Computing:</strong> Scientific simulations, image/video processing</li>
        <li><strong>Gaming:</strong> Browser-based games with console-quality performance</li>
        <li><strong>Legacy Code Migration:</strong> Port existing C/C++/Rust applications to the web</li>
        <li><strong>Cryptography:</strong> Fast, secure cryptographic operations</li>
      </ul>
      
      <pre><code>// Example: Using WebAssembly in JavaScript
async function loadWasm() {
  const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('/math-operations.wasm')
  );
  
  const { fibonacci, isPrime } = wasmModule.instance.exports;
  
  // These operations run at near-native speed
  console.log('Fibonacci(40):', fibonacci(40));
  console.log('Is 982451653 prime?:', isPrime(982451653));
}</code></pre>
      
      <h3>4. Advanced Progressive Web Apps (PWAs)</h3>
      <p>PWAs are becoming more powerful with new capabilities:</p>
      
      <h4>New PWA Features</h4>
      <ul>
        <li><strong>Web Share API:</strong> Native sharing capabilities</li>
        <li><strong>Background Sync:</strong> Sync data when connectivity is restored</li>
        <li><strong>Web Bluetooth:</strong> Connect to Bluetooth devices</li>
        <li><strong>File System Access:</strong> Read and write local files</li>
        <li><strong>Web NFC:</strong> Near Field Communication support</li>
      </ul>
      
      <h3>5. Micro-Frontends Architecture</h3>
      <p>Breaking down monolithic frontends into smaller, manageable pieces:</p>
      
      <h4>Benefits of Micro-Frontends</h4>
      <ul>
        <li><strong>Independent Deployment:</strong> Teams can deploy independently</li>
        <li><strong>Technology Diversity:</strong> Different teams can use different frameworks</li>
        <li><strong>Team Autonomy:</strong> Smaller, focused teams</li>
        <li><strong>Better Scalability:</strong> Scale development teams and applications</li>
      </ul>
      
      <h4>Implementation Approaches</h4>
      <ul>
        <li><strong>Module Federation:</strong> Webpack 5's built-in solution</li>
        <li><strong>Single-SPA:</strong> Framework for building micro-frontend applications</li>
        <li><strong>Web Components:</strong> Standard-based approach using custom elements</li>
      </ul>
      
      <h3>6. Advanced CSS Features</h3>
      <p>CSS continues to evolve with powerful new features:</p>
      
      <h4>Container Queries</h4>
      <pre><code>/* Responsive design based on container size, not viewport */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}</code></pre>
      
      <h4>CSS Cascade Layers</h4>
      <pre><code>/* Better control over CSS specificity */
@layer reset, base, components, utilities;

@layer components {
  .button {
    background: blue;
    color: white;
  }
}</code></pre>
      
      <h3>7. Enhanced Developer Experience</h3>
      <p>Tools and practices that improve developer productivity:</p>
      
      <h4>Build Tools Evolution</h4>
      <ul>
        <li><strong>Vite:</strong> Lightning-fast build tool with HMR</li>
        <li><strong>Turbopack:</strong> Rust-based bundler from Vercel</li>
        <li><strong>esbuild:</strong> Extremely fast JavaScript bundler</li>
      </ul>
      
      <h4>Development Environments</h4>
      <ul>
        <li><strong>GitHub Codespaces:</strong> Cloud-based development environments</li>
        <li><strong>Gitpod:</strong> Ready-to-code development environments</li>
        <li><strong>Dev Containers:</strong> Consistent development environments using Docker</li>
      </ul>
      
      <h3>8. Web3 and Blockchain Integration</h3>
      <p>Decentralized applications are becoming more mainstream:</p>
      
      <h4>Key Technologies</h4>
      <ul>
        <li><strong>MetaMask Integration:</strong> Wallet connectivity for dApps</li>
        <li><strong>IPFS:</strong> Decentralized file storage</li>
        <li><strong>Smart Contracts:</strong> Ethereum and other blockchain integrations</li>
        <li><strong>NFT Marketplaces:</strong> Digital asset trading platforms</li>
      </ul>
      
      <h3>Preparing for the Future</h3>
      <p>To stay ahead in web development:</p>
      
      <ul>
        <li><strong>Continuous Learning:</strong> Stay updated with new technologies and frameworks</li>
        <li><strong>Performance Focus:</strong> Always prioritize user experience and performance</li>
        <li><strong>Embrace Automation:</strong> Use AI tools and automation to increase productivity</li>
        <li><strong>Security First:</strong> Keep security considerations at the forefront</li>
        <li><strong>Accessibility:</strong> Build inclusive applications for all users</li>
        <li><strong>Sustainability:</strong> Consider the environmental impact of your applications</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>The future of web development is exciting, with new possibilities emerging every day. AI is transforming how we write code, edge computing is making applications faster, and new web standards are enabling capabilities we never thought possible in browsers.</p>
      
      <p>As developers, our role is evolving from just writing code to orchestrating intelligent systems, optimizing for global performance, and creating experiences that blur the line between web and native applications. By staying informed and adaptable, we can build better, faster, and more engaging web experiences for users worldwide.</p>
      
      <p>The key is to embrace these changes while maintaining focus on fundamental principles: clean code, good user experience, and solving real problems for real people.</p>
    `,
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["Web Development", "Trends", "AI", "Performance", "Future Tech"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "3",
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Deep dive into advanced TypeScript features and patterns that will make your code more robust and maintainable.",
    content: `
      <p>TypeScript has become an essential tool for modern JavaScript development. This comprehensive guide explores advanced patterns and best practices that will elevate your TypeScript skills to the next level.</p>
      
      <h3>Advanced Type System Features</h3>
      
      <h4>1. Conditional Types</h4>
      <p>Create types that depend on conditions, enabling powerful type-level programming:</p>
      
      <pre><code>// Basic conditional type
type ApiResponse&lt;T&gt; = T extends string 
  ? { message: T } 
  : { data: T };

// More complex example: Extract function return type
type ReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : never;

// Practical example: Create a type-safe event system
type EventMap = {
  'user:login': { userId: string; timestamp: Date };
  'user:logout': { userId: string };
  'data:update': { id: string; data: any };
};

type EventHandler&lt;K extends keyof EventMap&gt; = (payload: EventMap[K]) =&gt; void;

class EventEmitter {
  private handlers: { [K in keyof EventMap]?: EventHandler&lt;K&gt;[] } = {};
  
  on&lt;K extends keyof EventMap&gt;(event: K, handler: EventHandler&lt;K&gt;) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event]!.push(handler);
  }
  
  emit&lt;K extends keyof EventMap&gt;(event: K, payload: EventMap[K]) {
    this.handlers[event]?.forEach(handler =&gt; handler(payload));
  }
}</code></pre>
      
      <h4>2. Mapped Types</h4>
      <p>Transform existing types into new ones with powerful mapping operations:</p>
      
      <pre><code>// Basic mapped type
type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

// Advanced: Deep readonly
type DeepReadonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly&lt;T[P]&gt; : T[P];
};

// Practical example: Form validation types
type ValidationRules&lt;T&gt; = {
  [K in keyof T]?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: T[K]) =&gt; string | null;
  };
};

type FormErrors&lt;T&gt; = {
  [K in keyof T]?: string;
};

interface User {
  email: string;
  password: string;
  age: number;
}

const userValidation: ValidationRules&lt;User&gt; = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    required: true,
    minLength: 8
  },
  age: {
    custom: (value) =&gt; value &lt; 18 ? 'Must be 18 or older' : null
  }
};</code></pre>
      
      <h4>3. Template Literal Types</h4>
      <p>Create types from string templates for powerful string manipulation:</p>
      
      <pre><code>// Basic template literal type
type EventName&lt;T extends string&gt; = \`on\${Capitalize&lt;T&gt;}\`;
type ClickEvent = EventName&lt;'click'&gt;; // 'onClick'

// Advanced: Route parameter extraction
type ExtractRouteParams&lt;T extends string&gt; = 
  T extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? { [K in Param]: string } & ExtractRouteParams&lt;Rest&gt;
    : T extends \`\${string}:\${infer Param}\`
    ? { [K in Param]: string }
    : {};

type UserRoute = ExtractRouteParams&lt;'/users/:id/posts/:postId'&gt;;
// Result: { id: string; postId: string }

// Practical example: Type-safe CSS-in-JS
type CSSProperties = {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
};

type CSSInJS&lt;T extends Record&lt;string, CSSProperties&gt;&gt; = {
  [K in keyof T]: T[K];
};

const styles: CSSInJS&lt;{
  button: CSSProperties;
  container: CSSProperties;
}&gt; = {
  button: {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px 20px'
  },
  container: {
    margin: '0 auto',
    maxWidth: '1200px'
  }
};</code></pre>
      
      <h3>Utility Types Mastery</h3>
      
      <h4>Built-in Utility Types</h4>
      <pre><code>interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Pick specific properties
type PublicUser = Pick&lt;User, 'id' | 'name' | 'email'&gt;;

// Omit sensitive properties
type SafeUser = Omit&lt;User, 'password'&gt;;

// Make all properties optional
type PartialUser = Partial&lt;User&gt;;

// Make all properties required
type RequiredUser = Required&lt;Partial&lt;User&gt;&gt;;

// Create a record type
type UserRoles = Record&lt;string, 'admin' | 'user' | 'guest'&gt;;

// Extract from union types
type Status = 'loading' | 'success' | 'error';
type SuccessStatus = Extract&lt;Status, 'success'&gt;; // 'success'
type NonLoadingStatus = Exclude&lt;Status, 'loading'&gt;; // 'success' | 'error'</code></pre>
      
      <h4>Custom Utility Types</h4>
      <pre><code>// Deep partial - makes all nested properties optional
type DeepPartial&lt;T&gt; = {
  [P in keyof T]?: T[P] extends object ? DeepPartial&lt;T[P]&gt; : T[P];
};

// Non-nullable - removes null and undefined
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

// Function property names
type FunctionPropertyNames&lt;T&gt; = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// Non-function property names
type NonFunctionPropertyNames&lt;T&gt; = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

// Extract function properties
type FunctionProperties&lt;T&gt; = Pick&lt;T, FunctionPropertyNames&lt;T&gt;&gt;;

// Extract non-function properties
type NonFunctionProperties&lt;T&gt; = Pick&lt;T, NonFunctionPropertyNames&lt;T&gt;&gt;;</code></pre>
      
      <h3>Generic Constraints and Advanced Patterns</h3>
      
      <h4>Generic Constraints</h4>
      <pre><code>// Basic constraint
interface Lengthwise {
  length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Advanced constraint with keyof
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

// Multiple constraints
interface Serializable {
  serialize(): string;
}

interface Timestamped {
  timestamp: Date;
}

function processData&lt;T extends Serializable & Timestamped&gt;(data: T): string {
  return \`[\${data.timestamp.toISOString()}] \${data.serialize()}\`;
}

// Conditional constraints
type ApiEndpoint&lt;T&gt; = T extends 'GET' 
  ? { method: 'GET'; params?: Record&lt;string, string&gt; }
  : T extends 'POST'
  ? { method: 'POST'; body: any }
  : never;

function makeRequest&lt;T extends 'GET' | 'POST'&gt;(config: ApiEndpoint&lt;T&gt;) {
  // Implementation
}</code></pre>
      
      <h3>Declaration Merging and Module Augmentation</h3>
      
      <h4>Interface Merging</h4>
      <pre><code>// Extend existing interfaces
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: User has both name and age properties

// Practical example: Extending Express Request
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

// Now you can use req.user in Express middleware</code></pre>
      
      <h4>Module Augmentation</h4>
      <pre><code>// Extend third-party library types
declare module 'lodash' {
  interface LoDashStatic {
    customMethod(value: any): any;
  }
}

// Extend global objects
declare global {
  interface Array&lt;T&gt; {
    last(): T | undefined;
  }
}

Array.prototype.last = function() {
  return this[this.length - 1];
};</code></pre>
      
      <h3>Advanced Patterns and Best Practices</h3>
      
      <h4>1. Builder Pattern with TypeScript</h4>
      <pre><code>class QueryBuilder&lt;T = any&gt; {
  private query: any = {};
  
  select&lt;K extends keyof T&gt;(...fields: K[]): QueryBuilder&lt;Pick&lt;T, K&gt;&gt; {
    this.query.select = fields;
    return this as any;
  }
  
  where&lt;K extends keyof T&gt;(field: K, value: T[K]): QueryBuilder&lt;T&gt; {
    this.query.where = { ...this.query.where, [field]: value };
    return this;
  }
  
  orderBy&lt;K extends keyof T&gt;(field: K, direction: 'asc' | 'desc' = 'asc'): QueryBuilder&lt;T&gt; {
    this.query.orderBy = { field, direction };
    return this;
  }
  
  build(): any {
    return this.query;
  }
}

// Usage
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const query = new QueryBuilder&lt;User&gt;()
  .select('name', 'email')  // Type-safe field selection
  .where('age', 25)         // Type-safe where clause
  .orderBy('name', 'asc')   // Type-safe ordering
  .build();</code></pre>
      
      <h4>2. Type-Safe Event System</h4>
      <pre><code>type EventMap = {
  'user:created': { id: string; name: string };
  'user:updated': { id: string; changes: Partial&lt;User&gt; };
  'user:deleted': { id: string };
};

class TypedEventEmitter&lt;T extends Record&lt;string, any&gt;&gt; {
  private listeners: { [K in keyof T]?: Array&lt;(data: T[K]) =&gt; void&gt; } = {};
  
  on&lt;K extends keyof T&gt;(event: K, listener: (data: T[K]) =&gt; void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }
  
  emit&lt;K extends keyof T&gt;(event: K, data: T[K]): void {
    this.listeners[event]?.forEach(listener =&gt; listener(data));
  }
  
  off&lt;K extends keyof T&gt;(event: K, listener: (data: T[K]) =&gt; void): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      const index = eventListeners.indexOf(listener);
      if (index &gt; -1) {
        eventListeners.splice(index, 1);
      }
    }
  }
}

const emitter = new TypedEventEmitter&lt;EventMap&gt;();

// Type-safe event handling
emitter.on('user:created', (data) =&gt; {
  // data is automatically typed as { id: string; name: string }
  console.log(\`User \${data.name} created with ID \${data.id}\`);
});</code></pre>
      
      <h3>Performance and Best Practices</h3>
      
      <h4>Type-Level Performance</h4>
      <ul>
        <li><strong>Avoid Deep Recursion:</strong> Limit recursive type definitions to prevent compiler slowdown</li>
        <li><strong>Use Type Aliases:</strong> Create aliases for complex types to improve readability and performance</li>
        <li><strong>Leverage Incremental Compilation:</strong> Use project references for large codebases</li>
        <li><strong>Optimize Conditional Types:</strong> Structure conditions efficiently to reduce compilation time</li>
      </ul>
      
      <h4>Code Organization</h4>
      <pre><code>// types/api.ts - Centralized API types
export interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse&lt;T&gt; extends ApiResponse&lt;T[]&gt; {
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

// types/user.ts - Domain-specific types
export interface User {
  id: string;
  name: string;
  email: string;
}

export type CreateUserRequest = Omit&lt;User, 'id'&gt;;
export type UpdateUserRequest = Partial&lt;CreateUserRequest&gt;;

// services/userService.ts - Type-safe service layer
import { ApiResponse, PaginatedResponse } from '../types/api';
import { User, CreateUserRequest, UpdateUserRequest } from '../types/user';

export class UserService {
  async getUsers(): Promise&lt;PaginatedResponse&lt;User&gt;&gt; {
    // Implementation
  }
  
  async createUser(data: CreateUserRequest): Promise&lt;ApiResponse&lt;User&gt;&gt; {
    // Implementation
  }
  
  async updateUser(id: string, data: UpdateUserRequest): Promise&lt;ApiResponse&lt;User&gt;&gt; {
    // Implementation
  }
}</code></pre>
      
      <h3>Testing with TypeScript</h3>
      
      <h4>Type-Safe Testing</h4>
      <pre><code>// Test utilities with proper typing
type MockFunction&lt;T extends (...args: any[]) =&gt; any&gt; = jest.MockedFunction&lt;T&gt;;

interface TestUser {
  id: string;
  name: string;
  email: string;
}

// Factory function for test data
function createTestUser(overrides: Partial&lt;TestUser&gt; = {}): TestUser {
  return {
    id: 'test-id',
    name: 'Test User',
    email: 'test@example.com',
    ...overrides
  };
}

// Type-safe mocking
const mockUserService = {
  getUser: jest.fn() as MockFunction&lt;(id: string) =&gt; Promise&lt;TestUser&gt;&gt;,
  createUser: jest.fn() as MockFunction&lt;(data: Omit&lt;TestUser, 'id'&gt;) =&gt; Promise&lt;TestUser&gt;&gt;
};

// Test with proper typing
describe('UserService', () =&gt; {
  it('should create user with correct data', async () =&gt; {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const expectedUser = createTestUser({ ...userData, id: 'new-id' });
    
    mockUserService.createUser.mockResolvedValue(expectedUser);
    
    const result = await mockUserService.createUser(userData);
    
    expect(result).toEqual(expectedUser);
    expect(mockUserService.createUser).toHaveBeenCalledWith(userData);
  });
});</code></pre>
      
      <h3>Conclusion</h3>
      <p>Mastering advanced TypeScript patterns requires practice and understanding of the type system's capabilities. These patterns enable you to:</p>
      
      <ul>
        <li><strong>Build Type-Safe APIs:</strong> Ensure compile-time safety for your entire application</li>
        <li><strong>Create Reusable Libraries:</strong> Build libraries with excellent developer experience</li>
        <li><strong>Improve Code Quality:</strong> Catch errors at compile time rather than runtime</li>
        <li><strong>Enhance Developer Experience:</strong> Provide better IntelliSense and autocompletion</li>
        <li><strong>Scale Large Applications:</strong> Maintain code quality as your application grows</li>
      </ul>
      
      <p>Remember that TypeScript is a tool to help you write better JavaScript. Use these advanced features judiciously—sometimes a simple type annotation is better than a complex generic constraint. The goal is to make your code more maintainable, not more complex.</p>
      
      <p>Keep practicing these patterns, and you'll find that TypeScript becomes a powerful ally in building robust, scalable applications. The investment in learning these advanced concepts pays dividends in reduced bugs, improved developer experience, and more maintainable codebases.</p>
    `,
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["TypeScript", "Advanced", "Patterns", "Best Practices", "Type Safety"],
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "4",
    slug: "building-restful-apis-express-mongodb",
    title: "Building RESTful APIs with Express.js and MongoDB",
    excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Express.js and MongoDB with proper authentication and validation.",
    content: `
      <p>Building robust RESTful APIs is a fundamental skill for backend developers. This comprehensive guide will walk you through creating a complete, production-ready API using Express.js and MongoDB, covering everything from basic setup to advanced patterns.</p>
      
      <h3>Project Setup and Architecture</h3>
      
      <h4>Project Structure</h4>
      <p>Start with a well-organized project structure that scales with your application:</p>
      
      <pre><code>project/
├── src/
│   ├── controllers/          # Route handlers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── postController.js
│   ├── models/              # Database models
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/              # Route definitions
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── posts.js
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── utils/               # Utility functions
│   │   ├── database.js
│   │   ├── logger.js
│   │   └── helpers.js
│   ├── config/              # Configuration files
│   │   ├── database.js
│   │   └── config.js
│   └── app.js               # Express app setup
├── tests/                   # Test files
├── docs/                    # API documentation
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── server.js                # Entry point</code></pre>
      
      <h4>Essential Dependencies</h4>
      <pre><code>// package.json dependencies
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "joi": "^17.9.2",
    "helmet": "^7.0.0",
    "cors": "^2.8.5",
    "morgan": "^1.10.0",
    "express-rate-limit": "^6.8.1",
    "compression": "^1.7.4",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.2",
    "supertest": "^6.3.3"
  }
}</code></pre>
      
      <h3>Express Application Setup</h3>
      
      <h4>Basic Express Configuration</h4>
      <pre><code>// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
app.use(morgan('combined'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;</code></pre>
      
      <h3>Database Design with Mongoose</h3>
      
      <h4>User Model</h4>
      <pre><code>// src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Don't include password in queries by default
  },
  profile: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    avatar: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      maxlength: [500, 'Bio cannot exceed 500 characters']
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date,
    default: null
  },
  refreshTokens: [{
    token: String,
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 604800 // 7 days
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full name
userSchema.virtual('profile.fullName').get(function() {
  return \`\${this.profile.firstName} \${this.profile.lastName}\`;
});

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ 'profile.firstName': 1, 'profile.lastName': 1 });

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Instance method to generate JWT token
userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { 
      userId: this._id, 
      email: this.email, 
      role: this.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
};

// Instance method to generate refresh token
userSchema.methods.generateRefreshToken = function() {
  const refreshToken = jwt.sign(
    { userId: this._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  this.refreshTokens.push({ token: refreshToken });
  return refreshToken;
};

// Static method to find user by credentials
userSchema.statics.findByCredentials = async function(email, password) {
  const user = await this.findOne({ email, isActive: true }).select('+password');
  
  if (!user) {
    throw new Error('Invalid login credentials');
  }
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid login credentials');
  }
  
  return user;
};

module.exports = mongoose.model('User', userSchema);</code></pre>
      
      <h4>Post Model with References</h4>
      <pre><code>// src/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    maxlength: [10000, 'Content cannot exceed 10000 characters']
  },
  excerpt: {
    type: String,
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date,
    default: null
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for like count
postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Virtual for comment count
postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

// Indexes for better query performance
postSchema.index({ author: 1, status: 1 });
postSchema.index({ tags: 1 });
postSchema.index({ publishedAt: -1 });
postSchema.index({ title: 'text', content: 'text' }); // Text search

// Pre-save middleware to set publishedAt
postSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Static method for published posts
postSchema.statics.findPublished = function(options = {}) {
  return this.find({ status: 'published', ...options })
    .populate('author', 'profile.firstName profile.lastName profile.avatar')
    .sort({ publishedAt: -1 });
};

module.exports = mongoose.model('Post', postSchema);</code></pre>
      
      <h3>Authentication and Authorization</h3>
      
      <h4>JWT Authentication Middleware</h4>
      <pre><code>// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied. No token provided.' 
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user || !user.isActive) {
      return res.status(401).json({ 
        error: 'Invalid token. User not found or inactive.' 
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token.' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired.' });
    }
    res.status(500).json({ error: 'Server error during authentication.' });
  }
};

// Role-based authorization middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required.' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Access denied. Insufficient permissions.' 
      });
    }
    
    next();
  };
};

// Resource ownership middleware
const checkOwnership = (resourceModel, resourceIdParam = 'id') => {
  return async (req, res, next) => {
    try {
      const resourceId = req.params[resourceIdParam];
      const resource = await resourceModel.findById(resourceId);
      
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found.' });
      }
      
      // Check if user owns the resource or is admin
      if (resource.author?.toString() !== req.user._id.toString() && 
          req.user.role !== 'admin') {
        return res.status(403).json({ 
          error: 'Access denied. You can only access your own resources.' 
        });
      }
      
      req.resource = resource;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Server error during ownership check.' });
    }
  };
};

module.exports = { auth, authorize, checkOwnership };</code></pre>
      
      <h3>Input Validation</h3>
      
      <h4>Joi Validation Schemas</h4>
      <pre><code>// src/middleware/validation.js
const Joi = require('joi');

// User validation schemas
const userSchemas = {
  register: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required'
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required'
    }),
    profile: Joi.object({
      firstName: Joi.string().min(2).max(50).required(),
      lastName: Joi.string().min(2).max(50).required(),
      bio: Joi.string().max(500).optional()
    }).required()
  }),
  
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),
  
  updateProfile: Joi.object({
    profile: Joi.object({
      firstName: Joi.string().min(2).max(50),
      lastName: Joi.string().min(2).max(50),
      bio: Joi.string().max(500).allow('')
    }),
    email: Joi.string().email()
  }).min(1) // At least one field must be provided
};

// Post validation schemas
const postSchemas = {
  create: Joi.object({
    title: Joi.string().min(5).max(200).required(),
    content: Joi.string().min(10).max(10000).required(),
    excerpt: Joi.string().max(500).optional(),
    tags: Joi.array().items(Joi.string().min(2).max(30)).max(10).optional(),
    status: Joi.string().valid('draft', 'published').default('draft')
  }),
  
  update: Joi.object({
    title: Joi.string().min(5).max(200),
    content: Joi.string().min(10).max(10000),
    excerpt: Joi.string().max(500).allow(''),
    tags: Joi.array().items(Joi.string().min(2).max(30)).max(10),
    status: Joi.string().valid('draft', 'published', 'archived')
  }).min(1),
  
  comment: Joi.object({
    content: Joi.string().min(1).max(1000).required()
  })
};

// Validation middleware factory
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // Return all errors
      stripUnknown: true // Remove unknown fields
    });
    
    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));
      
      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }
    
    req.body = value; // Use validated and sanitized data
    next();
  };
};

module.exports = {
  validate,
  userSchemas,
  postSchemas
};</code></pre>
      
      <h3>Error Handling</h3>
      
      <h4>Global Error Handler</h4>
      <pre><code>// src/middleware/errorHandler.js
const logger = require('../utils/logger');

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

const handleCastErrorDB = (err) => {
  const message = \`Invalid \${err.path}: \${err.value}\`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const field = Object.keys(err.keyValue)[0];
  const value = err.keyValue[field];
  const message = \`Duplicate field value: \${field} = '\${value}'. Please use another value!\`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = \`Invalid input data. \${errors.join('. ')}\`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    // Programming or other unknown error: don't leak error details
    logger.error('ERROR 💥', err);
    
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!'
    });
  }
};

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };
    error.message = err.message;
    
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    
    sendErrorProd(error, res);
  }
};

module.exports = { errorHandler, AppError };</code></pre>
      
      <h3>API Controllers</h3>
      
      <h4>User Controller</h4>
      <pre><code>// src/controllers/userController.js
const User = require('../models/User');
const { AppError } = require('../middleware/errorHandler');

// Get current user profile
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

// Update user profile
const updateProfile = async (req, res, next) => {
  try {
    const updates = req.body;
    
    // Prevent password updates through this endpoint
    delete updates.password;
    delete updates.role;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    res.json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

// Get all users (admin only)
const getAllUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const users = await User.find({ isActive: true })
      .select('-refreshTokens')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    
    const total = await User.countDocuments({ isActive: true });
    
    res.json({
      status: 'success',
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Delete user account
const deleteAccount = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { isActive: false });
    
    res.json({
      status: 'success',
      message: 'Account deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getAllUsers,
  deleteAccount
};</code></pre>
      
      <h3>API Documentation with Swagger</h3>
      
      <h4>Swagger Setup</h4>
      <pre><code>// Add to package.json
"swagger-jsdoc": "^6.2.8",
"swagger-ui-express": "^5.0.0"

// src/docs/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'A comprehensive REST API for a blog application',
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };</code></pre>
      
      <h3>Testing Strategy</h3>
      
      <h4>Integration Tests</h4>
      <pre><code>// tests/auth.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/User');

describe('Authentication', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        profile: {
          firstName: 'John',
          lastName: 'Doe'
        }
      };
      
      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201);
      
      expect(response.body.status).toBe('success');
      expect(response.body.data.user.email).toBe(userData.email);
      expect(response.body.data.token).toBeDefined();
      
      // Verify user was created in database
      const user = await User.findOne({ email: userData.email });
      expect(user).toBeTruthy();
      expect(user.profile.firstName).toBe(userData.profile.firstName);
    });
    
    it('should not register user with invalid email', async () => {
      const userData = {
        email: 'invalid-email',
        password: 'password123',
        profile: {
          firstName: 'John',
          lastName: 'Doe'
        }
      };
      
      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400);
      
      expect(response.body.error).toBe('Validation failed');
    });
  });
  
  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      const user = new User({
        email: 'test@example.com',
        password: 'password123',
        profile: {
          firstName: 'John',
          lastName: 'Doe'
        }
      });
      await user.save();
    });
    
    it('should login with valid credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        })
        .expect(200);
      
      expect(response.body.status).toBe('success');
      expect(response.body.data.token).toBeDefined();
      expect(response.body.data.user.email).toBe('test@example.com');
    });
    
    it('should not login with invalid credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword'
        })
        .expect(401);
      
      expect(response.body.error).toBe('Invalid login credentials');
    });
  });
});</code></pre>
      
      <h3>Performance Optimization</h3>
      
      <h4>Database Optimization</h4>
      <ul>
        <li><strong>Indexing:</strong> Create appropriate indexes for frequently queried fields</li>
        <li><strong>Pagination:</strong> Implement cursor-based pagination for large datasets</li>
        <li><strong>Population:</strong> Use selective population to avoid over-fetching</li>
        <li><strong>Aggregation:</strong> Use MongoDB aggregation pipeline for complex queries</li>
      </ul>
      
      <h4>Caching Strategy</h4>
      <pre><code>// src/utils/cache.js
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

const cache = {
  get: async (key) => {
    try {
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  },
  
  set: async (key, data, expiration = 3600) => {
    try {
      await client.setex(key, expiration, JSON.stringify(data));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  },
  
  del: async (key) => {
    try {
      await client.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }
};

module.exports = cache;</code></pre>
      
      <h3>Deployment Best Practices</h3>
      
      <h4>Environment Configuration</h4>
      <pre><code># .env.example
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog-api
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=your-refresh-secret
REDIS_URL=redis://localhost:6379
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001</code></pre>
      
      <h4>Docker Configuration</h4>
      <pre><code># Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "server.js"]</code></pre>
      
      <h3>Conclusion</h3>
      <p>Building robust RESTful APIs requires attention to many details, from security and validation to performance and testing. This guide has covered:</p>
      
      <ul>
        <li><strong>Proper Project Structure:</strong> Organized, scalable codebase</li>
        <li><strong>Security Best Practices:</strong> Authentication, authorization, and input validation</li>
        <li><strong>Database Design:</strong> Well-structured schemas with proper relationships</li>
        <li><strong>Error Handling:</strong> Comprehensive error management and logging</li>
        <li><strong>Testing Strategy:</strong> Unit and integration tests for reliability</li>
        <li><strong>Performance Optimization:</strong> Caching, indexing, and efficient queries</li>
        <li><strong>Documentation:</strong> Clear API documentation with Swagger</li>
        <li><strong>Deployment:</strong> Production-ready configuration and containerization</li>
      </ul>
      
      <p>By following these practices and patterns, you'll create APIs that are secure, scalable, maintainable, and ready for production use. Remember that building great APIs is an iterative process—start with solid foundations and continuously improve based on real-world usage and feedback.</p>
    `,
    date: "2023-12-28",
    readTime: "18 min read",
    tags: ["Express.js", "MongoDB", "REST API", "Backend", "Node.js", "Authentication"],
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];