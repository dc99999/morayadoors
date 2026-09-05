document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const languageToggle = document.querySelector(".language-toggle");
  const originalText = new WeakMap();

  const marathi = {
    Home: "मुखपृष्ठ",
    Doors: "दरवाजे",
    Decors: "सजावट",
    Contact: "संपर्क",
    "Quality • Style • Trust": "गुणवत्ता • शैली • विश्वास",
    "Beautiful doors and decor for every space.": "प्रत्येक जागेसाठी सुंदर दरवाजे आणि सजावटीच्या वस्तू.",
    "Discover thoughtfully designed doors, windows and chairs that bring lasting character, comfort and a premium finish to homes, offices and commercial spaces.": "घर, कार्यालय आणि व्यावसायिक जागांसाठी टिकाऊ सौंदर्य, आराम आणि उत्कृष्ट फिनिश देणारे दरवाजे, खिडक्या आणि खुर्च्यांची निवड करा.",
    "Explore Doors": "दरवाजे पहा",
    "Explore Decors": "सजावट पहा",
    "Distinctive designs. Reliable craftsmanship.": "वैशिष्ट्यपूर्ण डिझाइन. विश्वासार्ह कारागिरी.",
    "What we offer": "आमची उत्पादने",
    "Doors & Decors": "दरवाजे आणि सजावट",
    "Explore a considered collection for entrances, interiors and everyday living.": "प्रवेशद्वार, आतील सजावट आणि दैनंदिन वापरासाठी निवडक संग्रह पहा.",
    "Single, double, security, fancy and customized doors.": "सिंगल, डबल, सुरक्षित, आकर्षक आणि कस्टम दरवाजे.",
    "Elegant windows and chairs for a refined interior.": "सुंदर आतील सजावटीसाठी आकर्षक खिडक्या आणि खुर्च्या.",
    "View doors →": "दरवाजे पहा →",
    "View decors →": "सजावट पहा →",
    "Visit us": "आम्हाला भेट द्या",
    "Find us in Dharashiv": "धाराशिवमध्ये आम्हाला भेटा",
    "Come by and explore our collection in person.": "या आणि आमचा संग्रह प्रत्यक्ष पहा.",
    "Why choose Morya": "मोरया का निवडावे",
    "Quality work, made with care.": "काळजीपूर्वक केलेले दर्जेदार काम.",
    "From the first design conversation to the final fitting, our skilled team focuses on dependable workmanship and a finish that feels right for your space.": "डिझाइनच्या पहिल्या चर्चेपासून अंतिम फिटिंगपर्यंत आमची कुशल टीम विश्वासार्ह काम आणि तुमच्या जागेला अनुरूप फिनिशवर लक्ष देते.",
    "Skilled workmanship": "कुशल कारागिरी",
    "Careful fitting and attention to detail.": "काळजीपूर्वक फिटिंग आणि बारकाव्यांकडे लक्ष.",
    "Quality materials": "दर्जेदार साहित्य",
    "Reliable products selected for lasting use.": "दीर्घकाळ वापरासाठी निवडलेली विश्वासार्ह उत्पादने.",
    "Personal service": "वैयक्तिक सेवा",
    "Friendly guidance for every requirement.": "प्रत्येक गरजेसाठी आपुलकीचे मार्गदर्शन.",
    "Speak with our team": "आमच्या टीमशी बोला",
    "Thoughtful design": "विचारपूर्वक डिझाइन",
    "We help you choose styles that suit your space, purpose and budget.": "तुमची जागा, उपयोग आणि बजेट यांना अनुरूप शैली निवडण्यास आम्ही मदत करतो.",
    "Reliable fitting": "विश्वासार्ह फिटिंग",
    "Our experienced team pays attention to measurements, finish and detail.": "आमची अनुभवी टीम मोजमाप, फिनिश आणि बारकाव्यांकडे लक्ष देते.",
    "Made for you": "तुमच्यासाठी खास",
    "From standard choices to custom requirements, we make the process simple.": "सामान्य पर्यायांपासून कस्टम गरजांपर्यंत आम्ही प्रक्रिया सोपी करतो.",
    "Quality doors and decor solutions.": "दर्जेदार दरवाजे आणि सजावटीचे उपाय.",
    "Doors, windows and decor solutions for your space.": "तुमच्या जागेसाठी दरवाजे, खिडक्या आणि सजावटीचे उपाय.",
    "Morya Door & Decors": "मोरया डोअर्स आणि डेकोर्स",
    "Dharashiv Bus Stand": "धाराशिव बस स्टँड",
    "Interior Collection": "आतील सजावट संग्रह",
    "Door Collection": "दरवाजा संग्रह",
    "Simple, elegant pieces to complement your home and workspace.": "तुमच्या घराला आणि कार्यक्षेत्राला पूरक साध्या, आकर्षक वस्तू.",
    Windows: "खिडक्या",
    Chairs: "खुर्च्या",
    "Functional and stylish window options for every room.": "प्रत्येक खोलीसाठी उपयुक्त आणि आकर्षक खिडक्यांचे पर्याय.",
    "Comfortable seating with modern decorative appeal.": "आधुनिक सजावटीच्या आकर्षणासह आरामदायी आसनव्यवस्था.",
    "Explore →": "पहा →",
    "Explore designs for entrances, interiors, security and custom requirements.": "प्रवेशद्वार, आतील वापर, सुरक्षितता आणि कस्टम गरजांसाठी डिझाइन पहा.",
    "Classic single-door designs for homes and offices.": "घर आणि कार्यालयांसाठी क्लासिक सिंगल दरवाज्यांचे डिझाइन.",
    "Elegant wider entrances with balanced design.": "समतोल डिझाइनसह आकर्षक रुंद प्रवेशद्वार.",
    "Strong and stylish options for enhanced protection.": "अधिक सुरक्षिततेसाठी मजबूत आणि आकर्षक पर्याय.",
    "Statement designs that add character to your entrance.": "तुमच्या प्रवेशद्वाराला वेगळे व्यक्तिमत्त्व देणारी डिझाइन.",
    "Tailored designs, sizes and finishes for your needs.": "तुमच्या गरजेनुसार डिझाइन, आकार आणि फिनिश.",
    "Single Door": "सिंगल दरवाजा",
    "Double Door": "डबल दरवाजा",
    "Security Door": "सुरक्षा दरवाजा",
    "Fancy Door": "आकर्षक दरवाजा",
    "Customized Door": "कस्टम दरवाजा",
    "Clean and versatile single-door designs suitable for bedrooms, offices and main entrances.": "बेडरूम, कार्यालय आणि मुख्य प्रवेशद्वारांसाठी योग्य स्वच्छ आणि बहुउपयोगी सिंगल दरवाज्यांची डिझाइन.",
    "Wide, elegant entrance doors designed to create a strong first impression.": "पहिली छाप प्रभावी पाडण्यासाठी डिझाइन केलेले रुंद आणि आकर्षक प्रवेशद्वार.",
    "Durable door solutions combining security, strength and a clean appearance.": "सुरक्षितता, मजबुती आणि आकर्षक रूप यांचा संगम असलेले टिकाऊ दरवाजे.",
    "Decorative statement doors for customers looking for a distinctive entrance.": "वेगळे प्रवेशद्वार शोधणाऱ्या ग्राहकांसाठी खास सजावटीचे दरवाजे.",
    "Create a door around your space, dimensions, preferred style and finish.": "तुमच्या जागा, मोजमाप, आवडती शैली आणि फिनिशनुसार दरवाजा तयार करा.",
    "Multiple design options": "अनेक डिझाइन पर्याय",
    "Custom sizes available": "कस्टम आकार उपलब्ध",
    "Choice of finish and hardware": "फिनिश आणि हार्डवेअरची निवड",
    "Modern and traditional styles": "आधुनिक आणि पारंपरिक शैली",
    "Custom dimensions available": "कस्टम मोजमाप उपलब्ध",
    "Premium finish options": "प्रीमियम फिनिशचे पर्याय",
    "Strong construction": "मजबूत बांधणी",
    "Lock and hardware options": "लॉक आणि हार्डवेअरचे पर्याय",
    "Custom sizes and finishes": "कस्टम आकार आणि फिनिश",
    "Designer patterns": "डिझायनर पॅटर्न",
    "Multiple material and finish choices": "साहित्य आणि फिनिशचे अनेक पर्याय",
    "Customization available": "कस्टमायझेशन उपलब्ध",
    "Made-to-measure designs": "मोजमापानुसार डिझाइन",
    "Personalized finishes": "तुमच्या पसंतीचे फिनिश",
    "Design consultation": "डिझाइन सल्ला",
    "Different styles and sizes": "विविध शैली आणि आकार",
    "Modern appearance": "आधुनिक रूप",
    "Custom requirements supported": "कस्टम गरजांना समर्थन",
    "Contemporary designs": "समकालीन डिझाइन",
    "Comfort-focused options": "आरामाला प्राधान्य देणारे पर्याय",
    "Different finishes and materials": "विविध फिनिश आणि साहित्य",
    "A refined design with a balanced, timeless finish.": "समतोल आणि कायम आकर्षक फिनिश असलेली सुंदर डिझाइन.",
    "A practical style created to complement modern spaces.": "आधुनिक जागांना पूरक अशी उपयुक्त शैली.",
    "Carefully selected details bring this design to life.": "काळजीपूर्वक निवडलेले बारकावे या डिझाइनला उठाव देतात.",
    "A distinctive option for customers who value quality.": "गुणवत्तेला महत्त्व देणाऱ्या ग्राहकांसाठी खास पर्याय.",
    "Thoughtful proportions make this piece easy to live with.": "विचारपूर्वक मोजमापामुळे हा पर्याय वापरण्यास सोपा आहे.",
    "A warm, versatile design for everyday interiors.": "दैनंदिन आतील सजावटीसाठी उबदार आणि बहुउपयोगी डिझाइन.",
    "Clean lines and a considered finish create a premium look.": "स्वच्छ रेषा आणि विचारपूर्वक फिनिश प्रीमियम रूप देतात.",
    "A dependable choice with strong visual character.": "ठळक दृश्य व्यक्तिमत्त्व असलेला विश्वासार्ह पर्याय.",
    "Designed to add comfort, beauty and lasting appeal.": "आराम, सौंदर्य आणि टिकणारे आकर्षण वाढवण्यासाठी डिझाइन केलेले.",
    "A beautiful example from the Morya collection.": "मोरया संग्रहातील एक सुंदर नमुना.",
    "© 2026 Morya Door & Decors.": "© 2026 मोरया डोअर्स आणि डेकोर्स.",
    "© 2026 Morya Door & Decors. All rights reserved.": "© 2026 मोरया डोअर्स आणि डेकोर्स. सर्व हक्क राखीव.",
  };

  const pageTitles = {
    "index.html": "मोरया डोअर्स आणि डेकोर्स | धाराशिव",
    "decor.html": "सजावट | मोरया डोअर्स आणि डेकोर्स",
    "doors.html": "दरवाजे | मोरया डोअर्स आणि डेकोर्स",
    "windows.html": "खिडक्या | मोरया डोअर्स आणि डेकोर्स",
    "chairs.html": "खुर्च्या | मोरया डोअर्स आणि डेकोर्स",
    "single-door.html": "सिंगल दरवाजा | मोरया डोअर्स आणि डेकोर्स",
    "double-door.html": "डबल दरवाजा | मोरया डोअर्स आणि डेकोर्स",
    "security-door.html": "सुरक्षा दरवाजा | मोरया डोअर्स आणि डेकोर्स",
    "fancy-door.html": "आकर्षक दरवाजा | मोरया डोअर्स आणि डेकोर्स",
    "customized-door.html": "कस्टम दरवाजा | मोरया डोअर्स आणि डेकोर्स",
  };
  const englishTitle = document.title;

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    if (!textNode.parentElement.closest(".language-toggle")) {
      originalText.set(textNode, textNode.nodeValue);
      textNodes.push(textNode);
    }
  }

  const translatePage = (language) => {
    textNodes.forEach((node) => {
      const original = originalText.get(node);
      const trimmed = original.trim();
      const translated = language === "mr" && marathi[trimmed] ? marathi[trimmed] : trimmed;
      node.nodeValue = original.replace(trimmed, translated);
    });

    document.documentElement.lang = language === "mr" ? "mr" : "en";
    const fileName = window.location.pathname.split("/").pop() || "index.html";
    document.title = language === "mr" ? pageTitles[fileName] || englishTitle : englishTitle;
    if (languageToggle) {
      languageToggle.textContent = language === "mr" ? "English" : "मराठी";
      languageToggle.setAttribute("aria-label", language === "mr" ? "Switch to English" : "Switch to Marathi");
    }
  };

  const savedLanguage = localStorage.getItem("morya-language") || "en";
  translatePage(savedLanguage);

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLanguage = (localStorage.getItem("morya-language") || "en") === "mr" ? "en" : "mr";
      localStorage.setItem("morya-language", nextLanguage);
      window.location.reload();
    });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".detail-gallery").forEach((gallery) => {
    const images = Array.from(gallery.children);
    const descriptions = [
      "A refined design with a balanced, timeless finish.",
      "A practical style created to complement modern spaces.",
      "Carefully selected details bring this design to life.",
      "A distinctive option for customers who value quality.",
      "Thoughtful proportions make this piece easy to live with.",
      "A warm, versatile design for everyday interiors.",
      "Clean lines and a considered finish create a premium look.",
      "A dependable choice with strong visual character.",
      "Designed to add comfort, beauty and lasting appeal.",
      "A beautiful example from the Morya collection.",
    ];

    images.sort(() => Math.random() - 0.5);
    images.forEach((image, index) => {
      const figure = document.createElement("figure");
      const caption = document.createElement("figcaption");

      caption.textContent = savedLanguage === "mr" ? marathi[descriptions[index]] : descriptions[index];
      figure.append(image, caption);
      gallery.appendChild(figure);
    });
  });

  const mapElement = document.getElementById("map");

  if (mapElement && typeof L !== "undefined") {
    const dharashivBusStand = [18.1841, 76.0419];

    const map = L.map("map").setView(dharashivBusStand, 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
    }).addTo(map);

    const mapBusinessName = savedLanguage === "mr" ? "मोरया डोअर्स आणि डेकोर्स" : "Morya Door & Decors";
    const mapLocation = savedLanguage === "mr" ? "धाराशिव बस स्टँड" : "Dharashiv Bus Stand";
    const mapLinkText = savedLanguage === "mr" ? "📍 Google Maps मध्ये उघडा" : "📍 Follow / Open in Google Maps";

    L.marker(dharashivBusStand)
      .addTo(map)
      .bindPopup(
        `
        <div>
          <strong>${mapBusinessName}</strong><br>
          ${mapLocation}<br><br>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=18.1841,76.0419"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${mapLinkText}
          </a>
        </div>
      `,
      )
      .openPopup();
  }
});
