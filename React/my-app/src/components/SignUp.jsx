import { Button } from "./Button";
import { Input } from "./Input";


export function SignUp() {
    return (
        <div style={{ width: "300px", margin: "auto" }}>
            <h1>Sign Up</h1>

            <form>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Confirm your password"
                />
                <Button
                    type="submit"
                    text="Login"
                    onClick={() => alert("Input clicked")}
                />
                <p>Already have an account?</p><a href="">Login</a>
            </form>
        </div>
    )
}