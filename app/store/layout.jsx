import Link from "next/link";

export default function StoreLayout({children}) {
  return (
    <>
      <nav>
        <h3>Store Section</h3>
        <ul>
          <li>
            <Link href="/store/categories/computers">Computers</Link>
          </li>
          <li>
            <Link href="/store/categories/iphones">Iphones</Link>
          </li>
        </ul>
        {children}
      </nav>
    </>
  )
}
