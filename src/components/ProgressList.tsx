interface ProgressItem {
  label: string;
  value: number;
}

interface ProgressListProps {
  items: ProgressItem[];
}

export function ProgressList({ items }: ProgressListProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between mb-2">
            <strong>{item.label}</strong>
            <span className="text-turquoise-dark font-bold">
              {item.value}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-light overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-turquoise to-turquoise-dark"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

