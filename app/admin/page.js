"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/src/context/AuthContext";
import addData from "@/src/firebase/addData";
import getDocument from "@/src/firebase/getData";

function Page() {
  const [productList, setProductList] = useState(null);
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }

    fetchDocuments();
  }, [user]);
  const fetchDocuments = async () => {
    const collection = "users";
    const id = "user-id";

    const { result, error } = await getDocument(collection);
    if (error) {
      console.log(error);
    } else {
      if (result.exists()) {
        setProductList(result.data());
      } else {
        setProductList("No products available");
      }
    }
  };
  const handleForm = async () => {
    const data = {
      name: "John Doe",
      age: 22,
    };

    const { result, error } = await addData("users", "user-id", data);
    if (error) {
      return console.log(error);
    }
    console.log("success", data);
  };
  return (
    <div>
      <h3>welcome {user.email}</h3>
      <button
        className="p-2 bg-blue-500 text-white hover:cursor-pointer w-1/4"
        onClick={handleForm}
      >
        Add data to db!
      </button>

      {productList && (
        <div>
          <h2>products exist</h2>
        </div>
      )}
    </div>
  );
}

export default Page;
