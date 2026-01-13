import React, { useState } from 'react';
import { Mail, Lock, CheckCircle2, ArrowRight, Github, Command } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';

const LoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        alert("登录成功！");
      } else {
        setError("邮箱或密码错误，请重试。（测试账号：test@example.com / password）");
      }
    }, 1500);
  };

  // Google Icon SVG
  const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-white">
      {/* Left Side: Image/Branding */}
      <div className="relative hidden w-full flex-col bg-slate-900 p-10 text-white lg:flex lg:w-1/2 xl:w-5/12">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://picsum.photos/1000/1200?grayscale&blur=2" 
            alt="Background" 
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 flex items-center gap-2 font-bold text-2xl mb-10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
             <Command className="h-5 w-5 text-white" />
          </div>
          <span>Nexus Inc.</span>
        </div>
        
        <div className="relative z-10 mt-auto mb-10">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;这个平台彻底改变了我们要处理工作流程的方式。简洁、高效且极其美观。它是我们团队每天都在使用的工具。&rdquo;
            </p>
            <footer className="text-sm text-slate-400">
              Sofia Davis — 产品设计总监
            </footer>
          </blockquote>
        </div>
        
        {/* Subtle decorative circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex w-full flex-1 flex-col items-center justify-center p-6 lg:p-16 xl:p-24 bg-white">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="flex items-center gap-2 lg:hidden font-bold text-2xl text-slate-900 mb-6">
             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                 <Command className="h-5 w-5 text-white" />
             </div>
             <span>Nexus Inc.</span>
          </div>

          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              欢迎回来
            </h1>
            <p className="text-slate-500">
              请输入您的详细信息以登录到您的账户
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon={<Github className="h-5 w-5" />} provider="Github" />
            <SocialButton icon={<GoogleIcon />} provider="Google" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">
                或者使用邮箱登录
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="email"
              label="电子邮箱"
              type="email"
              placeholder="name@example.com"
              icon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <div className="space-y-1">
               <Input
                id="password"
                label="密码"
                type="password"
                placeholder="请输入密码"
                icon={<Lock className="h-4 w-4" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                  忘记密码?
                </a>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}

            <Button type="submit" fullWidth isLoading={isLoading} variant="primary" className="h-11">
              {isLoading ? "登录中..." : "立即登录"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500">
            还没有账号?{' '}
            <a href="#" className="font-semibold text-primary-600 hover:text-primary-500 hover:underline">
              免费注册
            </a>
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-400">
             <span className="flex items-center gap-1">
               <CheckCircle2 className="h-3 w-3 text-green-500" /> 安全加密
             </span>
             <span className="h-3 w-[1px] bg-slate-200"></span>
             <span>隐私保护</span>
             <span className="h-3 w-[1px] bg-slate-200"></span>
             <span>服务条款</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;