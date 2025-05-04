'use client'
import StatusBadge from "../table-component/statusBadge"

interface Activity {
  id: string;
  title: string;
  price: number;
  paymentType: string;
  method: string;
  updatedAt: string;
  status: string;
}

interface Props {
  activity: Activity;
  index: number;
}

export default function BillingTableRow({ activity, index }: Props) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
        {String(index + 1).padStart(3, "0")}
      </td>
      <td className="px-4 py-3 text-sm text-gray-700">{activity.title}</td>
      <td className="px-4 py-3 text-sm text-gray-700">R$ {activity.price.toFixed(2)}</td>
      <td className="px-4 py-3 text-sm text-gray-700 hidden sm:table-cell">{activity.paymentType}</td>
      <td className="px-4 py-3 text-sm text-gray-700 hidden md:table-cell">{activity.method}</td>
      <td className="px-4 py-3 text-sm text-gray-700 hidden lg:table-cell">
        {activity.updatedAt
          ? new Date(activity.updatedAt).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "-"}
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <StatusBadge status={activity.status} />
      </td>
    </tr>
  );
}
