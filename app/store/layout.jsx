import Link from "next/link";

export const metadata = {
  title: "Treasure Store"
}

export default function StoreLayout({children}) {
  return (
    <>
      <nav>
        <h3>Store Section</h3>
        <ul>
          <li>
            <Link href="/store/categories/computers">Shirts</Link>
          </li>
          <li>
            <Link href="/store/categories/iphones">Shoes</Link>
          </li>
        </ul>
        {children}
      </nav>
    </>
  )
}
