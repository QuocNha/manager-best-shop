// hooks/useCreateUser.ts
import { IResponseParams } from "@/types/common";
import { axiosBaseQuery } from "@/utils/request";
import { ResponseBase } from "@/utils/request-helper";
import { UseBaseMutationResult, useMutation } from "@tanstack/react-query";

// Lấy axios base query
const baseQuery = axiosBaseQuery();

export const useCreateUser = (): UseBaseMutationResult<
  ResponseBase<any>,
  Error,
  IResponseParams<any>
> => {
  return useMutation({
    mutationFn: (data) =>
      baseQuery({
        url: "/users",
        method: "POST",
        data,
      }) as Promise<ResponseBase<any>>, // ép kiểu ở đây nếu cần
  });
};
