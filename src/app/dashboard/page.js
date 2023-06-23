'use client'
import useSWR from 'swr'


const Dashboard = () =>
{
  // const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(data)


  return (
    <div>
      <h1>Is loading {!isLoading ? "si" : "no"}</h1>
    </div>
  );
};

export default Dashboard;
