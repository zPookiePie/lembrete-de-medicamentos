'use client'

import { useState } from 'react'
import { Reminder } from '../Home/Home'
import styles from './ReminderForm.module.scss'
import { v4 as uuidv4 } from 'uuid'

export default function ReminderForm({ onAdd }: { onAdd: (r: Reminder) => void }) {
  const [form, setForm] = useState({ name: '', date: '', time: '' })
  const [customName, setCustomName] = useState('')
  const [useCustom, setUseCustom] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newReminder: Reminder = {
      id: uuidv4(),
      name: useCustom ? customName : form.name,
      date: form.date,
      time: form.time
    }

    onAdd(newReminder)
    setForm({ name: '', date: '', time: '' })
    setCustomName('')
    setUseCustom(false)
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'outro') {
      setUseCustom(true)
      setForm({ ...form, name: '' })
    } else {
      setUseCustom(false)
      setForm({ ...form, name: value })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {!useCustom ? (
        <select value={form.name} onChange={handleSelectChange} required>
          <option value="" disabled>Selecione um remédio</option>
          <option value="Paracetamol">Paracetamol</option>
          <option value="Dipirona">Dipirona</option>
          <option value="Ibuprofeno">Ibuprofeno</option>
          <option value="outro">Outro</option>
        </select>
      ) : (
        <input
          type="text"
          placeholder="Digite o nome do remédio"
          value={customName}
          onChange={e => setCustomName(e.target.value)}
          required
        />
      )}

      <input
        type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
        required
      />
      <input
        type="time"
        value={form.time}
        onChange={e => setForm({ ...form, time: e.target.value })}
        required
      />
      <button type="submit">Agendar</button>
    </form>
  )
}
