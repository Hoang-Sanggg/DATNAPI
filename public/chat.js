document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const messagesContainer = document.getElementById('messages-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Gửi socketId của người dùng tới máy chủ khi kết nối
    socket.emit('set-socketId', '660354c842d1b90e300243ff');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim() !== '') {
            socket.emit('send-message', {
                sender: 'userIdOfSender',
                receiver: 'userIdOfReceiver',
                content: message
            });
            messageInput.value = '';
        }
    });

    socket.on('receive-message', (message) => {
        // Xử lý tin nhắn nhận được từ máy chủ
        const messageElement = document.createElement('div');
        messageElement.textContent = message.content;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
});
