import { useState, forwardRef } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { CustomPasswordInput } from "./custom-password";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <CustomPasswordInput
        type={showPassword ? "text" : "password"}
        className="w-full"
        ref={ref}
        {...props}
        suffix={
          showPassword ? (
            <EyeIcon
              className="w-5 h-5 select-none"
              onClick={() => setShowPassword((PrevState) => !PrevState)}
            />
          ) : (
            <EyeOffIcon
              className="w-5 h-5 select-none "
              onClick={() => setShowPassword((PrevState) => !PrevState)}
            />
          )
        }
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
