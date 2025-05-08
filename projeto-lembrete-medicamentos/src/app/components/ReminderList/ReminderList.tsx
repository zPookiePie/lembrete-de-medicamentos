'use client'

import { Reminder } from '../Home/Home'
import styles from './ReminderList.module.scss'

export default function ReminderList({
  reminders,
  onRemove,
}: {
  reminders: Reminder[]
  onRemove: (id: string) => void
}) {
  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-')
    return `${day}/${month}/${year}`
  }
  

  return (
    <ul className={styles.list}>
      {reminders.length === 0 && <p>Nenhum lembrete criado.</p>}
      {reminders.map((r) => (
        <li key={r.id}>
          <div>
            <strong>{r.name}</strong>
            <span>{formatDate(r.date)} às {r.time}</span>
          </div>
          <button onClick={() => onRemove(r.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  )
}
