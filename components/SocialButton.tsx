import React from 'react';

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  provider: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, provider, ...props }) => {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"
      {...props}
    >
      <span className="h-5 w-5 flex items-center justify-center">{icon}</span>
      <span className="hidden sm:inline">通过 {provider} 登录</span>
      <span className="sm:hidden">{provider}</span>
    </button>
  );
};

export default SocialButton;