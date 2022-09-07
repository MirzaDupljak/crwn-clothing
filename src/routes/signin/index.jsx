import SignUpForm from "../../components/sign-up-form";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <div>Sign-in</div>
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign-in</button>
    </div>
  );
};

export default SignIn;
