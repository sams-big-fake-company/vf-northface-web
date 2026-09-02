import Link from "next/link";

function titleFromSlug(slug: string[]): string {
  return slug
    .join(" ")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function GenericPage({
  params,
}: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const title = titleFromSlug(slug);
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
        Demo Site
      </p>
      <h1 className="mt-3 text-3xl font-extrabold">{title}</h1>
      <p className="mt-4 text-zinc-600">
        This section of the demo site is under construction. In the real
        experience, you&apos;d find detailed information about{" "}
        {title.toLowerCase()} here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
