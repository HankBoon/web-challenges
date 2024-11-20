export function Link({ children, href }) {
  return (
    <a href={href} className="navigation__link">
      {children}
    </a>
  );
}
