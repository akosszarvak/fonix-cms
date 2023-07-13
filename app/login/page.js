"use client";
import React, { useState } from "react";
import signIn from "@/src/firebase/auth/signin";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { email, password } = formData;

  const onChange = (e) => {
    console.log("onchange firing", e.target.value);
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Password do not match");
      return;
    }
    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }

    console.log(result);
    router.push("/admin");
  };
  return (
    <div className="bg-gray-200 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={onSubmit} className="w-1/2 flex flex-col gap-4">
        <h1>Log in</h1>
        <input type="email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white hover:cursor-pointer w-1/4"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
