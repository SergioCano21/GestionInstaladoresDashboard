import { useMutation, useQueryClient, type MutationFunction } from '@tanstack/react-query';

export function useCustomMutation<TData = any, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
  queryKey: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data: any) => {
      alert(data.message);
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error: any) => {
      alert(error.message || 'Ocurrió un error');
    },
  });
}
