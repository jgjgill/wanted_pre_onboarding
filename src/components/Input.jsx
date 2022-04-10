import React, { useEffect, useRef, useState } from 'react';
import { util } from '../App';

function check(email) {
  const reg_email =
    /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (reg_email.test(email)) {
    return true;
  } else {
    return false;
  }
}

const Input = () => {
  const [email, setEmail] = useState();
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passswordState, setPasswordState] = useState(false);

  const passwordRef = useRef();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onEmailBlur = () => {
    if (email && !emailCheck) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const onClick = () => {
    setPasswordState((prev) => !prev);
  };

  useEffect(() => {
    setEmailCheck(check(email));
  }, [email]);

  useEffect(() => {
    passwordRef.current.type = passswordState ? 'text' : 'password';
  }, [passswordState]);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-center">Input</h1>

      <div className="flex flex-col space-y-2 w-80">
        <div>
          <label htmlFor="email" className="text-xs pl-2">
            E-mail
          </label>
          <div className="relative flex items-center">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="border p-2 w-full focus:outline-stone-400 bg-stone-100 rounded-sm"
              onChange={onChange}
              onBlur={onEmailBlur}
            />
            <div className="absolute right-2 flex items-center h-full">
              <svg
                className={util(
                  'w-5 h-5',
                  emailCheck ? 'stroke-teal-400' : 'stroke-stone-400'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          {emailError && (
            <span className="text-xs text-red-400">
              Invalid e-mail address.
            </span>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-xs pl-2">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type="password"
              id="password"
              placeholder="Password"
              ref={passwordRef}
              className="border p-2 w-full focus:outline-stone-400 bg-stone-100 rounded-sm"
            />
            <div
              onClick={onClick}
              className="absolute right-2 flex items-center h-full hover:cursor-pointer"
            >
              {passswordState ? (
                <svg
                  className="w-5 h-5 stroke-teal-400 hover:stroke-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 stroke-stone-600 hover:stroke-stone-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
