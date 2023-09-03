import axios from "axios";

const instance = axios.create({
	baseURL: "https://sleepy-newt-tuxedo.cyclic.cloud",
	withCredentials: true,
});

export default instance;
