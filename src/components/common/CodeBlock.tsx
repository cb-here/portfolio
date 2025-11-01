import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CodeSnippet {
  language: string;
  code: string;
}

interface CodeBlockProps {
  snippets: CodeSnippet[];
  animate?: boolean;
}

const CodeBlock = ({ snippets, animate = true }: CodeBlockProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(snippets[0].language);
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSnippet = snippets.find(s => s.language === selectedLanguage) || snippets[0];

  useEffect(() => {
    // Reset animation when language changes
    setDisplayedCode('');
    setCurrentIndex(0);
  }, [selectedLanguage]);

  useEffect(() => {
    if (!animate || currentIndex >= currentSnippet.code.length) {
      if (!animate) setDisplayedCode(currentSnippet.code);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedCode(currentSnippet.code.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 20);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentSnippet.code, animate]);

  const highlightCode = (code: string) => {
    const keywords = {
      javascript: ['const', 'let', 'var', 'function', 'return', 'class', 'export', 'import', 'from', 'new', 'if', 'else', 'for', 'while', 'this'],
      python: ['def', 'class', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'self', 'True', 'False', 'None', 'print'],
      java: ['public', 'private', 'class', 'static', 'void', 'return', 'new', 'if', 'else', 'for', 'while', 'String', 'int', 'boolean', 'System']
    };

    const langKeywords = keywords[selectedLanguage.toLowerCase() as keyof typeof keywords] || keywords.javascript;
    const keywordPattern = new RegExp(`\\b(${langKeywords.join('|')})\\b`, 'g');

    return code
      .replace(/(\/\/.+$|#.+$)/gm, '<span class="comment">$&</span>')
      .replace(keywordPattern, '<span class="keyword">$&</span>')
      .replace(/\b(true|false|null|undefined|True|False|None)\b/g, '<span class="boolean">$&</span>')
      .replace(/(['"`])(.*?)\1/g, '<span class="string">$&</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$&</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="class-name">$&</span>');
  };

  const getLanguageIcon = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
        return '🟨 JS';
      case 'python':
        return '🐍 PY';
      case 'java':
        return '☕ JAVA';
      default:
        return lang;
    }
  };

  return (
    <StyledWrapper>
      <div className="code-block">
        <div className="code-header">
          <div className="dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="language-tabs">
            {snippets.map((snippet) => (
              <button
                key={snippet.language}
                className={`lang-tab ${selectedLanguage === snippet.language ? 'active' : ''}`}
                onClick={() => setSelectedLanguage(snippet.language)}
              >
                {getLanguageIcon(snippet.language)}
              </button>
            ))}
          </div>
        </div>
        <div className="code-content">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightCode(displayedCode) }} />
            {animate && currentIndex < currentSnippet.code.length && <span className="cursor">|</span>}
          </pre>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .code-block {
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #2a2a3a;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .code-header {
    background: #2d2d2d;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #3a3a3a;
  }

  .dots {
    display: flex;
    gap: 8px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dot.red {
    background: #ff5f56;
  }

  .dot.yellow {
    background: #ffbd2e;
  }

  .dot.green {
    background: #27c93f;
  }

  .language-tabs {
    display: flex;
    gap: 8px;
  }

  .lang-tab {
    background: transparent;
    border: 1px solid #3a3a3a;
    color: #858585;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .lang-tab:hover {
    background: #3a3a3a;
    color: #d4d4d4;
  }

  .lang-tab.active {
    background: #007acc;
    border-color: #007acc;
    color: #ffffff;
  }

  .code-content {
    padding: 20px;
    overflow-x: auto;
  }

  pre {
    margin: 0;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
    color: #d4d4d4;
  }

  code {
    font-family: inherit;
  }

  .keyword {
    color: #c586c0;
    font-weight: 500;
  }

  .string {
    color: #ce9178;
  }

  .number {
    color: #b5cea8;
  }

  .boolean {
    color: #569cd6;
  }

  .comment {
    color: #6a9955;
    font-style: italic;
  }

  .class-name {
    color: #4ec9b0;
  }

  .cursor {
    color: #ffffff;
    animation: blink 1s infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }

  /* Scrollbar styling */
  .code-content::-webkit-scrollbar {
    height: 8px;
  }

  .code-content::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  .code-content::-webkit-scrollbar-thumb {
    background: #424242;
    border-radius: 4px;
  }

  .code-content::-webkit-scrollbar-thumb:hover {
    background: #4e4e4e;
  }
`;

export default CodeBlock;
