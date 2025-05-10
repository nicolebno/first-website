import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/supabase'

export default async function ClientsPage() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return <div>You must be logged in</div>
  }

  const { data: clients, error } = await supabase.from('clients').select('*')

  if (error) {
    return <div>Error loading clients: {error.message}</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  )
}
