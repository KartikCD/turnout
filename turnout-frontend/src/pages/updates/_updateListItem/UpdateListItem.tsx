import { Notification } from "@/models";
import * as React from "react";
import styles from "./UpdateListItem.module.css";

interface Props {
	notification: Notification;
}

const UpdateListItem: React.FC<Props> = React.memo(({ notification }) => {
	return (
		<div className={styles.divContainer}>
			<p className={styles.date}>
				{new Date(notification?.date as string).toLocaleString("en-US", {
					timeZone: "UTC",
					hour12: true,
					day: "2-digit",
					month: "long",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
				})}
			</p>
			<p className={styles.message}>{notification.message}</p>
		</div>
	);
});

export default UpdateListItem;
