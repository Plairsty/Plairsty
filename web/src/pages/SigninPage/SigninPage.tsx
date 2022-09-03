import { useAuth } from '@redwoodjs/auth'
import { Form, PasswordField, Submit, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

const SigninPage = () => {
  const [error, setError] = React.useState('')
  const { logIn } = useAuth()

  const onSubmit = async (data: Record<string, string>) => {
    try {
      const response = await logIn({
        email: data.email,
        password: data.password,
      })
      response?.error?.message
        ? setError(response.error.message)
        : navigate(routes.home())
    } catch (error) {
      setError(error as string)
    }
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
