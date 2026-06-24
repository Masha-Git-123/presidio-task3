import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../services/api";

// import type { Post } from "../types/post";
import BarChart from "../components/BarChart";

import LineChart from "../components/LineChart";
import AddEntryForm from "../components/AddEntryForm";
import EntryList from "../components/EntryList";



export default function Dashboard() {
  const {
    data,
    isLoading,
    error,
  }=useQuery<any[]>({
    queryKey:["posts"],
    queryFn: fetchPosts,
  });

  if(isLoading){
    return <h2>Loading...</h2>;
  }

  if(error){
    return <h2>Error loading Data</h2>;
  }


  return (
  <div className="dashboard">

    <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h3>Total Universities</h3>
          <h2>{data?.length}</h2>
        </div>

        <div className="card">
          <h3>Displayed Universities</h3>
          <h2>10</h2>
        </div>
      </div>

       <BarChart posts={data?.slice(0, 10) || []} />
        <LineChart posts={data?.slice(0, 10) || []} />
    
    <h2>ADD ENTRY</h2>

        <AddEntryForm />

    <EntryList />

    <h2>Universities</h2>

    {data?.slice(0, 5).map((post) => (
      <div key={post.id} className="post-card">
        <h3>{post.name}</h3>
      </div>
    ))}

  </div>
);

}