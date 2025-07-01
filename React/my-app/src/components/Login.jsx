import { Button } from "./Button";
import { Input } from "./Input";

export function Login() {
  return (
    <div className="Forms">
      <h1>Login</h1>

      <form>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <a href="">Forgot password?</a>
        <Button
          type="submit"
          text="Login"
          onClick={() => alert("Input clicked")}
        />
        <p>
          Don't have an account? <a href="">Signup</a>
        </p>
      </form>
    </div>
  )
}