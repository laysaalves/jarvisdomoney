'use client';

import { useEffect, useState } from "react";
import ActivityTableHeader from "../dashboard/table-component/activityTableHeader";
import ActivityTableRow from "../dashboard/table-component/activityTableRow";
import ActivityTablePagination from "../dashboard/table-component/activityTablePagination";
import LoadingState from "../dashboard/table-component/loadingState";
import EmptyState from "../dashboard/table-component/emptyState";

interface Activity {
  id: string;
  title: string;
  price: number;
  paymentType: string;
  method: string;
  updatedAt: string;
  status: string;
}

export default function ActivityTable() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 7;

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/activity");
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Erro ao buscar atividades:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = activities; // pode aplicar filtro no futuro
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#28323c] p-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-6xl p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#789d13] text-white">
            MOVIMENTAÇÕES
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <ActivityTableHeader />
            <tbody className="bg-white divide-y divide-gray-100">
              {loading ? (
                <LoadingState />
              ) : paginated.length === 0 ? (
                <EmptyState searchQuery={searchQuery} />
              ) : (
                paginated.map((item, i) => (
                  <ActivityTableRow key={item.id} activity={item} index={(currentPage - 1) * itemsPerPage + i} />
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && filtered.length > 0 && (
          <ActivityTablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
