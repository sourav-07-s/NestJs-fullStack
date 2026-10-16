import { Suspense } from "react";

type BlogProps = {
  params: Promise<{
    somethinb: string;
  }>;
};

async function BlogContent({ params }: BlogProps) {
  const { somethinb } = await params;

  return <div>Blog: {somethinb}</div>;
}

export default function Blog({ params }: BlogProps) {
  return (
    <Suspense fallback={<div>Loading service...</div>}>
      <BlogContent params={params} />
    </Suspense>
  );
}