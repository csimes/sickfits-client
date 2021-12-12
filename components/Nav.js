import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      {/* //* use Link tag to reference pages internally, 
          //* use regular a tag for external links  */}
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}
