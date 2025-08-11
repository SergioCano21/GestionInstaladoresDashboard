import { useMutation, useQueryClient, type MutationFunction } from '@tanstack/react-query';

export function useCustomMutation<TData = any, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
  queryKey: string[] | string[][],
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data: any) => {
      alert(data.message);
      if (Array.isArray(queryKey[0])) {
        (queryKey as string[][]).forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key, refetchType: 'all' });
        });
      } else {
        queryClient.invalidateQueries({ queryKey });
      }
    },
    onError: (error: any) => {
      alert(error.message || 'Ocurrió un error');
    },
  });
}
