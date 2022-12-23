import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/httpRequest";
import { AccountAPI } from "../configs/account";

const findAllAccount = async () => {
  try {
    const response = await httpRequest(AccountAPI.getAllAccount);
    return response.userList;
  } catch (err) {
    return err.response.data;
  }
};
export const withdraw = async (id) => {
  try {
    const response = await httpRequest({
      url: "/paypal/withdraw",
      method: "POST",
      data: {
        withdrawId: id,
      },
    });
    return response.link;
  } catch (err) {
    return err.response.data;
  }
};
export const captureOrder = async (id) => {
  try {
    const response = await httpRequest({
      url: "/paypal/capture-order",
      method: "POST",
      data: {
        withdrawId: id,
      },
    });
    return response;
  } catch (err) {
    return err.response.data;
  }
};
const findAllRequestWithdraw = async () => {
  try {
    const response = await httpRequest({
      url: "/paypal/withdraw/all-request",
      method: "GET",
    });
    return response.requestList;
  } catch (err) {
    return err.response.data;
  }
};
export const useFindAllAccount = () => {
  return useQuery(["findAllAccount"], findAllAccount, {
    staleTime: 0,
  });
};
export const useFindAllRequestWithdraw = () => {
  return useQuery(["findAllRequestWithdraw"], findAllRequestWithdraw, {
    staleTime: 0,
  });
};
const accountServices = {
  findAllAccount,
};
export default accountServices;
