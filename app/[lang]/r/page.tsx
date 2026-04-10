import { SharedResultView } from '@/components/SharedResultView';

export default async function SharedResultPage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string; s?: string }>;
}) {
  const params = await searchParams;
  return <SharedResultView d={params.d} s={params.s} />;
}
