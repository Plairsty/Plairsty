import {Form, TextField, PasswordField, Submit} from '@redwoodjs/forms'
import {useAuth} from "@redwoodjs/auth";
import {routes, navigate} from "@redwoodjs/router";

const SignupPage = () => {
  const {client} = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = async (data: Record<string, any>) => {
    try {
      const response = await client.auth.signup({
        email: data.email,
        password: data.password
      })
      response?.error?.message ? setError(response.error.message) : navigate(routes.home())
    } catch (e) {
      // @ts-ignore
      setError(e.message)
    }
  }
  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email"/>
        <PasswordField name="password" placeholder="password"/>
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}

export default SignupPage

