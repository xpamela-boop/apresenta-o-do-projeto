// script.js - Lógica e Interatividade do AgroTech

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌾 AgroTech System Loaded Successfully.');
    iniciarSimulacaoTempoReal();
});

// Atualizador Dinâmico de Métricas
function iniciarSimulacaoTempoReal() {
    setInterval(() => {
        const valHumidity = document.getElementById('val-humidity');
        if (valHumidity) {
            const randomHum = Math.floor(Math.random() * (75 - 62 + 1)) + 62;
            valHumidity.innerText = `${randomHum}%`;
        }
    }, 4000);
}

// Simulador de Recomendação Agrícola
function simularDiagnostico() {
    const crop = document.getElementById('select-crop').value;
    const rain = document.getElementById('select-rain').value;
    const resultBox = document.getElementById('result-box');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');

    let title = '';
    let description = '';

    if (crop === 'soja') {
        if (rain === 'ideal') {
            title = '✅ Condições Perfeitas para Desenvolvimento';
            description = 'O solo apresenta taxas de absorção foliar ideais. Manter a aplicação programada de nutrientes sem risco de lixiviação.';
        } else if (rain === 'seca') {
            title = '⚠️ Alerta de Estiagem - Irrigação Necessária';
            description = 'Recomenda-se acionar o sistema de pivô central durante a noite para reduzir perdas por evapotranspiração.';
        } else {
            title = '🌧️ Risco de Monitoramento Fungicista';
            description = 'Excesso de umidade detectado. Recomenda-se reforço preventivo no controle de ferrugem asiática.';
        }
    } else if (crop === 'milho') {
        if (rain === 'ideal') {
            title = '🌽 Excelente Taxa de Crescimento';
            description = 'O índice NDVI aponta ótima densidade de biomassa verde. Previsão de colheita recorde.';
        } else if (rain === 'seca') {
            title = '☀️ Estresse Hídrico Moderado';
            description = 'Recomenda-se aplicação de bioestimulantes para amenizar a perda de turgescência nas folhas.';
        } else {
            title = '🌊 Atenção ao Encharcamento';
            description = 'Avalie o escoamento nas linhas de plantio para evitar a asfixia radicular.';
        }
    } else if (crop === 'pecuaria') {
        if (rain === 'ideal') {
            title = '🐄 Pastagem em Alta Capacidade de Suporte';
            description = 'O volumoso do pasto está em nível ótimo. Pode-se aumentar a lotação por hectare mantendo ganho de peso constante.';
        } else if (rain === 'seca') {
            title = '🏜️ Suplementação Seca Exigida';
            description = 'A oferta de massa foliar no pasto diminuiu. Fornecer ração de cocho e proteico de seca para o rebanho.';
        } else {
            title = '🛡️ Manejo de Cascos e Pasto Lameiro';
            description = 'Mova o rebanho para piquetes mais altos para evitar problemas de casco e proliferação de parasitas no barro.';
        }
    }

    resultTitle.innerText = title;
    resultDesc.innerText = description;
    resultBox.classList.add('active');
}
