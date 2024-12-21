// URL mapping objesi oluşturalım
const warUrlMapping = {
    'Gulf War': 'gulf-war.html',
    'Afghan War': 'afghan-war.html',
    'Iraq War': 'iraq--war.html',
    'Saudi Arabia-Yemen War': 'saudi-arabia-yemen-war.html',
    'First Intifada': 'first-intifada.html',
    'Second Intifada': 'second-intifada.html',
    'Gaza War': 'gaza-war.html',
    'Current Gaza Conflict': 'current-gaza-conflict.html',
    'Russian Intervention in Georgia': 'georgia-intervention.html',
    'Nagorno-Karabakh War': 'nagorno-karabakh-war.html',
    'Kosovo War': 'kosovo-war.html',
    'India-Pakistan Border Conflicts': 'india-pakistan-conflicts.html',
    'China-India Border Conflict': 'china-india-border.html',
    'Ethiopia-Sudan Border Conflicts': 'ethiopia-sudan-border.html',
    'Russia-Crimea War': 'russia-crimea-war.html',
    'Russia-Ukraine War': 'russia-ukraine-war.html'
};

function createWarSelectionDialog(country, wars) {
    // Varsa eski dialog'u kaldır
    const existingDialog = document.querySelector('.war-selection-dialog');
    if (existingDialog) existingDialog.remove();

    // Yeni dialog oluştur
    const dialog = document.createElement('div');
    dialog.className = 'war-selection-dialog';
    dialog.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        min-width: 300px;
    `;

    // Dialog başlığı
    const title = document.createElement('h3');
    title.textContent = `Select War for ${country}`;
    title.style.marginTop = '0';
    dialog.appendChild(title);

    // Savaş butonları
    wars.forEach(war => {
        const button = document.createElement('button');
        button.textContent = war;
        button.style.cssText = `
            display: block;
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: none;
            background: #f0f0f0;
            border-radius: 4px;
            cursor: pointer;
            text-align: left;
            transition: background 0.2s;
        `;
        button.onmouseover = () => button.style.background = '#e0e0e0';
        button.onmouseout = () => button.style.background = '#f0f0f0';
        button.onclick = () => {
            window.location.href = warUrlMapping[war];
            dialog.remove();
        };
        dialog.appendChild(button);
    });

    // Kapat butonu
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 18px;
        padding: 5px;
        color: #666;
    `;
    closeButton.onclick = () => dialog.remove();
    dialog.appendChild(closeButton);

    // Dialog dışına tıklanınca kapatma
    document.addEventListener('click', function closeDialog(e) {
        if (!dialog.contains(e.target) && document.contains(dialog)) {
            dialog.remove();
            document.removeEventListener('click', closeDialog);
        }
    });

    document.body.appendChild(dialog);
}

// Selected Countries Data
const selectedCountries = [
    'Iraq', 'Kuwait', 'Saudi Arabia', 'Afghanistan', 'United States', 'Yemen',
    'Israel', 'Palestine', 'Azerbaijan', 'Armenia', 'Kosovo', 'Serbia', 'Georgia',
    'India', 'Pakistan', 'China', 'Ethiopia', 'Sudan', 'Russia', 'Ukraine'
];

// War Participants Mapping - SVG ID'leriyle tam eşleşecek şekilde güncellendi
const warParticipants = {
    'Gulf War': ['Iraq', 'Kuwait', 'Saudi Arabia'],        
    'Afghan War': ['Afghanistan', 'United States'],         
    'Iraq War': ['Iraq', 'United States'],                 
    'Saudi Arabia-Yemen War': ['Saudi Arabia', 'Yemen'],
    'First Intifada': ['Israel', 'Palestine'],
    'Second Intifada': ['Israel', 'Palestine'],
    'Gaza War': ['Israel', 'Palestine'],
    'Current Gaza Conflict': ['Israel', 'Palestine'],
    'Russian Intervention in Georgia': ['Russia', 'Georgia'],         
    'Nagorno-Karabakh War': ['Azerbaijan', 'Armenia'],
    'Kosovo War': ['Kosovo', 'Serbia'],
    'India-Pakistan Border Conflicts': ['India', 'Pakistan'],
    'China-India Border Conflict': ['China', 'India'],
    'Ethiopia-Sudan Border Conflicts': ['Ethiopia', 'Sudan'],
    'Russia-Crimea War': ['Russia', 'Ukraine'],
    'Russia-Ukraine War': ['Russia', 'Ukraine']
};

const warSpecificInfo = {
    'Gulf War': {
        Iraq: {
            flag: "🇮🇶",
            info: "Invaded Kuwait, leading to international intervention. Faced coalition forces led by US and Saudi Arabia.",
            affectedCities: ["Baghdad", "Basra", "Mosul", "Kirkuk", "Najaf"],
            role: "Attacker"
        },
        Kuwait: {
            flag: "🇰🇼",
            info: "Invaded by Iraq, liberated by coalition forces after 7 months of occupation.",
            affectedCities: ["Kuwait City", "Al Jahra", "Hawalli", "Salmiya", "Farwaniya"],
            role: "Defender"
        },
        'Saudi Arabia': {
            flag: "🇸🇦",
            info: "Key coalition member, provided military bases and support for Operation Desert Shield/Storm, working closely with the United States to protect the region.",
            affectedCities: ["Dhahran", "Riyadh", "Jubail", "Military Bases"],
            role: "Defender"
        }
    },
    'Afghan War': {
        Afghanistan: {
            flag: "🇦🇫",
            info: "Faced US-led coalition intervention following 9/11 attacks.",
            affectedCities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad"],
            role: "Defender"
        },
        'United States': {
            flag: "🇺🇸",
            info: "Led coalition forces in Operation Enduring Freedom against Taliban regime.",
            affectedCities: ["Suffered massive damage during the 9/11 attacks, including the destruction of the Twin Towers and damage to the Pentagon."],
            role: "Attacker"
        }
    },
    'Iraq War': {
        Iraq: {
            flag: "🇮🇶",
            info: "US-led invasion over alleged WMDs led to regime change and prolonged conflict.",
            affectedCities: ["Baghdad", "Fallujah", "Mosul", "Basra", "Tikrit"],
            role: "Defender"
        },
        'United States': {
            flag: "🇺🇸",
            info: "Led coalition invasion to overthrow Saddam Hussein's regime. Extended military presence.",
            affectedCities: ["The territory of the USA was not physically affected."],
            role: "Attacker"
        }
    },
    'Saudi Arabia-Yemen War': {
        'Saudi Arabia': {
            flag: "🇸🇦",
            info: "Led military intervention in Yemen against Houthi forces.",
            affectedCities: ["Border Regions", "Najran", "Jizan", "Military Bases"],
            role: "Attacker"
        },
        Yemen: {
            flag: "🇾🇪",
            info: "Faced Saudi-led coalition airstrikes and military intervention.",
            affectedCities: ["Sanaa", "Aden", "Hodeidah", "Taiz", "Saada"],
            role: "Defender"
        }
    },
    'First Intifada': {
        Israel: {
            flag: "🇮🇱",
            info: "Faced Palestinian uprising in occupied territories.",
            affectedCities: ["Jerusalem", "Tel Aviv", "West Bank Settlements"],
            role: "Defender"
        },
        Palestine: {
            flag: "🇵🇸",
            info: "Led civil uprising against Israeli occupation.",
            affectedCities: ["Gaza Strip", "West Bank", "East Jerusalem"],
            role: "Attacker"
        }
    },
    'Second Intifada': {
        Israel: {
            flag: "🇮🇱",
            info: "Responded to Palestinian uprising with military operations.",
            affectedCities: ["Jerusalem", "Tel Aviv", "Haifa", "Border Settlements"],
            role: "Defender"
        },
        Palestine: {
            flag: "🇵🇸",
            info: "Launched armed resistance against Israeli occupation.",
            affectedCities: ["Gaza Strip", "West Bank", "Ramallah", "Nablus"],
            role: "Attacker"
        }
    },
    'Gaza War': {
        Israel: {
            flag: "🇮🇱",
            info: "Launched Operation Cast Lead against Hamas in Gaza.",
            affectedCities: ["Southern Districts", "Border Regions", "Military Bases"],
            role: "Attacker"
        },
        Palestine: {
            flag: "🇵🇸",
            info: "Defended against Israeli military operation in Gaza Strip.",
            affectedCities: ["Gaza City", "Khan Yunis", "Rafah", "Jabalia"],
            role: "Defender"
        }
    },
    'Current Gaza Conflict': {
        Israel: {
            flag: "🇮🇱",
            info: "Engaged in ongoing military operations in Gaza Strip.",
            affectedCities: ["Southern Israel", "Tel Aviv", "Border Communities"],
            role: "Attacker"
        },
        Palestine: {
            flag: "🇵🇸",
            info: "Facing extensive military operations in Gaza Strip.",
            affectedCities: ["Gaza City", "Khan Yunis", "Rafah", "Deir al-Balah"],
            role: "Defender"
        }
    },
    'Russian Intervention in Georgia': {
        Russia: {
            flag: "🇷🇺",
            info: "Intervened militarily in Georgia's breakaway regions.",
            affectedCities: ["The territory of Russia was not physically affected."],
            role: "Attacker"
        },
        Georgia: {
            flag: "🇬🇪",
            info: "Defended against Russian military intervention.",
            affectedCities: ["Tbilisi", "Gori", "Poti", "Zugdidi"],
            role: "Defender"
        }
    },
    'Nagorno-Karabakh War': {
        Azerbaijan: {
            flag: "🇦🇿",
            info: "Launched military operation to reclaim Nagorno-Karabakh region.",
            affectedCities: ["Baku", "Ganja", "Mingachevir", "Border Regions"],
            role: "Attacker"
        },
        Armenia: {
            flag: "🇦🇲",
            info: "Defended Nagorno-Karabakh region against Azerbaijani forces.",
            affectedCities: ["Yerevan", "Stepanakert", "Border Regions"],
            role: "Defender"
        }
    },
    'Kosovo War': {
        Kosovo: {
            flag: "🇽🇰",
            info: "Sought independence through armed resistance and international support.",
            affectedCities: ["Pristina", "Pec", "Prizren", "Mitrovica"],
            role: "Defender"
        },
        Serbia: {
            flag: "🇷🇸",
            info: "Attempted to maintain control over Kosovo through military action.",
            affectedCities: ["Belgrade", "Kosovo Region", "Military Bases"],
            role: "Attacker"
        }
    },
    'India-Pakistan Border Conflicts': {
        India: {
            flag: "🇮🇳",
            info: "Engaged in border skirmishes and counter-terrorism operations.",
            affectedCities: ["Kashmir Region", "Border Posts", "Military Installations"],
            role: "Attacker"
        },
        Pakistan: {
            flag: "🇵🇰",
            info: "Involved in border tensions and territorial disputes.",
            affectedCities: ["Kashmir Region", "Border Areas", "Military Posts"],
            role: "Defender"
        }
    },
    'China-India Border Conflict': {
        China: {
            flag: "🇨🇳",
            info: "Engaged in territorial disputes along LAC in Ladakh region.",
            affectedCities: ["Ladakh Border", "Military Outposts", "Galwan Valley"],
            role: "Attacker"
        },
        India: {
            flag: "🇮🇳",
            info: "Defended territorial claims along LAC against Chinese forces.",
            affectedCities: ["Ladakh Region", "Military Posts", "Border Areas"],
            role: "Defender"
        }
    },
    'Ethiopia-Sudan Border Conflicts': {
        Ethiopia: {
            flag: "🇪🇹",
            info: "Disputed border territories with Sudan in Al-Fashaga region.",
            affectedCities: ["Border Regions", "Military Posts", "Disputed Areas"],
            role: "Attacker"
        },
        Sudan: {
            flag: "🇸🇩",
            info: "Defended claimed territories against Ethiopian forces.",
            affectedCities: ["Al-Fashaga Triangle", "Border Posts", "Military Areas"],
            role: "Defender"
        }
    },
    'Russia-Crimea War': {
        Russia: {
            flag: "🇷🇺",
            info: "Annexed Crimea peninsula from Ukraine through military operation.",
            affectedCities: ["Sevastopol", "Military Bases", "Naval Ports"],
            role: "Attacker"
        },
        Ukraine: {
            flag: "🇺🇦",
            info: "Lost control of Crimea peninsula to Russian forces.",
            affectedCities: ["Crimean Peninsula", "Sevastopol", "Military Installations"],
            role: "Defender"
        }
    },
    'Russia-Ukraine War': {
        Russia: {
            flag: "🇷🇺",
            info: "Launched full-scale invasion of Ukraine in 2022.",
            affectedCities: ["Border Regions", "Military Bases", "Naval Bases"],
            role: "Attacker"
        },
        Ukraine: {
            flag: "🇺🇦",
            info: "Defending against Russian invasion since 2022.",
            affectedCities: ["Kiev", "Kharkiv", "Mariupol", "Odesa", "Kherson"],
            role: "Defender"
        }
    }
};

const cityImpactInfo = {
    gulfWar: {
        default: {
            content: `
                Most affected: Riyadh (2.9%)
                Least affected: Basra (0.0%)
                Average structural preservation: 0.450
            `
        },
        kuwait:{
            content:`
                Structural condition: significantly affected
                SSIM Score: 0.213
                Change Percentage: 2.2%
                Change intensity: very low
                Impact level: severe
            `
        },
        riyadh: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.137
                Change Percentage: 2.9%
                Change intensity: very low
                Impact level: severe
            `
        },
        basra: {
            content: `
                Structural condition: highly preserved
                SSIM Score: 1.000
                Change Percentage: 0.001%
                Change intensity: very low
                Impact level: minimal
            `
        }
    },
    afghanWar: {
        default: {
            content: `
                Most affected: New York (1.4%)
                Least affected: Kabul (0.8%)
                Average structural preservation: 0.167
            `
        },
        kabul: {
            content: `
                SSIM Score: 0.212\n\
                Change Percentage: 0.8%\n\
                Structural condition: Significantly affected\n\
            `
        },
        newyork: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.122
                Change Percentage: 1.4%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    chinaIndiaConflict: { // Sayfa adı (örneğin China-India Border Conflict sayfası)
        default: {
            content: `
                Most affected: Pangong (1.1%)
                Least affected: Begoldi (1.1%)
                Average structural preservation: 0.179
            `
        },
        pangong: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.044
                Change Percentage: 1.1%
                Change intensity: very low
                Impact level: severe
            `
        },
        begoldi: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.313
                Change Percentage: 1.1%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    currentGazaConflict: { // Sayfa adı (örneğin Current Gaza Conflict sayfası)
        default: {
            content: `
                Most affected: Al Karameh (0.5%)
                Least affected: Ashkelon (0.5%)
                Average structural preservation: 0.176
            `
        },
        ashkelon: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.091
                Change Percentage: 0.5%
                Change intensity: very low
                Impact level: severe
            `
        },
        alkarameh: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.260
                Change Percentage: 0.5%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    ethiopiaSudanConflict: { // Sayfa adı (örneğin Ethiopia-Sudan Border Conflict sayfası)
        default: {
            content: `
                Most affected: Humera (1.9%)
                Least affected: Kabkabiya (1.8%)
                Average structural preservation: 0.111
            `
        },
        humera: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.057
                Change Percentage: 1.9%
                Change intensity: very low
                Impact level: severe
            `
        },
        kabkabiya: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.164
                Change Percentage: 1.8%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    firstIntifada: { // Sayfa adı (örneğin First Intifada sayfası)
        default: {
            content: `
                Most affected: Gaza (1.3%)
                Least affected: Tel Aviv (0.9%)
                Average structural preservation: 0.286
            `
        },
        telaviv: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.335
                Change Percentage: 0.9%
                Change intensity: very low
                Impact level: severe
            `
        },
        gaza: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.238
                Change Percentage: 1.3%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    gazaWar: { // Sayfa adı (örneğin Gaza War sayfası)
        default: {
            content: `
                Most affected: Ashkelon (2.2%)
                Least affected: Gaza (1.3%)
                Average structural preservation: 0.327
            `
        },
        ashkelon: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.306
                Change Percentage: 2.2%
                Change intensity: very low
                Impact level: severe
            `
        },
        gaza: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.349
                Change Percentage: 1.3%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    indiaPakistanConflict: { // Sayfa adı (örneğin India-Pakistan Border Conflicts sayfası)
        default: {
            content: `
                Most affected: Balakot (2.3%)
                Least affected: Uri (2.0%)
                Average structural preservation: 0.180
            `
        },
        uri: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.179
                Change Percentage: 2.0%
                Change intensity: very low
                Impact level: severe
            `
        },
        balakot: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.181
                Change Percentage: 2.3%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    iraqWar: { // Sayfa adı (örneğin Iraq War sayfası)
        default: {
            content: `
                Most affected: Baghdad (0.9%)
                Least affected: Baghdad (0.9%)
            `
        },
        baghdad: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.037
                Change Percentage: 0.9%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    kosovoWar: { // Sayfa adı (örneğin Kosovo War sayfası)
        default: {
            content: `
                Most affected: Belgrade (0.0%)
                Least affected: Pristina (0.0%)
                Average structural preservation: 0.390
            `
        },
        belgrade: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.401
                Change Percentage: 0.0%
                Change intensity: very low
                Impact level: severe
            `
        },
        pristina: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.378
                Change Percentage: 0.0%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    nagornoKarabakhWar: { // Sayfa adı (örneğin Nagorno-Karabakh War sayfası)
        default: {
            content: `
                Most affected: Stepanakert (2.3%)
                Least affected: Aghdam (0.2%)
                Average structural preservation: 0.161
            `
        },
        aghdam: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.062
                Change Percentage: 0.2%
                Change intensity: very low
                Impact level: severe
            `
        },
        stepanakert: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.260
                Change Percentage: 2.3%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    russiaCrimeaWar: { // Sayfa adı (örneğin Russia-Crimea War sayfası)
        default: {
            content: `
                Most affected: Donetsk (1.8%)
                Least affected: Feodosia (0.7%)
                Average structural preservation: 0.231
            `
        },
        feodosia: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.309
                Change Percentage: 0.7%
                Change intensity: very low
                Impact level: severe
            `
        },
        donetsk: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.153
                Change Percentage: 1.8%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    russianInterventionGeorgia: { // Sayfa adı (örneğin Russian Intervention in Georgia sayfası)
        default: {
            content: `
                Most affected: Tskhinvali (0.5%)
                Least affected: Tskhinvali (0.5%)
            `
        },
        tskhinvali: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.279
                Change Percentage: 0.5%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    russiaUkraineWar: { // Sayfa adı (örneğin Russia-Ukraine War sayfası)
        default: {
            content: `
                Most affected: Mariupol (3.9%)
                Least affected: Saky (2.3%)
                Average structural preservation: 0.116
            `
        },
        saky: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.096
                Change Percentage: 2.3%
                Change intensity: very low
                Impact level: severe
            `
        },
        mariupol: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.136
                Change Percentage: 3.9%
                Change intensity: low
                Impact level: severe
            `
        }
    },
    saudiYemenWar: { // Sayfa adı (örneğin Saudi Arabia-Yemen War sayfası)
        default: {
            content: `
                Most affected: Najran (1.5%)
                Least affected: Sanaa (1.5%)
                Average structural preservation: 0.420
            `
        },
        najran: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.436
                Change Percentage: 1.5%
                Change intensity: very low
                Impact level: severe
            `
        },
        sanaa: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.404
                Change Percentage: 1.5%
                Change intensity: very low
                Impact level: severe
            `
        }
    },
    secondIntifada: { // Sayfa adı (örneğin Second Intifada sayfası)
        default: {
            content: `
                Most affected: Gaza (2.4%)
                Least affected: Tel Aviv (0.3%)
                Average structural preservation: 0.346
            `
        },
        telaviv: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.408
                Change Percentage: 0.3%
                Change intensity: very low
                Impact level: severe
            `
        },
        gaza: {
            content: `
                Structural condition: significantly affected
                SSIM Score: 0.284
                Change Percentage: 2.4%
                Change intensity: very low
                Impact level: severe
            `
        }
    },

};


  
// DOM Elements
const nameTooltip = document.getElementById('countryNameTooltip');
const infoBox = document.getElementById('countryInfoBox');
const allCountries = document.querySelectorAll('.allPaths');
const timelineBar = document.querySelector('.timeline-bar');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function createThermometer(container, score, content) {
    const thermometerHtml = `
        <div class="ssim-thermometer">
            <div class="thermometer-section">
                <div class="thermometer-container">
                    <div class="thermometer-fill"></div>
                    <div class="thermometer-markers">
                        <!-- Ana ölçekler -->
                        <div class="thermometer-marker major" style="top: 0%">
                            <span class="thermometer-marker-text">1.0</span>
                        </div>
                        <div class="thermometer-marker major" style="top: 25%">
                            <span class="thermometer-marker-text">0.75</span>
                        </div>
                        <div class="thermometer-marker major" style="top: 50%">
                            <span class="thermometer-marker-text">0.50</span>
                        </div>
                        <div class="thermometer-marker major" style="top: 75%">
                            <span class="thermometer-marker-text">0.25</span>
                        </div>
                        <div class="thermometer-marker major" style="top: 100%">
                            <span class="thermometer-marker-text">0.00</span>
                        </div>
                        
                        <!-- Ara ölçekler -->
                        <div class="thermometer-marker minor" style="top: 12.5%"></div>
                        <div class="thermometer-marker minor" style="top: 37.5%"></div>
                        <div class="thermometer-marker minor" style="top: 62.5%"></div>
                        <div class="thermometer-marker minor" style="top: 87.5%"></div>
                    </div>
                </div>
                <div class="ssim-score-text">SSIM Score: ${score.toFixed(3)}</div>
                <div class="ssim-description"></div>
            </div>
            <div class="ssim-info">
                <div class="city-metrics">
                    <div>Structural condition: significantly affected</div>
                    <div>Change Percentage: ${content.changePercentage}%</div>
                    <div>Change intensity: ${content.changeIntensity}</div>
                    <div>Impact level: ${content.impactLevel}</div>
                    <div class="ssim-explanation">**SSIM indicates the structural similarity between before and after images. Higher values (closer to 1.0) mean less structural change.</div>
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', thermometerHtml);
    updateThermometer(container, score);
}

function updateThermometer(container, score) {
    const thermometer = container.querySelector('.ssim-thermometer');
    const fill = thermometer.querySelector('.thermometer-fill');
    const description = thermometer.querySelector('.ssim-description');

    const percentage = Math.min(Math.max(score * 100, 0), 100);
    fill.style.height = `${percentage}%`;

    let color, backgroundColor, textColor, text;
    if (score < 0.33) {
        color = 'rgba(239, 68, 68, 0.9)'; // Kırmızı
        backgroundColor = 'rgba(254, 226, 226, 0.7)';
        textColor = '#991b1b';
        text = 'High Change';
    } else if (score < 0.66) {
        color = 'rgba(234, 179, 8, 0.9)';  // Sarı
        backgroundColor = 'rgba(254, 249, 195, 0.7)';
        textColor = '#854d0e';
        text = 'Moderate';
    } else {
        color = 'rgba(34, 197, 94, 0.9)';  // Yeşil
        backgroundColor = 'rgba(220, 252, 231, 0.7)';
        textColor = '#166534';
        text = 'Low Change';
    }

    fill.style.backgroundColor = color;
    description.textContent = text;
    description.style.backgroundColor = backgroundColor;
    description.style.color = textColor;
}

function initializeSliders() {
    const containers = document.querySelectorAll('.container');
    if (containers.length === 0) return; // Eğer container yoksa fonksiyondan çık

    containers.forEach(container => {
        const imageAfter = container.querySelector('.image-after');
        const slider = container.querySelector('.slider');
        if (!imageAfter || !slider) return; // Gerekli elementler yoksa bu container'ı atla
        
        let isDragging = false;

        function updateSliderPosition(x) {
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const position = ((x - containerRect.left) / containerWidth) * 100;
            const clampedPosition = Math.min(Math.max(0, position), 100);
            
            imageAfter.style.clipPath = `polygon(0 0, ${clampedPosition}% 0, ${clampedPosition}% 100%, 0 100%)`;
            slider.style.left = `${clampedPosition}%`;
        }

        function handleMouseDown(e) {
            isDragging = true;
            container.style.cursor = 'col-resize';
        }

        function handleMouseUp() {
            isDragging = false;
            container.style.cursor = 'default';
        }

        function handleMouseMove(e) {
            if (!isDragging) return;
            updateSliderPosition(e.clientX);
        }

        // Mouse Events
        slider.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        // Touch Events
        slider.addEventListener('touchstart', e => {
            isDragging = true;
            handleMouseDown(e.touches[0]);
        });

        document.addEventListener('touchend', handleMouseUp);
        document.addEventListener('touchmove', e => {
            if (!isDragging) return;
            handleMouseMove(e.touches[0]);
            e.preventDefault();
        });

        // Set initial position (after elements are loaded)
        requestAnimationFrame(() => {
            const containerRect = container.getBoundingClientRect();
            updateSliderPosition(containerRect.left + containerRect.width / 2);
        });
    });
}

function updateSliderPosition(x) {
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const position = ((x - containerRect.left) / containerWidth) * 100;
    const clampedPosition = Math.min(Math.max(0, position), 100);
    
    imageAfter.style.clipPath = `polygon(0 0, ${clampedPosition}% 0, ${clampedPosition}% 100%, 0 100%)`;
    slider.style.left = `${clampedPosition}%`;

    // Before label'ın görünürlüğünü kontrol et
    const beforeLabel = container.querySelector('.label-before');
    if (beforeLabel) {
        const labelWidth = beforeLabel.offsetWidth + 40; // 40px ekstra alan
        const labelVisibilityThreshold = (labelWidth / containerWidth) * 100;
        beforeLabel.style.opacity = clampedPosition > labelVisibilityThreshold ? '0' : '1';
    }
}

function updateImpactInfo(cityKey = "default") {
    const bodyElement = document.getElementById('body');
    const currentPage = bodyElement.getAttribute('data-page');
    const pageInfo = cityImpactInfo[currentPage];

    if (!pageInfo) {
        console.error("No page info found for:", currentPage);
        return;
    }

    const cityInfoBox = document.querySelector('.city-info-box');
    const defaultMessage = document.querySelector('.default-message');

    if (cityKey === "default") {
        if (defaultMessage) defaultMessage.style.display = 'block';
        if (cityInfoBox) {
            cityInfoBox.innerHTML = `<p>${pageInfo.default.content}</p>`;
            cityInfoBox.style.display = 'block';
        }
    } else {
        if (defaultMessage) defaultMessage.style.display = 'none';
        if (cityInfoBox && pageInfo[cityKey]) {
            const content = pageInfo[cityKey].content;
            const ssimMatch = content.match(/SSIM Score: ([\d.]+)/);
            const ssimScore = ssimMatch ? parseFloat(ssimMatch[1]) : 0;
            
            // İçeriği parse et
            const contentData = {
                changePercentage: content.match(/Change Percentage: ([\d.]+)/)[1],
                changeIntensity: content.match(/Change intensity: ([^\n]+)/)[1],
                impactLevel: content.match(/Impact level: ([^\n]+)/)[1]
            };

            cityInfoBox.innerHTML = '';
            createThermometer(cityInfoBox, ssimScore, contentData);
            cityInfoBox.style.display = 'block';
        }
    }
}

function initializeCitySelector() {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;

    citySelect.addEventListener('change', function (e) {
        const selectedCity = e.target.value;

        // Tüm sliderları gizle
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });

        if (selectedCity) {
            const selectedSlider = document.querySelector(`.slider-${selectedCity}`);
            if (selectedSlider) {
                selectedSlider.style.display = 'block';
                initializeSliders();
            }
            updateImpactInfo(selectedCity);
        } else {
            updateImpactInfo('default');
        }
    });

    // Başlangıçta default göster
    updateImpactInfo('default');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSliders();
    initializeCitySelector();
    
    // Show default message for city selector
    const defaultMessage = document.querySelector('.default-message');
    if (defaultMessage) {
        defaultMessage.style.display = 'block';
    }
});

// Time API function
async function getUser(place) {
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=YOUR_API_KEY&location=${place}`
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        time = await data.datetime;
        document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`
    } catch (error) {
        console.log('Error fetching time:', error);
    }
}

const mainWarZones = {
    'Gulf War': 'Kuwait',
    'Afghan War': 'Afghanistan',
    'Iraq War': 'Iraq',
    'Saudi Arabia-Yemen War': 'Yemen',
    'First Intifada': 'Palestine',
    'Second Intifada': 'Palestine',
    'Gaza War': 'Palestine',
    'Current Gaza Conflict': 'Palestine',
    'Russian Intervention in Georgia': 'Georgia',
    'Nagorno-Karabakh War': 'Azerbaijan', // Karabağ bölgesi
    'Kosovo War': 'Kosovo',
    'India-Pakistan Border Conflicts': 'India', // Tartışmalı bölge
    'China-India Border Conflict': 'India', // Ladakh bölgesi
    'Ethiopia-Sudan Border Conflicts': 'Sudan', // Al-Fashaga bölgesi
    'Russia-Crimea War': 'Ukraine', // Kırım
    'Russia-Ukraine War': 'Ukraine'
};

// Country event listeners kısmını şöyle güncelleyin
// Event listener'da info box güncelleme kısmını değiştirin
allCountries.forEach(country => {
    country.addEventListener('mouseenter', (event) => {
        nameTooltip.textContent = country.id;
        nameTooltip.style.left = `${event.pageX + 10}px`;
        nameTooltip.style.top = `${event.pageY - 20}px`;
        nameTooltip.style.opacity = 1;

        // Aktif savaşı bul
        const activeWar = document.querySelector('.timeline-item.active');
        if (activeWar) {
            const warName = activeWar.textContent.split(' (')[0];
            const warInfo = warSpecificInfo[warName];
            
            if (warInfo && warInfo[countryId]) {
                const countryData = warInfo[countryId];
                const isMainWarZone = mainWarZones[warName] === countryId;
                
                // Info box içeriği
                let mainWarZoneInfo = isMainWarZone ? 
                    `<div class="main-warzone-info">Primary battlefield of the conflict</div>` : '';
            
                infoBox.innerHTML = `
                    <div class="country-info">
                        <div class="country-header">
                            <span class="country-flag">${countryData.flag}</span>
                            <span class="country-name">${countryId}</span>
                        </div>
                        <div class="country-description">${countryData.info}</div>
                        ${mainWarZoneInfo}
                        <div class="country-role">Role: <span class="${countryData.role.toLowerCase()}">${countryData.role}</span></div>
                        <div class="affected-cities">
                            <div class="cities-title">Affected Cities:</div>
                            <div class="cities-list">${countryData.affectedCities.join(", ")}</div>
                        </div>
                    </div>
                `;
                infoBox.style.left = `${event.pageX + 10}px`;
                infoBox.style.top = `${event.pageY + 10}px`;
                infoBox.style.opacity = 1;
            }
        }
    });

    country.addEventListener('mousemove', (event) => {
        nameTooltip.style.left = `${event.pageX + 10}px`;
        nameTooltip.style.top = `${event.pageY - 20}px`;
        infoBox.style.left = `${event.pageX + 10}px`;
        infoBox.style.top = `${event.pageY + 10}px`;
    });

    country.addEventListener('mouseleave', () => {
        nameTooltip.style.opacity = 0;
        infoBox.style.opacity = 0;
        if (!country.classList.contains('selected')) {
            country.style.fill = '';
        }
    });

    country.addEventListener('click', function() {
        getUser(country.id);
        
        // Aktif savaşı kontrol et
        const activeWar = document.querySelector('.timeline-item.active');
        const activeWarName = activeWar ? activeWar.textContent.split(' (')[0] : null;
        
        // Ülkenin dahil olduğu tüm savaşları bul
        const involvedWars = Object.entries(warParticipants)
            .filter(([_, participants]) => participants.includes(country.id))
            .map(([warName]) => warName);

        if (involvedWars.length > 0) {
            // Eğer aktif bir savaş varsa ve ülke o savaşta yer alıyorsa ona git
            if (activeWarName && involvedWars.includes(activeWarName)) {
                window.location.href = `./${warUrlMapping[activeWarName]}`;
            } else {
                // Değilse ilk savaşa git
                window.location.href = `./${warUrlMapping[involvedWars[0]]}`;
            }
        }
    });
});
// Timeline functionality - restore
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        timelineItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const warName = item.textContent.split(' (')[0];
        const participants = warParticipants[warName] || [];

        // Reset all countries
        allCountries.forEach(country => {
            country.style.fill = '';
            country.classList.remove('selected');
        });

        // İlk olarak tüm katılımcı ülkeleri kırmızı yap
        participants.forEach(countryId => {
            allCountries.forEach(path => {
                if (path.id === countryId) {
                    path.style.fill = '#FF0000';
                    path.classList.add('selected');
                }
            });
        });

        // Mouse over eventlerini güncelle
        allCountries.forEach(country => {
            country.onmouseenter = (event) => {
                const countryId = country.id;
                const warInfo = warSpecificInfo[warName];
                
                if (warInfo && warInfo[countryId]) {
                    const countryData = warInfo[countryId];
                    const isMainWarZone = mainWarZones[warName] === countryId;
                    
                    // Info box içeriği
                    let mainWarZoneInfo = isMainWarZone ? 
                    `<div class="main-warzone-info">Primary battlefield of the conflict</div>` : '';

                    infoBox.innerHTML = `
                        <div class="country-info">
                            <div class="country-header">
                                <span class="country-flag">${countryData.flag}</span>
                                <span class="country-name">${countryId}</span>
                            </div>
                            <div class="country-description">${countryData.info}</div>
                            ${mainWarZoneInfo}
                            <div class="country-role">Role: <span class="${countryData.role.toLowerCase()}">${countryData.role}</span></div>
                            <div class="affected-cities">
                                <div class="cities-title">Affected Cities:</div>
                                <div class="cities-list">${countryData.affectedCities.join(", ")}</div>
                            </div>
                        </div>
                    `;
                    infoBox.style.left = `${event.pageX + 10}px`;
                    infoBox.style.top = `${event.pageY + 10}px`;
                    infoBox.style.opacity = 1;
                }
            };
        });
    });
});

// Timeline arrow functionality
leftArrow.addEventListener('click', () => {
    timelineBar.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    timelineBar.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        leftArrow.click();
    } else if (e.key === 'ArrowRight') {
        rightArrow.click();
    }
});

//pdf için 
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById('download-pdf');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async function (e) {
            e.preventDefault();

            const content = document.querySelector('.war-content'); // Yalnızca bu alanı seç

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [content.offsetWidth, content.offsetHeight]
            });

            // Yükleme mesajı
            const loadingMessage = document.createElement('div');
            loadingMessage.textContent = "Generating PDF, please wait...";
            loadingMessage.style.position = "fixed";
            loadingMessage.style.top = "50%";
            loadingMessage.style.left = "50%";
            loadingMessage.style.transform = "translate(-50%, -50%)";
            loadingMessage.style.background = "rgba(0,0,0,0.7)";
            loadingMessage.style.color = "white";
            loadingMessage.style.padding = "10px 20px";
            loadingMessage.style.borderRadius = "5px";
            document.body.appendChild(loadingMessage);

            // Görsellerin yüklenmesini bekle
            const imagesLoaded = Array.from(document.images).map(img => {
                return new Promise(resolve => {
                    img.onload = img.onerror = resolve;
                });
            });

            await Promise.all(imagesLoaded);

            // PDF'yi oluştur ve indir
            pdf.html(content, {
                callback: function (pdf) {
                    pdf.save("Gulf_War.pdf");
                    document.body.removeChild(loadingMessage);
                },
                x: 10,
                y: 10
            });
        });
    }
});

