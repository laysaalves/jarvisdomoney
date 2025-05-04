import { RefreshCw } from "lucide-react";

export default function LoadingState() {
  return (
    <tr>
      <td colSpan={7} className="px-4 py-8 text-center">
        <div className="flex justify-center items-center">
          <RefreshCw className="w-6 h-6 animate-spin text-[#789d13] mr-2" />
          <span>Carregando...</span>
        </div>
      </td>
    </tr>
  );
}
