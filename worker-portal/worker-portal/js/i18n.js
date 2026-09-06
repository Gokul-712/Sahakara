// Sahakari Seva — Multilingual i18n Engine (5 Languages)

const translations = {
  en: {
    // Header & Nav
    "nav_how_it_works": "How it works",
    "nav_services": "Services",
    "nav_sign_in": "Worker sign in",
    "nav_dashboard": "Dashboard",
    "nav_community": "Community",
    "nav_history": "History",
    "logout": "Log out",

    // Landing Hero
    "hero_worker_eyebrow": "FOR COOPERATIVE WORKERS",
    "hero_worker_title": "Your skill, your cooperative, your terms.",
    "hero_worker_desc": "Join a platform owned by your labour cooperative — keep almost all of what you earn, get matched fairly, and have a real say in how jobs are assigned.",
    "register_as_worker": "Register as a worker",
    "hero_stat_fee_lbl": "platform fee, not 25%",
    "hero_stat_vote_lbl": "worker, 1 vote in governance",
    "hero_stat_cat_lbl": "service categories",
    "hero_client_eyebrow": "FOR HOUSEHOLDS & INSTITUTIONS",
    "hero_client_title": "Verified help, without the markup.",
    "hero_client_desc": "Book electricians, caregivers, cleaners and more from your local labour cooperative — every worker is identity-checked, skill-tested, and accountable to their own community.",
    "book_a_service": "Book a service",

    // Principles Section
    "principles_eyebrow": "WHAT MAKES THIS A COOPERATIVE, NOT A MARKETPLACE",
    "principles_title": "Built so the people doing the work keep the power.",
    "p1_title": "Fee covers servers, not profit",
    "p1_desc": "No commission on your labour. The small platform fee only covers hosting and verification costs — nothing more.",
    "p2_title": "A community that speaks for itself",
    "p2_desc": "Workers organise into local groups with an elected representative who reports concerns directly to the peer network.",
    "p3_title": "Peer-to-peer skill training",
    "p3_desc": "No federation offices needed — workers request training and experienced peers accept to train them for a small negotiated fee.",
    "p4_title": "Every worker, in their own language",
    "p4_desc": "The full worker experience — registration, jobs, payments, peer training — is available in 5 Indian languages.",

    // Dashboard
    "greeting": "Good morning, Murugan",
    "jobs_available_sub": "4 unclaimed jobs match your skills near you today.",
    "stat_open_jobs": "Open jobs nearby",
    "stat_weekly_earned": "Earned this week",
    "stat_avg_rating": "Average rating",
    "stat_active_trainings": "Active peer trainings",
    "available_jobs": "Available jobs",
    "accept": "Accept",
    "accepted": "Accepted",

    // Peer Training
    "peer_training_title": "Peer-to-Peer Worker Training",
    "peer_training_desc": "No offices or federation needed. Post a training claim or train a fellow worker for a small fee.",
    "apply_training_btn": "+ Apply for specific training",
    "open_training_claims": "Open peer training requests",
    "claim_solar": "Solar panel wiring & inverter setup",
    "claim_solar_sub": "Requested by Kumar P. · Offering ₹400 for 2 hrs hands-on guidance",
    "claim_smart": "Smart home switchboard installation",
    "claim_smart_sub": "Requested by Selvam R. · Offering ₹300 for 1.5 hrs training",
    "accept_and_train": "Accept & Train",
    "training_applied": "Training requested! Peer workers notified.",

    // Profile Stats Modal
    "profile_stats_title": "Worker Trust & Performance Score",
    "overall_score_lbl": "Overall Rating Score",
    "score_formula_title": "How Your Score is Calculated",
    "score_item_punctuality": "On-Time Job Completion (40% weight)",
    "score_item_ratings": "Client Reviews & Ratings (30% weight)",
    "score_item_training": "Peer Training Contributions (15% weight)",
    "score_item_disputes": "Zero Dispute Record (15% weight)",
    "reasons_title": "Reasons Behind Your Score",
    "reason_1": "✓ 99.2% on-time arrival rate over 142 completed jobs",
    "reason_2": "✓ Average 4.9 / 5.0 rating from verified clients",
    "reason_3": "✓ Conducted 8 peer training sessions for fellow workers",
    "consent_warning_msg": "⚠️ Please accept the cooperative consent terms before registering.",

    // Logout Modal
    "logout_confirm_title": "Confirm Logout",
    "logout_confirm_msg": "Are you sure you want to log out of Sahakari Seva?",
    "cancel": "Cancel",
    "confirm_logout": "Yes, Log Out",

    // History Page
    "history_title": "Job History & Earnings",
    "history_sub": "Track every completed task, client payout, and active processing status.",
    "tab_all": "All",
    "tab_this_month": "This month",
    "tab_paid": "Paid",
    "tab_processing": "Processing",
    "total_earned": "Total earned",
    "paid_payouts": "Paid payouts",
    "processing_payouts": "Processing payouts",
    "th_job": "Job & Details",
    "th_client_area": "Client Area",
    "th_date": "Date",
    "th_payment": "Payment",
    "th_status": "Status",

    // Client Details Page
    "client_details_title": "Accepted Job — Client Details",
    "client_name": "Client Name",
    "client_age": "Client Age",
    "client_phone": "Phone Number",
    "client_address": "Service Address",
    "client_notes": "Special Instructions / Notes",
    "call_client": "Call Client",
    "get_directions": "Get Directions",
    "mark_completed": "Mark Job Completed",
    "back_to_dashboard": "← Back to Dashboard"
  },

  ta: {
    // Header & Nav
    "nav_how_it_works": "செயல்படும் முறை",
    "nav_services": "சேவைகள்",
    "nav_sign_in": "தொழிலாளி உள்நுழைவு",
    "nav_dashboard": "முகப்புப் பலகை",
    "nav_community": "சமூகம்",
    "nav_history": "வரலாறு",
    "logout": "வெளியேறு",

    // Landing Hero
    "hero_worker_eyebrow": "கூட்டுறவு தொழிலாளர்களுக்கு",
    "hero_worker_title": "உங்கள் திறமை, உங்கள் கூட்டுறவு, உங்கள் உரிமை.",
    "hero_worker_desc": "தொழிலாளர் கூட்டுறவின் கீழ் இயங்கும் தளம் — உழைப்பின் பெரும் பகுதி உங்களுக்கே.",
    "register_as_worker": "தொழிலாளியாக பதிவு செய்",
    "hero_stat_fee_lbl": "தளக் கட்டணம் மட்டுமே",
    "hero_stat_vote_lbl": "1 தொழிலாளி, 1 வாக்கு",
    "hero_stat_cat_lbl": "சேவை பிரிவுகள்",
    "hero_client_eyebrow": "வீடுகள் மற்றும் நிறுவனங்களுக்கு",
    "hero_client_title": "நம்பகமான சேவை, நியாயமான விலையில்.",
    "hero_client_desc": "மின்சாரப் பணியாளர்கள், பராமரிப்பாளர்கள் மற்றும் துப்புரவுப் பணியாளர்களை நேரடியாக முன்பதிவு செய்யுங்கள்.",
    "book_a_service": "சேவை முன்பதிவு",

    // Principles Section
    "principles_eyebrow": "இது ஏன் ஒரு கூட்டுறவு தளம்",
    "principles_title": "உழைக்கும் மக்களுக்கே முழு அதிகாரம்.",
    "p1_title": "சர்வர் கட்டணம் மட்டுமே",
    "p1_desc": "சுரண்டல் கமிஷன் இல்லை. சேவையக பராமரிப்பு கட்டணம் மட்டுமே.",
    "p2_title": "சுயசார்பு தொழிலாளர் சமூகம்",
    "p2_desc": "தொழிலாளர்கள் தங்களுக்கான பிரதிநிதியைத் தேர்ந்தெடுத்து இயங்குகிறார்கள்.",
    "p3_title": "தொழிலாளருக்கிடையே பயிற்சி",
    "p3_desc": "அலுவலகங்கள் தேவையில்லை — ஒரு தொழிலாளி பயிற்சி கேட்கும்போது மற்ற தொழிலாளி குறைந்த கட்டணத்தில் பயிற்சி அளிக்கிறார்.",
    "p4_title": "உங்கள் சொந்த மொழியில்",
    "p4_desc": "பதிவு, வேலைகள், கட்டணங்கள் அனைத்தும் உங்கள் தாய்மொழியில்.",

    // Dashboard
    "greeting": "காலை வணக்கம், முருகன்",
    "jobs_available_sub": "இன்று உங்களின் திறமைக்கேற்ற 4 வேலைகள் அருகில் உள்ளன.",
    "stat_open_jobs": "அருகிலுள்ள வேலைகள்",
    "stat_weekly_earned": "இந்த வார வருமானம்",
    "stat_avg_rating": "சராசரி மதிப்பீடு",
    "stat_active_trainings": "பயிற்சி விண்ணப்பங்கள்",
    "available_jobs": "கிடைக்கும் வேலைகள்",
    "accept": "ஏற்றுக்கொள்",
    "accepted": "ஏற்றுக்கொள்ளப்பட்டது",

    // Peer Training
    "peer_training_title": "தொழிலாளர் பயிற்சி பரிமாற்றம்",
    "peer_training_desc": "அலுவலகம் தேவையில்லை. பயிற்சி தேவைப்பட்டால் விண்ணப்பியுங்கள் அல்லது மற்ற தொழிலாளிக்கு பயிற்சி அளியுங்கள்.",
    "apply_training_btn": "+ குறிப்பிட்ட பயிற்சிக்கு விண்ணப்பிக்க",
    "open_training_claims": "பயிற்சி கோரிக்கைகள்",
    "claim_solar": "சோலார் பேனல் வயரிங் & இன்வெர்ட்டர்",
    "claim_solar_sub": "குமார் P. கேட்டுள்ளார் · ₹400 கட்டணம்",
    "claim_smart": "ஸ்மார்ட் ஸ்விட்ச்போர்டு நிறுவுதல்",
    "claim_smart_sub": "செல்வம் R. கேட்டுள்ளார் · ₹300 கட்டணம்",
    "accept_and_train": "ஏற்று பயிற்சி அளி",
    "training_applied": "பயிற்சி கோரிக்கை சமர்ப்பிக்கப்பட்டது!",

    // Profile Stats Modal
    "profile_stats_title": "தொழிலாளி நம்பிக்கை & மதிப்பீட்டு புள்ளிகள்",
    "overall_score_lbl": "மொத்த மதிப்பீட்டு புள்ளி",
    "score_formula_title": "புள்ளிகள் எவ்வாறு கணக்கிடப்படுகின்றன",
    "score_item_punctuality": "நேரத்திற்கு வேலை முடித்தல் (40% பங்கு)",
    "score_item_ratings": "வாடிக்கையாளர் மதிப்பீடு (30% பங்கு)",
    "score_item_training": "மற்ற தொழிலாளருக்கு பயிற்சி அளித்தல் (15% பங்கு)",
    "score_item_disputes": "புகார்கள் இல்லாத வரலாறு (15% பங்கு)",
    "reasons_title": "உங்கள் புள்ளிக்கான காரணங்கள்",
    "reason_1": "✓ 142 வேலைகளில் 99.2% நேரத்திற்கு வருகை",
    "reason_2": "✓ வாடிக்கையாளர்களிடம் சராசரி 4.9 / 5.0 மதிப்பீடு",
    "reason_3": "✓ 8 தொழிலாளர்களுக்கு பயிற்சி அளித்துள்ளார்",
    "consent_warning_msg": "⚠️ பதிவு செய்வதற்கு முன் கூட்டுறவு விதிமுறைகளை ஒப்புக்கொள்ளவும்.",

    // Logout Modal
    "logout_confirm_title": "வெளியேறுவதை உறுதிசெய்",
    "logout_confirm_msg": "நிச்சயமாக கூட்டுறவு தளத்திலிருந்து வெளியேற வேண்டுமா?",
    "cancel": "ரத்து செய்",
    "confirm_logout": "ஆம், வெளியேறு",

    // History Page
    "history_title": "வேலை வரலாறு & வருமானம்",
    "history_sub": "முடித்த வேலைகள் மற்றும் கட்டண விவரங்கள்.",
    "tab_all": "அனைத்தும்",
    "tab_this_month": "இந்த மாதம்",
    "tab_paid": "கட்டணம் செலுத்தப்பட்டது (Paid)",
    "tab_processing": "செயலாக்கத்தில் (Processing)",
    "total_earned": "மொத்த வருமானம்",
    "paid_payouts": "பெறப்பட்ட தொகைகள்",
    "processing_payouts": "செயலாக்கத்தில் உள்ளவை",
    "th_job": "வேலை விவரம்",
    "th_client_area": "வாடிக்கையாளர் பகுதி",
    "th_date": "தேதி",
    "th_payment": "தொகை",
    "th_status": "நிலை",

    // Client Details Page
    "client_details_title": "ஏற்றுக்கொண்ட வேலை — வாடிக்கையாளர் விவரங்கள்",
    "client_name": "வாடிக்கையாளர் பெயர்",
    "client_age": "வயது",
    "client_phone": "தொலைபேசி எண்",
    "client_address": "முகவரி",
    "client_notes": "சிறப்பு குறிப்புகள்",
    "call_client": "அழைக்க",
    "get_directions": "வழித்தடம்",
    "mark_completed": "வேலையை முடித்துவிடு",
    "back_to_dashboard": "← முகப்புக்கு செல்"
  },

  hi: {
    // Header & Nav
    "nav_how_it_works": "यह कैसे काम करता है",
    "nav_services": "सेवाएं",
    "nav_sign_in": "श्रमिक साइन इन",
    "nav_dashboard": "डैशबोर्ड",
    "nav_community": "समुदाय",
    "nav_history": "इतिहास",
    "logout": "लॉग आउट",

    // Landing Hero
    "hero_worker_eyebrow": "सहकारी श्रमिकों के लिए",
    "hero_worker_title": "आपका कौशल, आपका सहकार, आपकी शर्तें।",
    "hero_worker_desc": "अपने श्रमिक सहकार द्वारा संचालित मंच से जुड़ें — अपनी कमाई का लगभग पूरा हिस्सा अपने पास रखें।",
    "register_as_worker": "श्रमिक के रूप में पंजीकरण करें",
    "hero_stat_fee_lbl": "केवल प्लेटफ़ॉर्म शुल्क",
    "hero_stat_vote_lbl": "1 श्रमिक, 1 वोट",
    "hero_stat_cat_lbl": "सेवा श्रेणियां",
    "hero_client_eyebrow": "घरों और संस्थानों के लिए",
    "hero_client_title": "सत्यापित सहायता, बिना किसी बिचौलिए के।",
    "hero_client_desc": "अपने स्थानीय श्रमिक सहकारी से इलेक्ट्रीशियन, प्लंबर और क्लीनर सीधे बुक करें।",
    "book_a_service": "सेवा बुक करें",

    // Principles Section
    "principles_eyebrow": "यह एक सहकारी मंच क्यों है",
    "principles_title": "काम करने वाले लोगों के हाथ में ही असली शक्ति।",
    "p1_title": "केवल सर्वर लागत",
    "p1_desc": "कोई अनुचित कमीशन नहीं। केवल तकनीकी रख-रखाव का छोटा शुल्क।",
    "p2_title": "स्वायत्त श्रमिक समुदाय",
    "p2_desc": "श्रमिक अपने चुने हुए प्रतिनिधि के साथ संगठित होते हैं।",
    "p3_title": "श्रमिक-से-श्रमिक प्रशिक्षण",
    "p3_desc": "किसी दफ़्तर की ज़रूरत नहीं — एक श्रमिक प्रशिक्षण का अनुरोध करता है और अनुभवी साथी उसे प्रशिक्षित करता है।",
    "p4_title": "आपकी अपनी भाषा में",
    "p4_desc": "पंजीकरण, कार्य और भुगतान आपकी पसंदीदा भाषा में उपलब्ध हैं।",

    // Dashboard
    "greeting": "शुभ प्रभात, मुरुगन",
    "jobs_available_sub": "आज आपके कौशल से मेल खाते 4 कार्य उपलब्ध हैं।",
    "stat_open_jobs": "आसपास के खुले कार्य",
    "stat_weekly_earned": "इस सप्ताह की कमाई",
    "stat_avg_rating": "औसत रेटिंग",
    "stat_active_trainings": "प्रशिक्षण अनुरोध",
    "available_jobs": "उपलब्ध कार्य",
    "accept": "स्वीकार करें",
    "accepted": "स्वीकृत",

    // Peer Training
    "peer_training_title": "श्रमिक-से-श्रमिक कौशल प्रशिक्षण",
    "peer_training_desc": "किसी दफ्तर की जरूरत नहीं। प्रशिक्षण के लिए आवेदन करें या साथी श्रमिक को प्रशिक्षित करें।",
    "apply_training_btn": "+ विशिष्ट प्रशिक्षण के लिए आवेदन करें",
    "open_training_claims": "खुले प्रशिक्षण अनुरोध",
    "claim_solar": "सोलर पैनल वायरिंग और इनवर्टर सेटअप",
    "claim_solar_sub": "कुमार P. द्वारा अनुरोधित · ₹400 शुल्क",
    "claim_smart": "स्मार्ट स्विचबोर्ड इंस्टॉलेशन",
    "claim_smart_sub": "सेलवम R. द्वारा अनुरोधित · ₹300 शुल्क",
    "accept_and_train": "स्वीकार करें और सिखाएं",
    "training_applied": "प्रशिक्षण अनुरोध सबमिट किया गया!",

    // Profile Stats Modal
    "profile_stats_title": "श्रमिक विश्वास और स्कोर विवरण",
    "overall_score_lbl": "कुल रेटिंग स्कोर",
    "score_formula_title": "स्कोर की गणना कैसे की जाती है",
    "score_item_punctuality": "समय पर कार्य पूर्णता (40% भार)",
    "score_item_ratings": "ग्राहक समीक्षाएं (30% भार)",
    "score_item_training": "साथी श्रमिक प्रशिक्षण (15% भार)",
    "score_item_disputes": "शून्य विवाद रिकॉर्ड (15% भार)",
    "reasons_title": "आपके स्कोर के मुख्य कारण",
    "reason_1": "✓ 142 कार्यों में 99.2% समय पर उपस्थिति",
    "reason_2": "✓ ग्राहकों से औसतन 4.9 / 5.0 रेटिंग",
    "reason_3": "✓ 8 साथी श्रमिकों को प्रशिक्षण दिया",
    "consent_warning_msg": "⚠️ कृपया पंजीकरण करने से पहले सहमति स्वीकार करें।",

    // Logout Modal
    "logout_confirm_title": "लॉग आउट की पुष्टि करें",
    "logout_confirm_msg": "क्या आप निश्चित रूप से लॉग आउट करना चाहते हैं?",
    "cancel": "रद्द करें",
    "confirm_logout": "हाँ, लॉग आउट करें",

    // History Page
    "history_title": "कार्य इतिहास और कमाई",
    "history_sub": "पूरे किए गए कार्य और भुगतान का विवरण।",
    "tab_all": "सभी",
    "tab_this_month": "इस महीने",
    "tab_paid": "भुगतान किया गया (Paid)",
    "tab_processing": "प्रक्रिया में (Processing)",
    "total_earned": "कुल कमाई",
    "paid_payouts": "प्राप्त भुगतान",
    "processing_payouts": "प्रक्रियाधीन",
    "th_job": "कार्य विवरण",
    "th_client_area": "ग्राहक क्षेत्र",
    "th_date": "तिथि",
    "th_payment": "राशि",
    "th_status": "स्थिति",

    // Client Details Page
    "client_details_title": "स्वीकृत कार्य — ग्राहक विवरण",
    "client_name": "ग्राहक का नाम",
    "client_age": "उम्र",
    "client_phone": "फोन नंबर",
    "client_address": "पता",
    "client_notes": "विशेष निर्देश",
    "call_client": "कॉल करें",
    "get_directions": "दिशा-निर्देश",
    "mark_completed": "कार्य पूर्ण मार्क करें",
    "back_to_dashboard": "← डैशबोर्ड पर वापस जाएं"
  },

  kn: {
    // Header & Nav
    "nav_how_it_works": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    "nav_services": "ಸೇವೆಗಳು",
    "nav_sign_in": "ಕಾರ್ಮಿಕ ಲಾಗಿನ್",
    "nav_dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "nav_community": "ಸಮುದಾಯ",
    "nav_history": "ಇತಿಹಾಸ",
    "logout": "ನಿರ್ಗಮನ",

    // Landing Hero
    "hero_worker_eyebrow": "ಸಹಕಾರಿ ಕಾರ್ಮಿಕರಿಗಾಗಿ",
    "hero_worker_title": "ನಿಮ್ಮ ಕೌಶಲ್ಯ, ನಿಮ್ಮ ಸಹಕಾರ, ನಿಮ್ಮ ನಿಯಮಗಳು.",
    "hero_worker_desc": "ನಿಮ್ಮ ಕಾರ್ಮಿಕ ಸಹಕಾರ ಸಂಘದ ವೇದಿಕೆಗೆ ಸೇರಿ — ಹೆಚ್ಚಿನ ಗಳಿಕೆ ನಿಮ್ಮದೇ.",
    "register_as_worker": "ಕಾರ್ಮಿಕರಾಗಿ ನೋಂದಾಯಿಸಿ",
    "hero_stat_fee_lbl": "ಕನಿಷ್ಠ ವೇದಿಕೆ ಶುಲ್ಕ",
    "hero_stat_vote_lbl": "1 ಕಾರ್ಮಿಕ, 1 ಮತ",
    "hero_stat_cat_lbl": "ಸೇವಾ ವಿಭಾಗಗಳು",
    "hero_client_eyebrow": "ಮನೆಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗಾಗಿ",
    "hero_client_title": "ನಂಬಿಕಸ್ಥ ಸೇವೆ, ಕಮಿಷನ್ ಇಲ್ಲದೆ.",
    "hero_client_desc": "ಸ್ಥಳೀಯ ಕಾರ್ಮಿಕ ಸಹಕಾರ ಸಂಘದಿಂದ ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಪ್ಲಂಬರ್ ಬುಕ್ ಮಾಡಿ.",
    "book_a_service": "ಸೇವೆ ಬುಕ್ ಮಾಡಿ",

    // Principles Section
    "principles_eyebrow": "ಇದು ಏಕೆ ಸಹಕಾರಿ ವೇದಿಕೆ",
    "principles_title": "ಕೆಲಸ ಮಾಡುವ ಜನರ ಕೈಯಲ್ಲೇ ನೈಜ ಶಕ್ತಿ.",
    "p1_title": "ಸರ್ವರ್ ವೆಚ್ಚ ಮಾತ್ರ",
    "p1_desc": "ಯಾವುದೇ ಕಮಿಷನ್ ಇಲ್ಲ. ಕೇವಲ ತಾಂತ್ರಿಕ ನಿರ್ವಹಣೆ ಶುಲ್ಕ.",
    "p2_title": "ಸ್ವಾಯತ್ತ ಕಾರ್ಮಿಕ ಸಮುದಾಯ",
    "p2_desc": "ಕಾರ್ಮಿಕರು ತಮ್ಮದೇ ಪ್ರತಿನಿಧಿಯೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾರೆ.",
    "p3_title": "ಕಾರ್ಮಿಕರ ನಡುವೆ ತರಬೇತಿ",
    "p3_desc": "ಕಚೇರಿ ಅಗತ್ಯವಿಲ್ಲ — ಒಬ್ಬ ಕಾರ್ಮಿಕ ತರಬೇತಿ ಕೇಳಿದಾಗ ಇನ್ನೊಬ್ಬ ಕಾರ್ಮಿಕ ಕನಿಷ್ಠ ಶುಲ್ಕದಲ್ಲಿ ತರಬೇತಿ ನೀಡುತ್ತಾರೆ.",
    "p4_title": "ನಿಮ್ಮ ಸ್ವಂತ ಭಾಷೆಯಲ್ಲಿ",
    "p4_desc": "ನೋಂದಣಿ, ಕೆಲಸಗಳು ಮತ್ತು ಪಾವತಿಗಳು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಲಭ್ಯ.",

    // Dashboard
    "greeting": "ಶುಭೋದಯ, ಮುರುಗನ್",
    "jobs_available_sub": "ಇಂದು ನಿಮ್ಮ ಹತ್ತಿರ 4 ಕೆಲಸಗಳು ಲಭ್ಯವಿವೆ.",
    "stat_open_jobs": "ಹತ್ತಿರದ ಕೆಲಸಗಳು",
    "stat_weekly_earned": "ಈ ವಾರದ ಗಳಿಕೆ",
    "stat_avg_rating": "ಸರಾಸರಿ ರೇಟಿಂಗ್",
    "stat_active_trainings": "ತರಬೇತಿ ವಿನಂತಿಗಳು",
    "available_jobs": "ಲಭ್ಯವಿರುವ ಕೆಲಸಗಳು",
    "accept": "ಸ್ವೀಕರಿಸಿ",
    "accepted": "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",

    // Peer Training
    "peer_training_title": "ಕಾರ್ಮಿಕ ತರಬೇತಿ ವಿನಿಮಯ",
    "peer_training_desc": "ಕಚೇರಿ ಅಗತ್ಯವಿಲ್ಲ. ತರಬೇತಿಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಅಥವಾ ಸಹೋದ್ಯೋಗಿಗೆ ತರಬೇತಿ ನೀಡಿ.",
    "apply_training_btn": "+ ತರಬೇತಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    "open_training_claims": "ತರಬೇತಿ ವಿನಂತಿಗಳು",
    "claim_solar": "ಸೋಲಾರ್ ಪ್ಯಾನಲ್ ವೈರಿಂಗ್ ತರಬೇತಿ",
    "claim_solar_sub": "ಕುಮಾರ್ P. ವಿನಂತಿಸಿದ್ದಾರೆ · ₹400 ಶುಲ್ಕ",
    "claim_smart": "ಸ್ಮಾರ್ಟ್ ಸ್ವಿಚ್‌ಬೋರ್ಡ್ ತರಬೇತಿ",
    "claim_smart_sub": "ಸೆಲ್ವಂ R. ವಿನಂತಿಸಿದ್ದಾರೆ · ₹300 ಶುಲ್ಕ",
    "accept_and_train": "ಸ್ವೀಕರಿಸಿ ತರಬೇತಿ ನೀಡಿ",
    "training_applied": "ತರಬೇತಿ ವಿನಂತಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",

    // Profile Stats Modal
    "profile_stats_title": "ಕಾರ್ಮಿಕ ವಿಶ್ವಾಸ ಮತ್ತು ರೇಟಿಂಗ್ ವಿವರ",
    "overall_score_lbl": "ಒಟ್ಟು ರೇಟಿಂಗ್ ಸ್ಕೋರ್",
    "score_formula_title": "ಸ್ಕೋರ್ ಅನ್ನು ಹೇಗೆ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ",
    "score_item_punctuality": "ಸಮಯಕ್ಕೆ ಕೆಲಸ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ (40% ಪಾಲು)",
    "score_item_ratings": "ಗ್ರಾಹಕರ ರೇಟಿಂಗ್ (30% ಪಾಲು)",
    "score_item_training": "ಸಹೋದ್ಯೋಗಿ ತರಬೇತಿ (15% ಪಾಲು)",
    "score_item_disputes": "ದೂರುಗಳಿಲ್ಲದ ಇತಿಹಾಸ (15% ಪಾಲು)",
    "reasons_title": "ನಿಮ್ಮ ಸ್ಕೋರ್‌ಗೆ ಕಾರಣಗಳು",
    "reason_1": "✓ 142 ಕೆಲಸಗಳಲ್ಲಿ 99.2% ಸಮಯಕ್ಕೆ ಭೇಟಿ",
    "reason_2": "✓ ಗ್ರಾಹಕರಿಂದ ಸರಾಸರಿ 4.9 / 5.0 ರೇಟಿಂಗ್",
    "reason_3": "✓ 8 ಕಾರ್ಮಿಕರಿಗೆ ತರಬೇತಿ ನೀಡಿದ್ದಾರೆ",
    "consent_warning_msg": "⚠️ ನೋಂದಾಯಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಒಪ್ಪಿಗೆಯನ್ನು ಸ್ವೀಕರಿಸಿ.",

    // Logout Modal
    "logout_confirm_title": "ನಿರ್ಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿ",
    "logout_confirm_msg": "ನೀವು ಖಂಡಿತವಾಗಿಯೂ ನಿರ್ಗಮಿಸಲು ಬಯಸುತ್ತೀರಾ?",
    "cancel": "ರದ್ದುಮಾಡಿ",
    "confirm_logout": "ಹೌದು, ನಿರ್ಗಮಿಸಿ",

    // History Page
    "history_title": "ಕೆಲಸದ ಇತಿಹಾಸ ಮತ್ತು ಗಳಿಕೆ",
    "history_sub": "ಪೂರ್ಣಗೊಂಡ ಕೆಲಸಗಳು ಮತ್ತು ಪಾವತಿ ವಿವರಗಳು.",
    "tab_all": "ಎಲ್ಲವೂ",
    "tab_this_month": "ಈ ತಿಂಗಳು",
    "tab_paid": "ಪಾವತಿಸಲಾಗಿದೆ (Paid)",
    "tab_processing": "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ (Processing)",
    "total_earned": "ಒಟ್ಟು ಗಳಿಕೆ",
    "paid_payouts": "ಸ್ವೀಕರಿಸಿದ ಹಣ",
    "processing_payouts": "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿರುವ ಹಣ",
    "th_job": "ಕೆಲಸದ ವಿವರ",
    "th_client_area": "ಗ್ರಾಹಕರ ಪ್ರದೇಶ",
    "th_date": "ದಿನಾಂಕ",
    "th_payment": "ಮೊತ್ತ",
    "th_status": "ಸ್ಥಿತಿ",

    // Client Details Page
    "client_details_title": "ಸ್ವೀಕರಿಸಿದ ಕೆಲಸ — ಗ್ರಾಹಕರ ವಿವರಗಳು",
    "client_name": "ಗ್ರಾಹಕರ ಹೆಸರು",
    "client_age": "ವಯಸ್ಸು",
    "client_phone": "ಫೋನ್ ಸಂಖ್ಯೆ",
    "client_address": "ವಿಳಾಸ",
    "client_notes": "ವಿಶೇಷ ಸೂಚನೆಗಳು",
    "call_client": "ಕಾಲ್ ಮಾಡಿ",
    "get_directions": "ದಾರಿತೋರಿಸಿ",
    "mark_completed": "ಕೆಲಸ ಪೂರ್ಣಗೊಳಿಸಿ",
    "back_to_dashboard": "← ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ"
  },

  ml: {
    // Header & Nav
    "nav_how_it_works": "പ്രവർത്തനം എങ്ങനെ",
    "nav_services": "സേവനങ്ങൾ",
    "nav_sign_in": "തൊഴിലാളി ലോഗിൻ",
    "nav_dashboard": "ഡാഷ്‌ബോർഡ്",
    "nav_community": "കമ്മ്യൂണിറ്റി",
    "nav_history": "ചരിത്രം",
    "logout": "ലോഗ് ഔട്ട്",

    // Landing Hero
    "hero_worker_eyebrow": "സഹകരണ തൊഴിലാളികൾക്കായി",
    "hero_worker_title": "നിങ്ങളുടെ കഴിവ്, നിങ്ങളുടെ സഹകരണം, നിങ്ങളുടെ വ്യവസ്ഥകൾ.",
    "hero_worker_desc": "തൊഴിലാളി സഹകരണ സംഘത്തിന്റെ പ്ലാറ്റ്‌ഫോമിൽ ചേരൂ — വരുമാനത്തിന്റെ ഭൂരിഭാഗവും നിങ്ങൾക്ക് തന്നെ.",
    "register_as_worker": "തൊഴിലാളിയായി രജിസ്റ്റർ ചെയ്യുക",
    "hero_stat_fee_lbl": "കുറഞ്ഞ പ്ലാറ്റ്‌ഫോം ഫീസ് മാത്രം",
    "hero_stat_vote_lbl": "1 തൊഴിലാളി, 1 വോട്ട്",
    "hero_stat_cat_lbl": "സേവന വിഭാഗങ്ങൾ",
    "hero_client_eyebrow": "വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും",
    "hero_client_title": "വിശ്വസനീയമായ സേവനം, ഇടനിലക്കാരില്ലാതെ.",
    "hero_client_desc": "ഇലക്ട്രീഷ്യൻമാർ, പ്ലംബർമാർ എന്നിവരെ നേരിട്ട് ബുക്ക് ചെയ്യുക.",
    "book_a_service": "സേവനം ബുക്ക് ചെയ്യുക",

    // Principles Section
    "principles_eyebrow": "ഇതൊരു സഹകരണ പ്ലാറ്റ്‌ഫോമാണ്",
    "principles_title": "അധ്വാനിക്കുന്ന ജനങ്ങൾക്ക് തന്നെ പരമാവധി അധികാരം.",
    "p1_title": "സെർവർ ഫീസ് മാത്രം",
    "p1_desc": "കമ്മിഷൻ ചൂഷണമില്ല. സാങ്കേതിക പരിപാലന ഫീസ് മാത്രം.",
    "p2_title": "സ്വയംഭരണ തൊഴിലാളി സമൂഹം",
    "p2_desc": "തൊഴിലാളികൾ തിരഞ്ഞെടുക്കപ്പെട്ട പ്രതിനിധിയുമായി പ്രവർത്തിക്കുന്നു.",
    "p3_title": "തൊഴിലാളികൾ തമ്മിലുള്ള പരിശീലനം",
    "p3_desc": "ഓഫീസുകൾ ആവശ്യമില്ല — പരിശീലനം ആവശ്യപ്പെടുമ്പോൾ അനുഭവസമ്പന്നനായ സഹപ്രവർത്തകൻ പരിശീലനം നൽകുന്നു.",
    "p4_title": "നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ",
    "p4_desc": "രജിസ്ട്രേഷനും ജോലികളും പണമടക്കലും നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ.",

    // Dashboard
    "greeting": "സുപ്രഭാതം, മുരുകൻ",
    "jobs_available_sub": "ഇന്ന് നിങ്ങളുടെ കഴിവുകൾക്ക് അനുയോജ്യമായ 4 ജോലികൾ ലഭ്യമാണ്.",
    "stat_open_jobs": "അടുത്തുള്ള ജോലികൾ",
    "stat_weekly_earned": "ഈ ആഴ്ചയിലെ വരുമാനം",
    "stat_avg_rating": "ശരാശരി റേറ്റിംഗ്",
    "stat_active_trainings": "പരിശീലന അപേക്ഷകൾ",
    "available_jobs": "ലഭ്യമായ ജോലികൾ",
    "accept": "സ്വീകരിക്കുക",
    "accepted": "സ്വീകരിച്ചു",

    // Peer Training
    "peer_training_title": "തൊഴിലാളി പരിശീലന കൈമാറ്റം",
    "peer_training_desc": "ഓഫീസ് ആവശ്യമില്ല. പരിശീലനത്തിന് അപേക്ഷിക്കുക അല്ലെങ്കിൽ സഹപ്രവർത്തകനെ പരിശീലിപ്പിക്കുക.",
    "apply_training_btn": "+ പരിശീലനത്തിന് അപേക്ഷിക്കുക",
    "open_training_claims": "പരിശീലന അപേക്ഷകൾ",
    "claim_solar": "സോളാർ പാനൽ വയറിംഗ് പരിശീലനം",
    "claim_solar_sub": "കുമാർ P. അപേക്ഷിച്ചു · ₹400 ഫീസ്",
    "claim_smart": "സ്മാർട്ട് സ്വിച്ച് ബോർഡ് പരിശീലനം",
    "claim_smart_sub": "ശെൽവം R. അപേക്ഷിച്ചു · ₹300 ഫീസ്",
    "accept_and_train": "സ്വീകരിച്ചു പരിശീലിപ്പിക്കുക",
    "training_applied": "പരിശീലന അപേക്ഷ സമർപ്പിച്ചു!",

    // Profile Stats Modal
    "profile_stats_title": "തൊഴിലാളി വിശ്വാസ്യതയും സ്കോറും",
    "overall_score_lbl": "ആകെ റേറ്റിംഗ് സ്കോർ",
    "score_formula_title": "സ്കോർ എങ്ങനെ കണക്കാക്കുന്നു",
    "score_item_punctuality": "കൃത്യസമയത്ത് ജോലി പൂർത്തിയാക്കൽ (40% പങ്ക്)",
    "score_item_ratings": "ക്ലയന്റ് റേറ്റിംഗ് (30% പങ്ക്)",
    "score_item_training": "സഹപ്രവർത്തകർക്കുള്ള പരിശീലനം (15% പങ്ക്)",
    "score_item_disputes": "പരാതികളില്ലാത്ത ചരിത്രം (15% പങ്ക്)",
    "reasons_title": "നിങ്ങളുടെ സ്കോറിന് പിന്നിലെ കാരണങ്ങൾ",
    "reason_1": "✓ 142 ജോലികളിൽ 99.2% കൃത്യസമയത്ത് എത്തി",
    "reason_2": "✓ ക്ലയന്റുകളിൽ നിന്ന് ശരാശരി 4.9 / 5.0 റേറ്റിംഗ്",
    "reason_3": "✓ 8 സഹപ്രവർത്തകർക്ക് പരിശീലനം നൽകി",
    "consent_warning_msg": "⚠️ രജിസ്റ്റർ ചെയ്യുന്നതിന് മുമ്പ് ദയവായി സമ്മതം നൽകുക.",

    // Logout Modal
    "logout_confirm_title": "ലോഗ് ഔട്ട് സ്ഥിരീകരിക്കുക",
    "logout_confirm_msg": "തീർച്ചയായും ലോഗ് ഔട്ട് ചെയ്യണമെന്നുണ്ടോ?",
    "cancel": "റദ്ദാക്കുക",
    "confirm_logout": "അതെ, ലോഗ് ഔട്ട് ചെയ്യുക",

    // History Page
    "history_title": "ജോലി ചരിത്രവും വരുമാനവും",
    "history_sub": "പൂർത്തിയാക്കിയ ജോലികളും പേയ്‌മെന്റ് വിവരങ്ങളും.",
    "tab_all": "എല്ലാം",
    "tab_this_month": "ഈ മാസം",
    "tab_paid": "പണം നൽകിയത് (Paid)",
    "tab_processing": "പ്രോസസ്സിംഗിൽ (Processing)",
    "total_earned": "ആകെ വരുമാനം",
    "paid_payouts": "ലഭിച്ച തുക",
    "processing_payouts": "പ്രോസസ്സ് ചെയ്യുന്നത്",
    "th_job": "ജോലി വിവരങ്ങൾ",
    "th_client_area": "ക്ലയന്റ് സ്ഥലം",
    "th_date": "തീയതി",
    "th_payment": "തുക",
    "th_status": "സ്റ്റാറ്റസ്",

    // Client Details Page
    "client_details_title": "സ്വീകരിച്ച ജോലി — ക്ലയന്റ് വിവരങ്ങൾ",
    "client_name": "ക്ലയന്റ് പേര്",
    "client_age": "വയസ്സ്",
    "client_phone": "ഫോൺ നമ്പർ",
    "client_address": "വിലാസം",
    "client_notes": "പ്രത്യേക നിർദ്ദേശങ്ങൾ",
    "call_client": "കോൾ ചെയ്യുക",
    "get_directions": "വഴി കാട്ടുക",
    "mark_completed": "ജോലി പൂർത്തിയായി എന്ന് അടയാളപ്പെടുത്തുക",
    "back_to_dashboard": "← ഡാഷ്‌ബോർഡിലേക്ക് മടങ്ങുക"
  }
};

window.I18n = {
  getLanguage: function() {
    return localStorage.getItem('sahakari_lang') || 'en';
  },

  setLanguage: function(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('sahakari_lang', lang);
    this.applyLanguage(lang);
  },

  applyLanguage: function(lang) {
    const currentLang = lang || this.getLanguage();
    const dict = translations[currentLang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Sync all dropdown selects with class .lang-select
    document.querySelectorAll('.lang-select').forEach(select => {
      const valMap = {
        'en': 'English',
        'ta': 'தமிழ் (Tamil)',
        'hi': 'हिन्दी (Hindi)',
        'kn': 'ಕನ್ನಡ (Kannada)',
        'ml': 'മലയാളം (Malayalam)'
      };
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === currentLang || select.options[i].text.startsWith(valMap[currentLang] || 'English')) {
          select.selectedIndex = i;
          break;
        }
      }
    });
  },

  init: function() {
    const self = this;
    const current = self.getLanguage();

    // Bind all .lang-select dropdowns
    document.querySelectorAll('.lang-select').forEach(select => {
      select.addEventListener('change', function(e) {
        const val = e.target.value;
        let langCode = 'en';
        if (val.includes('Tamil') || val.includes('தமிழ்') || val === 'ta') langCode = 'ta';
        else if (val.includes('Hindi') || val.includes('हिन्दी') || val === 'hi') langCode = 'hi';
        else if (val.includes('Kannada') || val.includes('ಕನ್ನಡ') || val === 'kn') langCode = 'kn';
        else if (val.includes('Malayalam') || val.includes('മലയാളം') || val === 'ml') langCode = 'ml';

        self.setLanguage(langCode);
      });
    });

    self.applyLanguage(current);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.I18n.init();
});
