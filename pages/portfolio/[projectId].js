import { useRouter } from 'next/router';
export default function PortfolioProjectPage() {
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname, query);
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
