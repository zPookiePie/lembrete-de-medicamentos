// eslint-disable-next-line @typescript-eslint/no-unused-vars
self.addEventListener('install', event => {
    console.log('[SW] Instalado')
    self.skipWaiting()
  })
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  self.addEventListener('activate', event => {
    console.log('[SW] Ativado')
  })
  
  self.addEventListener('notificationclick', event => {
    event.notification.close()
    event.waitUntil(clients.openWindow('/'))
  })
  
  self.addEventListener('push', event => {
    const data = event.data?.json() || {}
    self.registration.showNotification(data.title || 'Lembrete', {
      body: data.body || 'Está na hora do seu remédio!',
      icon: '/notification-icon.png'
    })
  })
  