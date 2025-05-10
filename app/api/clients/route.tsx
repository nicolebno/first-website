import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export async function POST(req: Request) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession()

  console.log('[SESSION]', session)
  console.log('[SESSION ERROR]', sessionError)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
  }

  try {
    const formData = await req.json()
    console.log('[FORM DATA]', formData)

    // Basic input validation
    if (
      !formData.legal_name ||
      !formData.fein ||
      !formData.industry_description ||
      !formData.sic_code ||
      !formData.location_count
    ) {
      return NextResponse.json(
        { error: 'Missing one or more required fields.' },
        { status: 400 }
      )
    }

    const { data: client, error: clientError } = await supabase
      .from('clients')
      .insert([
        {
          legal_name: formData.legal_name,
          dba_name: formData.dba_name,
          fein: formData.fein,
          entity_type: formData.entity_type,
          industry_description: formData.industry_description,
          sic_code: formData.sic_code,
          location_count: formData.location_count,
          employee_states: formData.employee_states,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          phone: formData.phone,
          website: formData.website,
          payroll_vendor: formData.payroll_vendor,
          payroll_frequency: formData.payroll_frequency,
          pay_periods: formData.pay_periods,
          client_status: formData.client_status,
          bor_date: formData.bor_date,
          created_by: session.user.id,
        },
      ])
      .select()
      .single()

    console.log('[CLIENT INSERT]', client)
    console.log('[CLIENT ERROR]', clientError)

    if (clientError || !client?.id) {
      return NextResponse.json(
        { error: 'Failed to insert client', details: clientError?.message },
        { status: 500 }
      )
    }

    const contacts = formData.contacts || []
    for (const contact of contacts) {
      if (!contact.name || !contact.email) {
        console.warn('[SKIPPED CONTACT] Missing name or email:', contact)
        continue
      }

      const { error: contactError } = await supabase.from('contacts').insert([
        {
          client_id: client.id,
          name: contact.name,
          title: contact.title,
          email: contact.email,
          phone: contact.phone,
          type: contact.type,
        },
      ])

      if (contactError) {
        console.error('[CONTACT INSERT FAILED]', contact, contactError)
      } else {
        console.log('[CONTACT INSERT SUCCESS]', contact.name)
      }
    }

    return NextResponse.json(
      { message: 'Client and contacts saved successfully.' },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('[UNHANDLED ERROR]', err)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}

