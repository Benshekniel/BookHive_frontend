import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BookOpen } from 'lucide-react';
import Button from '../../components/shared/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional()
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => {
    console.log('Login data:', data);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center text-3xl font-bold" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            <BookOpen className="mr-2" style={{ color: '#ffd639' }} size={32} />
            <span>Book<span style={{ color: '#ffd639' }}>Hive</span></span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium" style={{ color: '#407aff' }}
            onMouseOver={(e) => (e.target.style.color = '#1A3AFF')}
            onMouseOut={(e) => (e.target.style.color = '#407aff')}
          >
            Sign up for free
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10 transition-all duration-200">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="input"
                  style={{
                    borderColor: '#D1D5DB',
                    boxShadow: '0 0 0 2px rgba(255, 214, 57, 0.5)',
                  }}
                  onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px rgba(255, 214, 57, 0.5)')}
                  onBlur={(e) => (e.target.style.boxShadow = 'none')}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="input"
                  style={{
                    borderColor: '#D1D5DB',
                    boxShadow: '0 0 0 2px rgba(255, 214, 57, 0.5)',
                  }}
                  onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px rgba(255, 214, 57, 0.5)')}
                  onBlur={(e) => (e.target.style.boxShadow = 'none')}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm" style={{ color: '#EF4444' }}>
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  {...register('rememberMe')}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  style={{
                    borderColor: '#D1D5DB',
                    backgroundColor: '#ffd639',
                  }}
                  onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px rgba(255, 214, 57, 0.5)')}
                  onBlur={(e) => (e.target.style.boxShadow = 'none')}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium" style={{ color: '#407aff' }}
                  onMouseOver={(e) => (e.target.style.color = '#1A3AFF')}
                  onMouseOut={(e) => (e.target.style.color = '#407aff')}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" variant="primary" fullWidth>
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: '#D1D5DB' }} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white" style={{ color: '#6B7280' }}>Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border rounded-lg shadow-sm bg-white text-sm font-medium" style={{ borderColor: '#D1D5DB', color: '#6B7280' }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#F9FAFB')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#FFFFFF')}
              >
                Google
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border rounded-lg shadow-sm bg-white text-sm font-medium" style={{ borderColor: '#D1D5DB', color: '#6B7280' }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#F9FAFB')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#FFFFFF')}
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;