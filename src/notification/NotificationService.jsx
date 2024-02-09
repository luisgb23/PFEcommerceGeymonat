import { useState, createContext, useContext } from "react";

const NotificationContext = createContext({
    showNotification: () => {}
})

const Notification = ({ notificationData }) => {

    const color = {
        success: '#99BC85',
        error: '#FF6868',
        warning: '#FF9843',
        info: '#BBE2EC'
    }

    const notificationStyles = {
        position: 'absolute',
        top: 150,
        right: 30,
        backgroundColor: color[notificationData.type],
        color: 'white',
        padding: 20,
        borderRadius: 15
    }
    
    return (
        <div style={notificationStyles}>
            <h4>{notificationData.type}</h4>
            <p>{notificationData.text}</p>
        </div>
    )
}

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text})
        setTimeout(() => {
            setNotificationData({ type, text: ''})
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            { notificationData.text && <Notification notificationData={notificationData}/> }
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}