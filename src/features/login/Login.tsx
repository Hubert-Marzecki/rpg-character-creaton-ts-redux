import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styles from "./Login.module.css";


export function Login() {
  return (
    <div className={styles.full_height}>
         <Form className={styles.center_field}>
    <Form.Field>
      <label>Login</label>
      <input placeholder="Login" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" />
    </Form.Field>
    <Button primary active
>Login</Button>
    <Button secondary>Register</Button>
    <Button secondary>Forgot password?</Button>
    
  </Form>
    </div>
  
  );
}
