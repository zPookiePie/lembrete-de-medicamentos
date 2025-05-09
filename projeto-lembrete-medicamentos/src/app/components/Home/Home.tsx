'use client'

import { useEffect, useState } from 'react'
import ReminderForm from '../ReminderForm/ReminderForm'
import ReminderList from '../ReminderList/ReminderList'
import AwarenessSection from '../AwarenessSection/AwarenessSection'
import RegisterServiceWorker from '../RegisterServiceWorker/RegisterServiceWorker'

import styles from './Home.module.scss'

export interface Reminder {
  id: string
  name: string
  date: string // yyyy-mm-dd
  time: string // hh:mm
}

export default function HomePage() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('reminders')
    if (saved) {
      const parsed: Reminder[] = JSON.parse(saved)
      setReminders(parsed)

      const now = new Date()

      parsed.forEach(reminder => {
        const date = createLocalDateTime(reminder.date, reminder.time)
        if (date > now) {
          scheduleNotification(reminder)
        }
      })
    }
  }, [])

  const saveReminders = (reminders: Reminder[]) => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
    setReminders(reminders)
  }

  const addReminder = (reminder: Reminder) => {
    const newReminders = [...reminders, reminder]
    saveReminders(newReminders)

    const date = createLocalDateTime(reminder.date, reminder.time)
    if (date > new Date()) {
      scheduleNotification(reminder)
    }
  }

  function createLocalDateTime(dateStr: string, timeStr: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number)
    const [hour, minute] = timeStr.split(':').map(Number)
    return new Date(year, month - 1, day, hour, minute)
  }

  function scheduleNotification(reminder: Reminder) {
    const dateTime = createLocalDateTime(reminder.date, reminder.time)
    const now = new Date()
    const delay = dateTime.getTime() - now.getTime()

    if (delay <= 0) return

    const notify = () => {
      new Notification(`Hora de tomar: ${reminder.name}`, {
        body: 'Não esqueça do seu remédio!',
        icon: '/notification-icon.png',
      })
    }

    if (Notification.permission === 'granted') {
      setTimeout(notify, delay)
      alert('Notificação agendada com sucesso!')
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setTimeout(notify, delay)
          alert('Notificação agendada com sucesso!')
        }
      })
    }
  }

  const removeReminder = (id: string) => {
    const updated = reminders.filter(r => r.id !== id)
    saveReminders(updated)
  }

  return (
    <div className={styles.container}>
      <RegisterServiceWorker />
      <h1>Crie seu Lembrete de Medicamentos</h1>
      <ReminderForm onAdd={addReminder} />
      <ReminderList reminders={reminders} onRemove={removeReminder} />
      <AwarenessSection />
      <p>Desenvolvido com ❤️ por Ágata</p>
    </div>
  )
}
