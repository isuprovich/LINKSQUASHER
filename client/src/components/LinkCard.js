import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Ссылка</h2>
            
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Оригинал: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Переходов: <strong>{link.clicks}</strong></p>
            <p>Создано: <strong>{new Date(link.date).toLocaleDateString()} {new Date(link.date).toLocaleTimeString()}</strong></p>
        </>
    )
}