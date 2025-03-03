import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header ">
        <h2>CRM project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a
          href="https://github.com/mohammadreza8822 "
          target="_blank"
          rel="noreferrer"
        >
          Developed by Mohammadreza ❤️
        </a>{" "}
        | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
