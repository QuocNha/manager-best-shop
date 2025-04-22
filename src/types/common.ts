// @typescript-eslint/no-explicit-any
export interface IResponseParams<T = any> {
  partnerId: string;
  channelId: string;
  requestTime: string;
  data: T;
  userRequest?: string;
}
