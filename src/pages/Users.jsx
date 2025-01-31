import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
function NewUsers() {
  return (
    <>
      <Heading as="h1">Add a new user</Heading>;
      <SignupForm />
    </>
  );
}

export default NewUsers;
