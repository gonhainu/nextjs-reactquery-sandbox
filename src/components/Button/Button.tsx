type Props = React.ComponentPropsWithRef<"button">;

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
