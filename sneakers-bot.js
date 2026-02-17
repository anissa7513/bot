const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

function addMessage(text, type) {
    const msg = document.createElement('p');
    msg.textContent = text;
    msg.className = type === 'bot' ? 'bot-msg' : 'user-msg';
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const text = input.toLowerCase();
    
    // 1. Disponibilité des tailles
    if (text.includes("taille") || text.includes("dispo") || text.includes("pointure")) {
        return "Pour l'Air Force One Reflect, il nous reste actuellement du 38, 40, 42 et 44. Les autres tailles seront réapprovisionnées la semaine prochaine !";
    } 
    
    // 2. Délais de livraison
    else if (text.includes("livraison") || text.includes("reçoit") || text.includes("délai") || text.includes("temps")) {
        return "Nos colis sont expédiés via Colissimo. Comptez 48h à 72h ouvrés pour une livraison à domicile en France métropolitaine. 📦";
    }

    // 3. Retours et échanges
    else if (text.includes("retour") || text.includes("rembourse") || text.includes("échanger") || text.includes("trompé")) {
        return "Pas d'inquiétude ! Vous avez 14 jours pour nous retourner l'article dans son emballage d'origine. Le retour est gratuit si vous demandez un échange.";
    }

    // 4. Frais de port
    else if (text.includes("frais") || text.includes("payant") || text.includes("prix de livraison")) {
        return "La livraison est offerte pour toute commande supérieure à 100€. En dessous, les frais sont fixes à 5,90€.";
    }

    // 5. Suivi de commande
    else if (text.includes("suivi") || text.includes("où est mon colis")) {
        return "Dès que votre commande est expédiée, vous recevrez un numéro de suivi par mail pour consulter l'avancement en temps réel.";
    }

    // 6. Politesse de base
    else if (text.includes("bonjour") || text.includes("salut") || text.includes("hello")) {
        return "Salut ! Je suis SneakerCheck. Je peux t'aider sur les tailles, la livraison ou les retours. Pose-moi ta question !";
    }

    // 7. Merci
    else if (text.includes("merci")) {
        return "À ton service ! N'hésite pas si tu as besoin d'autre chose. Bonne session shopping ! 👟";
    }

    // Réponse par défaut
    else {
        return "Désolé, je ne connais pas encore la réponse à cette question technique. Tu peux me demander des infos sur 'la livraison', 'les tailles' ou 'les retours' !";
    }
}

// Événement clic sur le bouton
sendBtn.addEventListener('click', () => {
    const message = userInput.value;
    if (message.trim() !== "") {
        addMessage(message, 'user');
        userInput.value = "";
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 600);
    }
});

// Événement touche Entrée
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});