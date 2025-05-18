"use client";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, onClick, ...other }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
