import React from "react";
import Notification from "./NotificationItem"; // Ajusta la ruta según la estructura de tu proyecto

const TestNotification = ({ notifications }) => {
  return (
    <div>
 {Array.isArray(notifications?.data) && notifications.data.length > 0 ? (
  notifications.data.map((notification, index) => (
    <Notification
      key={index}
      image={notification?.related_auction?.images?.[0]?.image_url || 'default_image_url_here'}
      itemName={notification?.related_auction.name || 'Nombre no disponible'}
      text={notification?.message || 'Mensaje no disponible'}
      link={`/Auction/${notification?.related_auction?.auction_id || '#'}`}
      lastBid={notification.related_auction.highest_bid}
      notification_id={notification.notification_id}

      onErase={() => {
        // Lógica para eliminar la notificación si es necesario
      }}
    />
  ))
) : (
  <div className="w-[45.3vw] p-8">No hay nuevas notificaciones</div>
 )}


    </div>
  );
};

export default TestNotification;
