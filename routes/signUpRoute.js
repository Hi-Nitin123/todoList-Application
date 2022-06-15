import userRegister from "../controller/signUp.js";
const signUp = (app) => {
  app.post("/signUp", userRegister);
};

export default signUp;
