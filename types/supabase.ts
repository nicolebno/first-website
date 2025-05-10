export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface ClientsRow {
  id: string
  name: string
  dba_name: string | null
  fein: string | null
  entity_type: string | null
  sic_code: string | null
  naics_code: string | null
  industry_description: string | null
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
  website: string | null
  client_since: string | null
  service_level: string | null
}

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: ClientsRow
        Insert: Omit<ClientsRow, 'id'> // or use Partial<ClientsRow> if all optional
        Update: Partial<ClientsRow>
      }
      // Add other tables here
    }
  }
}
