import pic from "./asset/pic2.png";
import Navbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const random = Math.floor(Math.random() * 25) + 1;
  const number = localStorage.getItem("id_item");
  var url = "http://localhost:3000/product/" + number;

  const move = async (event) => {
    event.preventDefault();
    window.location.href = url;
  };

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/zulfikar2002/myjewel_json/main/myjewel.json"
      )
      .then((res) => {
        localStorage.setItem("id_item", res.data[random].id);

        setData(res.data[random]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <body class="bg-gradient-to-r  from-rose-700 via-rose-600 to-pink-600 md:min-h-screen  border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto ">
          <div class="w-2/5 z-0 pl-16">
            <h1 class="mb-4 text-9xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
              {data.nama}
            </h1>
            <p class="mb-3 font-light indent-10 text-gray-100 dark:text-gray-400">
              {data.deskripsi}
            </p>
            <h3 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-3xl dark:text-white">
              {formatCurrency(data.harga)}
            </h3>
            <button
              type="button"
              onClick={move}
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Buy Now
            </button>
          </div>
          <div class="mr-16 ">
            <div class="p-2 bg-white rounded-full">
              <img
                class=" ml-auto max-w-lg h-auto z-10 rounded-full  "
                src={data.url}
                alt="dress"
              ></img>
            </div>
          </div>
          <div class="float-right">
            <div class="my-8">
              <button
                type="button"
                class=" text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-icon="instagram13"
                >
                  <path
                    fill="currentcolor"
                    d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-icon="facebook6"
                >
                  <path
                    fill="currentcolor"
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </button>
              <p class="float-right text-white">
                ____________________________________________________________
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

function formatCurrency(value) {
  return Number(value).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}