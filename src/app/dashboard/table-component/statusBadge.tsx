import { Clock } from "lucide-react";

export default function StatusBadge({ status }: { status?: string }) {
  const getStatusColor = () => {
    switch (status?.toLowerCase()) {
      case "pending":
      case "pendente":
        return "text-yellow-600 bg-yellow-50";
      case "completed":
      case "concluído":
        return "text-green-600 bg-green-50";
      case "failed":
      case "falha":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
    >
      <Clock className="w-3 h-3" />
      {status}
    </div>
  );
}
