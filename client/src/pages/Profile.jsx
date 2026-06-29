import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, ShieldCheck } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-md mx-auto my-16 text-center text-slate-500 font-semibold">
        Please log in to view profile details.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-10 space-y-8 animate-in fade-in duration-300">
        
        {/* Header Avatar card */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{user.name}</h1>
            <div className="flex items-center space-x-1 mt-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 ${
                user.role === 'admin' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-primary-50 text-primary-600 border border-primary-100'
              }`}>
                {user.role === 'admin' ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                <span>{user.role}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Profile Attributes list */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Full Name
            </label>
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl">
              <User className="w-4 h-4 text-slate-400" />
              <span>{user.name}</span>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Email Address
            </label>
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{user.email}</span>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Account Status
            </label>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified and Secure</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
