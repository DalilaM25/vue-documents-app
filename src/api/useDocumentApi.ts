import type {Document}  from '@/types/document';

export function useDocumentApi() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const fetchDocuments = async (searchQuery: string = ''): Promise<Document[]> => {
    try {
      const response = await fetch(
        `${baseURL}/user/docs?search=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`)
      }

      return await response.json();
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Failed to fetch documents'
      );
    }
  };

  return {
    fetchDocuments,
  };
}
