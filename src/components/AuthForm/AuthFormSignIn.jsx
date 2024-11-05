export const AuthFormSignIn = () => {
  return (
    <>
      <h2>Log In</h2>
      <form autoComplete="off">
        <label htmlFor="">
          Email
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </label>
      </form>
      <button type="submit">Log in</button>
    </>
  );
};
