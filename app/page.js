'use client';
import Header from "@/components/Header";
import Dashboard from "./dashboard/page";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import store from "@/utils/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div className='md:flex'>
        <Sidebar />
        <Dashboard />
      </div>
    </Provider>
  );
}
