import { request } from "@/api/apiConfig";
import { API } from "@/types/index";

const {
	Methods: { GET, POST, PUT, DELETE },
} = API;

export const queryXXX = async (params: API.Params) => {
	const res = await request({
		url: "/xxx",
		method: GET,
	});
	return res;
};
