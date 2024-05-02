import { FilterButton } from "@/features/products/components/FilterButton";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24 flex-col gap-3 md:flex-row md:gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray">
          High-quality cotton selection
        </h1>

        <FilterButton />
      </div>
    </main>
  );
}
