import { userRepository } from "../repositories/userRepository.js";

class UserService {
  getUsers(){return userRepository.getAll()?userRepository.getAll():null};
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
  findUserbyId(idData){userRepository.getAll().some(user => user.id === idData)}
  getData(data){data?data:null}
  saveData = data => {
    if (data) {
      const isSaved = userRepository.create(data);
      return isSaved;
    } else {
      return null;
    }
  }
  deleteData(idData){userRepository.deleteData(idData)}
}

const userService = new UserService();

export { userService };
