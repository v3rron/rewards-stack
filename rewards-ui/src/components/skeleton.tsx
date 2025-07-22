export const Skeleton = ({ count = 5 }) => (
  <ul className="space-y-4 animate-pulse w-full">
    {Array.from({ length: count }).map((_, idx) => (
      <li key={idx} className="h-6 bg-gray-300 rounded w-full" />
    ))}
  </ul>
);
