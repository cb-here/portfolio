import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = ({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  error,
  fullWidth = false,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <StyledWrapper $fullWidth={fullWidth}>
      <div className="nebula-input">
        <input
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          className="input"
          disabled={disabled}
          {...props}
        />
        <label className="user-label">{label}</label>
        <div className="nebula-particle" style={{ '--x': '-0.2', '--y': '-0.4', '--delay': '0.1s' } as React.CSSProperties} />
        <div className="nebula-particle" style={{ '--x': '0.5', '--y': '-0.2', '--delay': '0.3s' } as React.CSSProperties} />
        <div className="nebula-particle" style={{ '--x': '0.3', '--y': '0.3', '--delay': '0.5s' } as React.CSSProperties} />
        <div className="nebula-particle" style={{ '--x': '0.7', '--y': '0.1', '--delay': '0.2s' } as React.CSSProperties} />
        <div className="nebula-particle" style={{ '--x': '0.1', '--y': '-0.7', '--delay': '0.4s' } as React.CSSProperties} />
        <div className="nebula-particle" style={{ '--x': '0.6', '--y': '0.4', '--delay': '0.6s' } as React.CSSProperties} />
        {error && <span className="error-message">{error}</span>}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $fullWidth?: boolean }>`
  .nebula-input {
    position: relative;
    width: ${props => props.$fullWidth ? '100%' : '250px'};
    margin: 16px auto;
  }

  .nebula-input .input {
    width: 100%;
    padding: 15px;
    border: 2px solid #2a2a3a;
    background: #00000f;
    color: white;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    transition: all 0.4s ease-out;
  }

  .nebula-input .input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .nebula-input .input::placeholder {
    color: #4a4a6a;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .nebula-input .input:focus::placeholder {
    opacity: 1;
  }

  .nebula-input .user-label {
    position: absolute;
    left: 15px;
    top: 15px;
    pointer-events: none;
    color: #6a6a8a;
    transition: all 0.4s ease-out;
    background: #00000f;
    padding: 0 5px;
  }

  .nebula-input .input:focus {
    border-color: #b56aff;
    box-shadow:
      0 5px 8px rgba(181, 106, 255, 0.3),
      0 10px 20px rgba(181, 106, 255, 0.2),
      0 15px 40px rgba(181, 106, 255, 0.15),
      0 20px 60px rgba(181, 106, 255, 0.1);
  }

  .nebula-input .input:focus ~ .user-label,
  .nebula-input .input:not(:placeholder-shown) ~ .user-label {
    transform: translateY(-25px);
    font-size: 12px;
    color: #d18cff;
    left: 10px;
  }

  .nebula-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    top: 50%;
    left: 10px;
    filter: blur(0.8px);
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
  }

  .nebula-input .input:focus ~ .nebula-particle {
    animation: nebula-float 2s forwards ease-out;
  }

  .error-message {
    display: block;
    color: #ff6b6b;
    font-size: 12px;
    margin-top: 5px;
    padding-left: 5px;
  }

  @keyframes nebula-float {
    0% {
      transform: translate(0, -50%) scale(0.8);
      opacity: 0;
      background: #c774ff;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translate(calc(var(--x) * 140px), calc(var(--y) * 35px))
        scale(1.1);
      opacity: 0;
      background: #6df2ff;
    }
  }`;

export default Input;
