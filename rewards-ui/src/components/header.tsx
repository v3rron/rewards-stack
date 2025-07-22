import Link from 'next/link';

export const Header = () => (
  <header>
    <Link className="hover:underline hover:underline-offset-4" href="/">
      Rewards App
    </Link>
  </header>
);
