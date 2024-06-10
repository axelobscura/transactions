'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Transactions() {
  const { data, error } = useSWR('/api/transactions', fetcher);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="min-h-screen grid grid-cols-4 gap-4">
      <div className="bg-blue-td border border-blue-td-border">
        <h2 className="font-Teko mb-3 text-3xl font-semibold text-center p-5 border border-blue-td-border">TRANSACTIONS DASHBOARD</h2>
        
      </div>
      <div className="col-span-3">
        <div>
          <div className="grid grid-cols-2 w-full">
            <h3 className="font-Teko text-4xl color-gray-td p-4 border-b-2">Welcome!</h3>
            <div className="flex justify-center mr-4">
              <input
                type="search"
                className="w-full pl-10 text-sm text-gray-700 m-3"
                placeholder="Search..."
              />
              <button className="bg-blue-td border-blue-td-border hover:bg-orange-700 text-white font-bold py-1 px-1 rounded">
                Search
              </button>
            </div>
          </div>
          <div className="p-12 bg-blue-td mr-3 mt-3">
            <table className="font-Teko table-auto w-full">
              <thead>
                <tr>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">ID</p>
                  </th>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">DATE</p>
                  </th>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">AMOUNT</p>
                  </th>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">TYPE</p>
                  </th>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">CATEGORY</p>
                  </th>
                  <th>
                    <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">DESCRIPTION</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.msg.map((data: any) => (
                  <tr key={data.id}>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-white p-3">{data.id}</p>
                    </td>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">{data.date}</p>
                    </td>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">{data.amount}</p>
                    </td>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">{data.type}</p>
                    </td>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">{data.category}</p>
                    </td>
                    <td>
                      <p className="text-center text-2xl border border-blue-td-border text-blue-td-light p-3">{data.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
