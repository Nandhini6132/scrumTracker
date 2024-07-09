'use client'

import React, { useContext, useEffect, useState } from "react";
import { User } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";
import { UserContext } from "../context";

// const persons = [
//   {
//     id: 1,
//     name: "Project Coordinator",
//     icon: <User size={70} className="inline" />,
//   },
//   {
//     id: 2,
//     name: "Project manager",
//     icon: <User size={70} className="inline" />,
//   },
// ];

const credentials = [
  {
    id: 1,
    label: "Username",
    placeholder: "user name",
    type: "text",
  },
  {
    id: 2,
    label: "Password",
    placeholder: "password",
    type: "password",
  },
];

const LoginPage = ({cookies}:any) => {
  const {username, setUsername, password, setPassword, login, setLogin}:any= useContext(UserContext)

  // const cookies:any= cookies()

  const pcUser = "shannu";
  const pcPword = "shannu@123";

  const pmUser = "shadab";
  const pmPword = "shadab@123";

  const router= useRouter()

  const handleLogin = () => {
    try {
      if (username === pcUser && password === pcPword) {
        console.log("Project Coordinator Login Successful");
        setLogin(true);
        // cookies.set(null, 'token', 'logedIn');
        // toast.success("Project Coordinator Login Successful");
      } else if (username === pmUser && password === pmPword) {
        console.log("Project Manager Login Successful");
        setLogin(true);
        // cookies.set('login')
        // toast.success("Project Manager Login Successful", {
        //     autoClose: 5000,
  
        // });
      } else {
        console.log("Invalid credentials");
        setLogin(false);
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.log("Error occurred during login", error);
      setLogin(false);
    }
  };

  useEffect(()=>{
        if(login){
            router.push('/home')
        }
  },[login])


  return (
    <main className="h-screen">
      {/* <ToastContainer/> */}
      <div className="h-full flex">
        <div className="md:container md:m-auto w-full">
          <div className="w-full md:min-w-56 m-auto h-full flex items-center">
            <div className="login h-[700px] flex w-[100%] gap-7 p-6 bg-slate-50">
              <div className="left-side w-[100%] md:w-[50%]">
                {/* <div className="flex justify-center gap-6 cursor-pointer">
                  {persons.map((person: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className={`border border-green-500 rounded-xl py-2 w-[130px] text-center ${
                          user === person.name && "bg-green-300"
                        }`}
                        onClick={() => setUser(person.name)}
                      >
                        <div className="text-center w-full">
                          <div>{person.icon}</div>
                        </div>
                        <div className="px-4">{person.name}</div>
                      </div>
                    );
                  })}
                </div> */}

                <div className="text-center mt-32">
                  <h1 className="text-3xl font-bold mb-5">LOGIN</h1>
                  <div className="flex flex-col items-center w-full text-start gap-8">
                    {credentials.map((credential, i) => (
                      <div
                        key={i}
                        className="flex gap-4 w-[90%] md:w-[70%] items-center justify-between"
                      >
                        <label>{credential.label}</label>
                        <Input
                          type={credential.type}
                          placeholder={credential.placeholder}
                          className="w-[100%] md:w-[70%]"
                          value={
                            credential.label === "Username"
                              ? username
                              : password
                          }
                          onChange={(e) => {
                            if (credential.label === "Username") {
                              setUsername(e.target.value);
                            } else if (credential.label === "Password") {
                              setPassword(e.target.value);
                            }
                          }}
                        />
                      </div>
                    ))}

                    <div>
                      <Button
                        className="w-[200px] bg-green-600 hover:bg-green-500 rounded-full"
                        onClick={handleLogin}
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-side w-50% hidden md:block">
                COLAN INFOTEXH
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
