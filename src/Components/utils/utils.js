import { store } from "react-notifications-component";
export function Notification(type, title, message, duration) {
    store.addNotification({
        title,
        message,
        type,
        container: "top-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: duration,
            touch: true,
            click: true,
        },
    });
}

export function change_title() {
    let path = window.location.pathname;
    if (path === "/") {
        return (document.title = "Chatcloud - We Chat For You");
    }
    path = path.substring(1).charAt(0).toUpperCase() + path.slice(2).replace("-", " ");
    document.title = path + " - Chatcloud";
}
