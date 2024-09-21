import { Input, Label } from "reactstrap";
import { EmailInput } from "../../../../Components/NM/InputTypes";

export const UpdatePWDConfig = () => [
  {
    col: 12,
    render: (formData, handleChange) => (
      <EmailInput
        name="user_email"
        label="User Email"
        placeholder="User Email"
        value={formData?.user_email || ""}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    ),
  },
  {
    col: 12,
    render: (formData, handleChange) => (
      <>
        <Label>Type Password</Label>
        <Input
          type="password"
          name="password1"
          defaultValue="password"
          value={formData?.password1 || ""}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </>
    ),
  },
  {
    col: 12,
    render: (formData, handleChange) => (
      <>
        <Label>Re-Type Password</Label>
        <Input
          type="password"
          name="password2"
          defaultValue="password"
          value={formData?.password2 || ""}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </>
    ),
  },
];
