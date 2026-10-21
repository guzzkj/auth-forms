import Input from '../components/ui/Input.jsx';

export default function AuthPage() {
  return (
    <main>
      <h1>Authentication UI</h1>
      <Input
        id="example-email"
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@example.com"
      />
    </main>
  );
}