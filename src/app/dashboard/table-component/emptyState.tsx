export default function EmptyState({ searchQuery }: { searchQuery: string }) {
    return (
      <tr>
        <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
          {searchQuery ? "Nenhum resultado encontrado" : "Nenhuma cobrança disponível"}
        </td>
      </tr>
    );
  }
  