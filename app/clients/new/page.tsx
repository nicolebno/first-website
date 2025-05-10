'use client'

import { useState, useEffect } from 'react'

export default function NewClientPage() {
  const [formData, setFormData] = useState<any>({ contacts: [] })

  const updateField = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const updateContact = (index: number, field: string, value: string) => {
    const updated = [...formData.contacts]
    updated[index] = { ...updated[index], [field]: value }
    setFormData((prev: any) => ({ ...prev, contacts: updated }))
  }

  const addContact = () => {
    setFormData((prev: any) => ({
      ...prev,
      contacts: [...(prev.contacts || []), { name: '', title: '', email: '', phone: '', type: '' }],
    }))
  }

  const removeContact = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      contacts: prev.contacts.filter((_: any, i: number) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const result = await response.json()
    alert(result.message || 'Submission complete')
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Onboard New Client</h1>

      <form onSubmit={handleSubmit}>
        <div className="tabs tabs-lift tabs-bordered">

          

          {/* Tab 1: Company Info */}
          <input type="radio" name="onboard_tabs" className="tab" aria-label="Company Info" defaultChecked />
          <div className="tab-content bg-base-100 border-base-300 px-6 py-8 max-w-4xl mx-auto space-y-4">
            {/* Company Info Inputs Go Here */}
            <input className="input input-bordered w-full" placeholder="Legal Company Name" onChange={e => updateField('legal_name', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="DBA (if applicable)" onChange={e => updateField('dba_name', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="FEIN" onChange={e => updateField('fein', e.target.value)} />
            <select className="select select-bordered w-full" onChange={e => updateField('entity_type', e.target.value)}>
              <option value="">Entity Type</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="LLC">LLC</option>
              <option value="Corporation">Corporation</option>
              <option value="Non-Profit">Non-Profit</option>
            </select>
            <input className="input input-bordered w-full" placeholder="Nature of Business" onChange={e => updateField('industry_description', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="SIC Code" onChange={e => updateField('sic_code', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Number of Locations" onChange={e => updateField('location_count', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="States Where Employees Live (comma-separated)" onChange={e => updateField('employee_states', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Street Address" onChange={e => updateField('address', e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input className="input input-bordered w-full" placeholder="City" onChange={e => updateField('city', e.target.value)} />
              <input className="input input-bordered w-full" placeholder="State" onChange={e => updateField('state', e.target.value)} />
              <input className="input input-bordered w-full" placeholder="ZIP" onChange={e => updateField('zip', e.target.value)} />
            </div>
            <input className="input input-bordered w-full" placeholder="Phone Number" onChange={e => updateField('phone', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Website" onChange={e => updateField('website', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Payroll Vendor" onChange={e => updateField('payroll_vendor', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Payroll Frequency (e.g., Bi-weekly, Monthly)" onChange={e => updateField('payroll_frequency', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Pay Periods Per Year" onChange={e => updateField('pay_periods', e.target.value)} />
            <select className="select select-bordered w-full" onChange={e => updateField('client_status', e.target.value)}>
              <option value="">Client Status</option>
              <option value="Prospect">Prospect</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <label className="label-text">Broker of Record Date</label>
            <input className="input input-bordered w-full" type="date" onChange={e => updateField('bor_date', e.target.value)} />
          </div>

          {/* Tab 2: Group Contact */}
          <input type="radio" name="onboard_tabs" className="tab" aria-label="Group Contact" />
          <div className="tab-content bg-base-100 border-base-300 px-6 py-8 max-w-4xl mx-auto space-y-4">
            {/* Primary Contact Fields */}
            <input className="input input-bordered w-full" placeholder="Primary Contact Name" onChange={e => updateField('primary_contact_name', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Primary Contact Title" onChange={e => updateField('primary_contact_title', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Primary Contact Email" onChange={e => updateField('primary_contact_email', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Primary Contact Phone" onChange={e => updateField('primary_contact_phone', e.target.value)} />
            <select className="select select-bordered w-full" onChange={e => updateField('primary_contact_type', e.target.value)}>
              <option value="">Role</option>
              <option value="HR">HR</option>
              <option value="Decision Maker">Decision Maker</option>
              <option value="Main Point of Contact">Main Point of Contact</option>
              <option value="Owner">Owner</option>
              <option value="Executive">Executive</option>
            </select>
            <hr className="my-6" />
            {/* Optional Additional Contacts */}
            <button className="btn btn-outline btn-primary" type="button" onClick={() => setFormData(prev => ({ ...prev, contacts: [...(prev.contacts || []), {}] }))}>
              + Add Contact
            </button>
          </div>



          {/* Tab 3: Benefits Overview */}
          <input type="radio" name="onboard_tabs" className="tab" aria-label="Benefits Overview" />
          <div className="tab-content bg-base-100 border-base-300 px-6 py-8 max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold">Medical</h2>
            <input className="input input-bordered w-full" placeholder="Current Medical Carrier" onChange={e => updateField('medical_carrier', e.target.value)} />
            <select className="select select-bordered w-full" onChange={e => updateField('medical_rating_method', e.target.value)}>
              <option value="">Medical Rating Method</option>
              <option value="Age-Banded">Age-Banded</option>
              <option value="Composite">Composite</option>
            </select>
            <label className="label-text">Upload Medical Table Rates (optional)</label>
            <input className="file-input file-input-bordered w-full" type="file" onChange={e => updateField('medical_table_rates', e.target.files?.[0])} />

            <h2 className="text-xl font-semibold">Ancillary Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input input-bordered w-full" placeholder="Dental Carrier" onChange={e => updateField('dental_carrier', e.target.value)} />
              <input className="input input-bordered w-full" placeholder="Vision Carrier" onChange={e => updateField('vision_carrier', e.target.value)} />
              <input className="input input-bordered w-full" placeholder="Life/AD&D Carrier" onChange={e => updateField('life_carrier', e.target.value)} />
              <input className="input input-bordered w-full" placeholder="Disability Carrier" onChange={e => updateField('disability_carrier', e.target.value)} />
            </div>
            <label className="label-text">Upload Ancillary Rate Sheet (optional)</label>
            <input className="file-input file-input-bordered w-full" type="file" onChange={e => updateField('ancillary_rates', e.target.files?.[0])} />

            <h2 className="text-xl font-semibold">Employer Contribution</h2>
            <textarea className="textarea textarea-bordered w-full" placeholder="Describe employer contribution model (e.g., % or flat $ per tier)" onChange={e => updateField('contribution_notes', e.target.value)} />
          </div>

          {/* Tab 4: Census & Docs */}
          <input type="radio" name="onboard_tabs" className="tab" aria-label="Census & Docs" />
          <div className="tab-content bg-base-100 border-base-300 px-6 py-8 max-w-4xl mx-auto space-y-4">
            <input className="input input-bordered w-full" placeholder="Total Employees" type="number" onChange={e => updateField('totalEmployees', e.target.value)} />
            <input className="input input-bordered w-full" placeholder="Proposal Due Date" type="date" onChange={e => updateField('proposalDue', e.target.value)} />
            <label className="label-text">Upload Census File</label>
            <input className="file-input file-input-bordered w-full" type="file" onChange={e => updateField('census_file', e.target.files?.[0])} />
            <label className="label-text">Upload Supporting Docs (Benefits Guide, Handbook, POP, Wrap, etc.)</label>
            <input className="file-input file-input-bordered w-full" type="file" multiple onChange={e => updateField('supporting_docs', e.target.files)} />
            <textarea className="textarea textarea-bordered w-full" placeholder="Notes" onChange={e => updateField('notes', e.target.value)} />
            <button className="btn btn-primary mt-4" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
