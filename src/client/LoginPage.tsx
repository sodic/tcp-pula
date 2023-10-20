import Layout from './MainLayout.jsx';

/** 😎 WASP AUTH 🐝 */
import { LoginForm } from '@wasp/auth/forms/Login';

export function LoginPage() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
