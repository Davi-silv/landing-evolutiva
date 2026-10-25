export function Breadcrumbs({ current }) {
  return (
    <nav className="crumbs" aria-label="Trilha de navegação">
      <ol>
        <li>
          <a href="/">Início</a>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
