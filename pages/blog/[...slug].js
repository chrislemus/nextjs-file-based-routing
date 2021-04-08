import { useRouter } from 'next/router';

export default function BlogPostsPage() {
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname, query);

  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  );
}
