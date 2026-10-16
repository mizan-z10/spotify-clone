
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-black rounded-full" />
                <div className="w-5 h-0.5 bg-black rounded-full" />
                <div className="w-5 h-0.5 bg-black rounded-full" />
              </div>
            </div>

            <span className="text-2xl font-bold">Spotify</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-zinc-900 rounded-2xl p-7 sm:p-9 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-2">
            Welcome back
          </h1>

          <p className="text-zinc-400 text-center mb-8">
            Login to continue listening
          </p>

          {/* Login Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-green-500 hover:text-green-400 transition"
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-zinc-700 flex-1" />
            <span className="text-sm text-zinc-500">OR</span>
            <div className="h-px bg-zinc-700 flex-1" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full border border-zinc-600 hover:border-white py-3 rounded-full font-medium transition">
              Continue with Google
            </button>

            <button className="w-full border border-zinc-600 hover:border-white py-3 rounded-full font-medium transition">
              Continue with GitHub
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-zinc-400 text-sm mt-8">
            Don't have an account?{" "}
            <button className="text-white hover:text-green-500 underline underline-offset-4 transition">
              Sign up
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-600 mt-6">
          © 2026 Music App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

