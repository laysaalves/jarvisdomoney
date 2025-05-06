import { BadgeAlert, BadgeX, BadgeCheck } from "lucide-react";

export default function StatusBadge({ status }: { status?: string }) {
  const getStatusColor = () => {
    switch (status?.toLowerCase()) {
      case "pending":
      case "pendente":
        return "text-yellow-600 bg-yellow-50";
      case "paid":
      case "finish":
        return "text-green-600 bg-green-50";
      case "cancelled":
      case "fail":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = () => {
    switch (status?.toLowerCase()) {
      case "pending":
      case "pendente":
        return <BadgeAlert className="w-4 h-4" />;
      case "paid":
      case "finish":
        return <BadgeCheck className="w-4 h-4" />;
      case "cancelled":
      case "fail":
        return <BadgeX className="w-4 h-4" />;
      default:
        return <BadgeAlert className="w-4 h-4" />;
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
    >
      {getStatusIcon()}
      {status}
    </div>
  );
}
