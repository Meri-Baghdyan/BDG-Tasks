export function Input({ placeholder, type="text", name }) {
    return (
            <input 
            className="auth-input" 
            type={type} 
            placeholder={placeholder} 
            name="name"
            />
    );
}


