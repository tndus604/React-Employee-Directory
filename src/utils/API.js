import axios from "axios";

async function getUsers() {
  const response = await axios.get(
    "https://randomuser.me/api/?results=200&nat=us"
  );
  return response.data
}

export default getUsers;