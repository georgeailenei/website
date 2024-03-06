import React from "react";

export default function LoginForm() {
  return (
    <form method="GET">
      <div>
        <input type="text" name="username" placeholder="username" required />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
