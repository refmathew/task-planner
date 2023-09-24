import axios from "axios";
import useUserStore from "@/store/user-store";

const API_URL = process.env.API_URL;

class UserService {
  static async fetchUsers() {
    try {
      const userStore = useUserStore();
      const { data } = await axios.get(API_URL + "/users");
      userStore.users = data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserService;
