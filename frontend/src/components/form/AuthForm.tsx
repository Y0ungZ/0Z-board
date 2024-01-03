import { FormEvent } from 'react';
import ContainedButton from '@/components/button/ContainedButton';

const AuthForm = ({ type }: AuthFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div>
        <label htmlFor="email" className="font-accent">
          이메일
        </label>
        <input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          className="mb-5 w-full bg-yellow text-center"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-accent">
          비밀번호
        </label>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          className="w-full bg-yellow text-center"
        />
      </div>
      <ContainedButton text={type} />
    </form>
  );
};

interface AuthFormProps {
  type: string;
}

export default AuthForm;
